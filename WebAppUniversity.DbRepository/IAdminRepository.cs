using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppUniversity.DbRepository
{
    public interface IAdminRepository<T>
    {
        Task<IEnumerable<U>> GetItemsAsync<U>() where U : T;
        Task<U> GetItemAsync<U>(int id) where U : T;
        Task CreateAsync<U>(U item) where U : T;
        Task UpdateAsync<U>(int id, U item) where U : T;
        Task DeleteAsync<U>(int id) where U : T;
    }
}
