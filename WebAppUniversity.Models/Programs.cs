using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Programs : BaseModel
    {
        public Programs()
        {
            ProgramEnrollees = new HashSet<ProgramEnrollee>();
            ProgramSubjects = new HashSet<ProgramSubject>();
            Applicants = new HashSet<Applicant>();
        }

        [Key]
        public int Program_Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int Department_Id { get; set; }
        [StringLength(500)]
        public string Description { get; set; }
        public int Plan { get; set; }

        public virtual Department Department { get; set; } 

        public virtual ICollection<ProgramEnrollee> ProgramEnrollees { get; set; }
        public virtual ICollection<ProgramSubject> ProgramSubjects { get; set; }
        public virtual ICollection<Applicant> Applicants { get; set; }
    }
}
