using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppUniversity.Models;

namespace WebAppUniversity.DbRepository
{
    public class AdminRepository : IAdminRepository<BaseModel>
    {
        UniversityDbContext context;

        
        public AdminRepository(UniversityDbContext context) 
        {
            this.context = context;
        }

        public async Task CreateAsync<TEntity>(TEntity item) where TEntity : BaseModel 
        {
            context.Set<TEntity>().Add(item);
            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync<TEntity>(int id) where TEntity : BaseModel
        {
            var item = await context.Set<TEntity>().FindAsync(id);
            context.Set<TEntity>().Remove(item);
            await context.SaveChangesAsync();
        }

        public async Task<TEntity> GetItemAsync<TEntity>(int id) where TEntity : BaseModel
        {
            return await context.Set<TEntity>().FindAsync(id);
        }

        public async Task<IQueryable<TEntity>> GetItemsAsync<TEntity>(object options = null) where TEntity : BaseModel
        {
            return await Task.Run<IQueryable<TEntity>>(() => context.Set<TEntity>());
        }

        public Task Update<TEntity>(TEntity item) where TEntity : BaseModel
        {
            return null;
        }
    }
}
