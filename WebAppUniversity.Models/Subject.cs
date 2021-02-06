using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Subject : BaseModel
    {
        public Subject()
        {
            ProgramSubjects = new HashSet<ProgramSubject>();
            EnrolleeSubjects = new HashSet<EnrolleeSubject>();
        }

        [Key]
        public int Subject_Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public ICollection<ProgramSubject> ProgramSubjects { get; set; }
        public ICollection<EnrolleeSubject> EnrolleeSubjects { get; set; }
    }
}
