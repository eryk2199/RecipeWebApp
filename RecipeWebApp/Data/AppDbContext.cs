using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipeWebApp.Models;

namespace RecipeWebApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext (DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<RecipeWebApp.Models.Recipe> Recipe { get; set; } = default!;
        public DbSet<RecipeWebApp.Models.Ingredient> Ingredient { get; set; } = default!;
    }
}
