namespace RecipeWebApp.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Instructions { get; set; }
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
    }
}
