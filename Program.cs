using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Authentication.JwtBearer;
namespace project
{
    class Program
    {
        public static void Main(string[] args)
        {

            Database.Execute(Database.Start());

            var AllowedOrigins = "AllowedOrigins";

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(

            );

            builder.Services.AddCors(options =>
                {
                options.AddPolicy(name: AllowedOrigins,
                                policy  =>
                                {
                                    policy.WithOrigins("http://localhost:5173"); // add the allowed origins
                                });
                });
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
            app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.UseCors(AllowedOrigins);

            app.Run();
        }
        }
}
