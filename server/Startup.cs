using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using AspNetCore.Rendertron;


namespace server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add rendertron services
            // services.AddRendertron(options =>
            // {
            //     // use http compression
            //     options.AcceptCompression = true;
            // });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            // Use Rendertron middleware
            // app.UseRendertron(new RendertronMiddlewareOptions()
            // {
            //     ProxyUrl = "http://rendertron:8080/render/",
            //     InjectShadyDom = true
            // });

            app.UseMvc(routes =>
            {
                routes.MapSpaFallbackRoute("spa", new { controller = "Home", Action = "Spa" });
            });
        }
    }
}
