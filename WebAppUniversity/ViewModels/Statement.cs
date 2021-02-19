using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppUniversity.ViewModels
{
    public class Statement : IBaseViewModel
    {
        public string DepartmentName { get; set; }
        public string ProgramName { get; set; }
        public int Plan { get; set; }
        public int Amount { get; set; }
        public float Contest { get; set; }
    }
}
