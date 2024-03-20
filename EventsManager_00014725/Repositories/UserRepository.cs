using EventsManager_00014725.Data;
using EventsManager_00014725.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsManager_00014725.Repositories
{
    // WIUT STUDENT ID: 00014725
    public class UserRepository : IRepository<User>
    {
        private readonly GeneralDbContext _context;

        public UserRepository(GeneralDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetByIDAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }
        public async Task AddAsync(User entity)
        {
            await _context.Users.AddAsync(entity);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(User entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Users.FindAsync(id);
            if (entity != null)
            {
                _context.Users.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

    }
}
