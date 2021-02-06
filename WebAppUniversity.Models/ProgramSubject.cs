using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class ProgramSubject : BaseModel
    {
        [Key]
        public int ProgramSubject_Id { get; set; }
        public int Program_Id { get; set; }
        public int Subject_Id { get; set; }
        public int MinResult { get; set; }

        public virtual Programs Programs { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
