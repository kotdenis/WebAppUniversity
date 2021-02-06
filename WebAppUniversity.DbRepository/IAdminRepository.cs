using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppUniversity.DbRepository
{
    public interface IAdminRepository<T>
    {
        Task<IQueryable<U>> GetItemsAsync<U>(object options) where U : T;
        Task<U> GetItemAsync<U>(int id) where U : T;
        Task CreateAsync<U>(U item) where U : T;
        Task Update<U>(U item) where U : T;
        Task DeleteAsync<U>(int id) where U : T;
    }
}
