using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class ProgramEnrollee : BaseModel
    {
        [Key] 
        public int ProgramEnrollee_Id { get; set; }
        public int Program_Id { get; set; }
        public int Enrollee_Id { get; set; } 

        public virtual Programs Programs { get; set; }
        public virtual Enrollee Enrollee { get; set; }
    }
}
