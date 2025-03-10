using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using JsonSubTypes;

namespace project
{
    class Program
    {
        public static void Main(string[] args)
        {

            Database.Execute(Database.Start());

            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidIssuer = builder.Configuration["Jwt:Issuer"],
                        ValidAudience = builder.Configuration["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
                    };
                }
            );

            builder.Services.AddCors(options =>
                {
                options.AddDefaultPolicy(
                                policy  =>
                                {
                                    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                                });
                });
            builder.Services.AddControllers();
            builder.Services.AddControllers().AddNewtonsoftJson(options =>
            {
                
                options.SerializerSettings.Converters.Add(
                JsonSubtypesConverterBuilder
                .Of(typeof(Task),"Discriminator")
                .RegisterSubtype(typeof(ProjectTask), TypesOfTasks.Project)
                .RegisterSubtype(typeof(MeetingTask), TypesOfTasks.Meeting)
                .RegisterSubtype(typeof(DelegationTask), TypesOfTasks.Delegation)
                .SerializeDiscriminatorProperty()
                .Build()
                );
                    });

                    builder.Services.AddEndpointsApiExplorer();
                    builder.Services.AddSwaggerGen();

            var app = builder.Build();


            if (app.Environment.IsDevelopment())
            {
            app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();

            app.UseCors();

            app.Run();
        }
        }
}
