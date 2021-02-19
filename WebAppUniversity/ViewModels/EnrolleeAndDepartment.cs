using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppUniversity.ViewModels
{
    public sealed class EnrolleeAndDepartment : IBaseViewModel
    {
        public int Id { get; set; }
        public string EnrolleeName { get; set; }
        public string ProgramName { get; set; }
        public string DepartmentName { get; set; }
    }
}
