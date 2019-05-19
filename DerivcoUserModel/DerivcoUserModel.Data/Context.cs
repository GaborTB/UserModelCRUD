using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DerivcoUserModel.Data.Models;

namespace DerivcoUserModel.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Address> Address { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        /*public override int SaveChanges()
        {
            foreach (var entry in this.ChangeTracker.Entries().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
            {
                entry.Property("CreatedAt").CurrentValue = entry.Property("CreatedAt").CurrentValue == null || (DateTime) entry.Property("CreatedAt").CurrentValue == DateTime.MinValue ? DateTime.Now : entry.Property("CreatedAt").CurrentValue;
                entry.Property("UpdatedAt").CurrentValue = DateTime.Now;
            }
            return base.SaveChanges();
        }*/
    }
}
