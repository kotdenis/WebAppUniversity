using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppUniversity.DbRepository
{
    public interface IAdminRepository<T> where T : class
    {
        Task<IEnumerable<U>> GetItemsAsync<U>() where U : T;
        Task<U> GetItemAsync<U>(int id) where U : T;
        Task CreateAsync<U>(U item) where U : T;
        Task<bool> UpdateAsync<U>(U item) where U : T;
        Task<bool> DeleteAsync<U>(int id) where U : T;
    }
}
