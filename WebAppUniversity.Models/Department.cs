using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebAppUniversity.Models
{
    public class Department : BaseModel
    {
        public Department()
        {
            Programs = new HashSet<Programs>();
        }

        [Key]
        public int Department_Id { get; set; }
        [StringLength(50)]
        [Required]
        public string Name { get; set; }
        [StringLength(500)]
        public string Description { get; set; }

        public virtual ICollection<Programs> Programs { get; set; }
    }
}
