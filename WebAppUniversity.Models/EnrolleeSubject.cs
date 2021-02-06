using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class EnrolleeSubject : BaseModel
    {
        [Key]
        public int EnrolleeSubject_Id { get; set; }
        public int Subject_Id { get; set; }
        public int Enrollee_Id { get; set; }
        public int Result { get; set; }

        public virtual Enrollee Enrollee { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
