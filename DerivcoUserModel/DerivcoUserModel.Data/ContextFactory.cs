using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DerivcoUserModel.Data
{
    class ContextFactory : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<Context>();
            optionsBuilder.UseSqlServer("server=.;Database=DerivcoUserModel;Trusted_Connection=True;");

            return new Context(optionsBuilder.Options);
        }

    }
}
