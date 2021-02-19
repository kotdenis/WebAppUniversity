using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Data
{
    public interface IPersonRepository
    {
        Task<IEnumerable<EnrolleeAndDepartment>> GetFullEnrolleeDepartmentAsync();
        Task<IEnumerable<EnrolleeAndDepartment>> GetConcreteEnrolleeDepartmentAsync(string programName, string departmentName);
        Task<IEnumerable<UgeResults>> GetUgeResultsAsync();
        Task<IEnumerable<Statement>> GetStatementsAsync();
    }
}
