using JMP.BAL.Interfaces;
using JMP.BAL.Services;
using Microsoft.Extensions.DependencyInjection;

namespace JMP.BAL
{
    public static class ServiceExtensions
    {
        public static void ConfigureBAL(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
        }
    }
}
