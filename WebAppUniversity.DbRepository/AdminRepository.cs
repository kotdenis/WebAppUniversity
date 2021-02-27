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
            await context.Set<TEntity>().AddAsync(item);
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

        public async Task UpdateAsync<TEntity>(int id, TEntity item) where TEntity : BaseModel
        {
            try
            {
                if(item is Department dep && dep.Department_Id == id)
                {
                    context.Entry(dep).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                }
                if(item is Subject sub && sub.Subject_Id == id)
                {
                    context.Entry(sub).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                }
                if(item is Enrollee enr && enr.Enrollee_Id == id)
                {
                    context.Entry(enr).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                }
                if(item is Achievement ach && ach.Achievement_Id == id)
                {
                    context.Entry(ach).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                }
                if(item is Programs prog && prog.Program_Id == id)
                {
                    context.Entry(prog).State = EntityState.Modified;
                    await context.SaveChangesAsync();
                }
            }
            catch(Exception) {  }
        }
    }
}
