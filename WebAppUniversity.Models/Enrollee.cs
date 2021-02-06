using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Enrollee : BaseModel
    {
        public Enrollee()
        {
            ProgramEnrollees = new HashSet<ProgramEnrollee>();
            EnrolleeSubjects = new HashSet<EnrolleeSubject>();
            EnrolleeAchievements = new HashSet<EnrolleeAchievement>();
            Applicants = new HashSet<Applicant>();
        }

        [Key]
        public int Enrollee_Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public virtual ICollection<ProgramEnrollee> ProgramEnrollees { get; set; }
        public virtual ICollection<EnrolleeSubject> EnrolleeSubjects { get; set; }
        public virtual ICollection<EnrolleeAchievement> EnrolleeAchievements { get; set; }
        public virtual ICollection<Applicant> Applicants { get; set; }
    }
}
