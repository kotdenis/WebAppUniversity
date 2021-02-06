using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Applicant : BaseModel
    {
        [Key]
        public int Applicant_Id { get; set; }
        public int Program_Id { get; set; }
        public int Enrollee_Id { get; set; }
        public int Itog { get; set; }

        public virtual Enrollee Enrollee { get; set; }
        public virtual Programs Programs { get; set; }
    }
}
