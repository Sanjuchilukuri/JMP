using JMP.DAL.DBContext;
using JMP.DAL.interfaces;
using JMP.DAL.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace JMP.DAL
{
    public static class ServiceExtensions
    {
        public static void ConfigureDAL(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IJobRepo, JobRepo>();
            services.AddDbContext<JMPDBContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("localConnection"));
            });
            
            services.AddScoped<DBInitializer>();
        }
    }
}
