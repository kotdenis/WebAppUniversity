using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class EnrolleeAchievement : BaseModel
    {
        [Key]
        public int EnrolleeAchievement_Id { get; set; }
        public int Enrollee_Id { get; set; }
        public int Achievement_Id { get; set; }

        public virtual Enrollee Enrollee { get; set; }
        public virtual Achievement Achievement { get; set; }
    }
}
