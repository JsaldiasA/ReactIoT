var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//to let reacIOT connecto to the API
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.WithOrigins("https://localhost", "http://localhost", "https://localhost:5173", "http://192.168.0.100:5173"
            , "http://javiersaldias.zapto.org:50000" // DDNS amis to :5173 local port
              )
               .AllowAnyHeader()
               .AllowAnyMethod()
               .WithExposedHeaders("Access-Control-Allow-Origin");

    });
});

var app = builder.Build();




// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//set corspolicy
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
