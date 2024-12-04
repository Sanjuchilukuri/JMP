using JMP.DAL;


namespace JMP.WebApi
{
    public class Program
    {
        private static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.ConfigureDAL(builder.Configuration);
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            using( var scope = app.Services.CreateScope())
            {
                var dBInitializer = scope.ServiceProvider.GetRequiredService<DBInitializer>();
                await dBInitializer.InitializeAsync();
            }

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}