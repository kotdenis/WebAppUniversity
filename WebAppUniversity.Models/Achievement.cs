using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Achievement : BaseModel
    {
        public Achievement()
        {
            EnrolleeAchievements = new HashSet<EnrolleeAchievement>();
        }

        [Key]
        public int Achievement_Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int Bonus { get; set; }

        public virtual ICollection<EnrolleeAchievement> EnrolleeAchievements { get; set; }
    }
}
