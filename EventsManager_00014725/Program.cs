using EventsManager_00014725.Data;
using EventsManager_00014725.Models;
using EventsManager_00014725.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddDbContext<GeneralDbContext>(
    o => o.UseSqlServer(
        builder.Configuration.GetConnectionString("SqlServerConnection")));
builder.Services.AddScoped<IRepository<Events>, EventRepository>();
builder.Services.AddScoped<IRepository<User>, UserRepository>();

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

app.Run();
