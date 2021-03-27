using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
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
            try
            {
                await context.Set<TEntity>().AddAsync(item);
                await context.SaveChangesAsync();
            }
            catch(Exception) { }
        }

        public async Task<bool> DeleteAsync<TEntity>(int id) where TEntity : BaseModel
        {
            var item = await context.Set<TEntity>().FindAsync(id);
            if (item != null)
            {
                context.Set<TEntity>().Remove(item);
                await context.SaveChangesAsync();
                return true;
            }
            else
                return false;
        }

        public async Task<TEntity> GetItemAsync<TEntity>(int id) where TEntity : BaseModel
        {
            try
            {
                return await context.Set<TEntity>().FindAsync(id).ConfigureAwait(false);
            }
            catch(Exception) { return null; }
        }

        public async Task<IEnumerable<TEntity>> GetItemsAsync<TEntity>() where TEntity : BaseModel
        {
            try
            {
                return await context.Set<TEntity>().ToListAsync().ConfigureAwait(false);
            }
            catch(Exception) { return new List<TEntity>(); }
        }

        public async Task<bool> UpdateAsync<TEntity>(TEntity item) where TEntity : BaseModel
        {
            try
            {
                if (context.Entry(item).IsKeySet)
                {
                    context.Entry(item).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch(DbUpdateConcurrencyException) { return false;  }
        }
    }
}
