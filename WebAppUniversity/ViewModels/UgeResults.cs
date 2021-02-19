using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppUniversity.ViewModels
{
    public sealed class UgeResults : IBaseViewModel
    {
        public int Number { get; set; }
        public string SubjectName { get; set; }
        public int Amount { get; set; }
        public int MaxValue { get; set; }
        public int MinValue { get; set; }
        public float AverageValue { get; set; }
    }
}
