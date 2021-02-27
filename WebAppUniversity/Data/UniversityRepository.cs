using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppUniversity.DbRepository;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Data
{
    public class UniversityRepository : IUniversityRepository
    {
        private readonly UniversityDbContext _context;

        public UniversityRepository(UniversityDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<EnrolleeAndDepartment>> GetFullEnrolleeDepartmentAsync()
        {
            try
            {
                if (_context.Enrollees.Count() == 0)
                    return null;
                return await (from enrol in _context.Enrollees
                              join programEnr in _context.ProgramEnrollees on enrol.Enrollee_Id equals programEnr.Enrollee_Id
                              into ProgramEnrolleesTemp
                              from ProgramEnr in ProgramEnrolleesTemp.DefaultIfEmpty()
                              join program in _context.Programs on ProgramEnr.Program_Id equals program.Program_Id
                              into ProgramTemp
                              from Program in ProgramTemp.DefaultIfEmpty()
                              join department in _context.Departments on Program.Department_Id equals department.Department_Id
                              into DepartmentTemp
                              from Department in DepartmentTemp.DefaultIfEmpty()
                              orderby enrol.Name
                              select new EnrolleeAndDepartment()
                              {
                                  Id = ProgramEnr.ProgramEnrollee_Id,
                                  DepartmentName = Department.Name,
                                  EnrolleeName = enrol.Name,
                                  ProgramName = Program.Name
                              }).ToListAsync().ConfigureAwait(false);
            }
            catch (Exception) { return new List<EnrolleeAndDepartment>(); }
        }

        public async Task<IEnumerable<EnrolleeAndDepartment>> GetConcreteEnrolleeDepartmentAsync(string programName, string departmentName)
        {
            try
            {
                if (_context.Enrollees.Count() == 0)
                    return null;

                var list = await GetFullEnrolleeDepartmentAsync().ConfigureAwait(false);

                if (!string.IsNullOrEmpty(programName) && string.IsNullOrEmpty(departmentName))
                    return list.Where(x => x.ProgramName == programName);
                if (string.IsNullOrEmpty(programName) && !string.IsNullOrEmpty(departmentName))
                    return list.Where(x => x.DepartmentName == departmentName);
                if (!string.IsNullOrEmpty(programName) && !string.IsNullOrEmpty(departmentName))
                    return list.Where(x => x.DepartmentName == departmentName &&
                    x.ProgramName == programName);

                return list;
            }
            catch (Exception) { return new List<EnrolleeAndDepartment>(); }
        }

        public async Task<IEnumerable<UgeResults>> GetUgeResultsAsync()
        {
            try
            {
                return await (from sub in _context.Subjects
                              join enr in _context.EnrolleeSubjects on sub.Subject_Id equals enr.Subject_Id
                              into EnrTemp
                              from Enr in EnrTemp.DefaultIfEmpty()
                              group sub by sub.Name into subName

                              select new UgeResults()
                              {
                                  SubjectName = subName.Select(x => x.Name).FirstOrDefault(),
                                  Amount = Enumerable.Count(subName.Select(x => x.Name)),
                                  AverageValue = (float)Math.Round(Enumerable.Average(subName.SelectMany(x => x.EnrolleeSubjects.Select(y => y.Result))), 1),
                                  MaxValue = Enumerable.Max(subName.SelectMany(x => x.EnrolleeSubjects.Select(y => y.Result))),
                                  MinValue = Enumerable.Min(subName.SelectMany(x => x.EnrolleeSubjects.Select(y => y.Result))),
                                  Number = 1
                              }).ToListAsync().ConfigureAwait(false);
            }
            catch (Exception) { return new List<UgeResults>(); }
        }


        public async Task<IEnumerable<Statement>> GetStatementsAsync()
        {
            try
            {
                return await (from progEnr in _context.ProgramEnrollees
                              join program in _context.Programs on progEnr.Program_Id equals program.Program_Id
                              join department in _context.Departments on program.Department_Id equals department.Department_Id
                              group progEnr by progEnr.Programs into progEnrollee
                              select new Statement()
                              {
                                  DepartmentName = progEnrollee.Select(x => x.Programs.Department.Name).FirstOrDefault(),
                                  ProgramName = progEnrollee.Select(x => x.Programs.Name).FirstOrDefault(),
                                  Amount = Enumerable.Count(progEnrollee.Select(x => x.Enrollee_Id)),
                                  Plan = progEnrollee.Select(x => x.Programs.Plan).FirstOrDefault(),
                                  Contest = (float)Math.Round((float)Enumerable.Count(progEnrollee.Select(x => x.Enrollee_Id)) /
                                  progEnrollee.Select(x => x.Programs.Plan).FirstOrDefault(), 2)
                              }
                              ).ToListAsync().ConfigureAwait(false);
            }
            catch (Exception) { return new List<Statement>(); }
        }
    }
}
