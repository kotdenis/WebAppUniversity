using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Data
{
    public interface IPersonRepository
    {
        Task<IQueryable<EnrolleeAndDepartment>> GetFirstEnrolleeDepartmentAsync();
    }
}
