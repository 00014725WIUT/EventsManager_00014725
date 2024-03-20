using Microsoft.EntityFrameworkCore;
using EventsManager_00014725.Models;

namespace EventsManager_00014725.Data
{
    // WIUT STUDENT ID: 00014725

    public class GeneralDbContext : DbContext
    {
        public GeneralDbContext(DbContextOptions<GeneralDbContext> o) : base(o) { }

        public DbSet<Events> Events { get; set; }
        public DbSet<User> Users { get; set; }
    }
}

