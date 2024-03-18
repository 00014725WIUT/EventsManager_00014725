using EventsManager_00014725.Models;
using EventsManager_00014725.Data;
using Microsoft.EntityFrameworkCore;


namespace EventsManager_00014725.Repositories
{
    public class EventRepository : IRepository<Events>
    {
        private readonly GeneralDbContext _context;
        public EventRepository(GeneralDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Events>> GetAllAsync()
        {
            return await _context.Events.ToListAsync();
        }
        public async Task<Events> GetByIDAsync(int id)
        {
            return await _context.Events.FindAsync(id);
        }
        public async Task AddAsync(Events entity)
        {
            await _context.Events.AddAsync(entity);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(Events entity)
        {
            _context.Events.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Events.FindAsync(id);
            if (entity != null)
            {
                _context.Events.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
