using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Data
{
    public sealed class PersonRepository : IPersonRepository
    {
        private readonly UniversityDbContext _context;
        
        public PersonRepository(UniversityDbContext context)
        {
            _context = context;
        }

        public Task<IQueryable<EnrolleeAndDepartment>> GetFirstEnrolleeDepartmentAsync()
        {
            return Task.Run(() =>
            {
                if (_context.Enrollees.Count() == 0)
                    return null;

                return (from enrol in _context.Enrollees
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
                        });
            });
        }

    }
}
