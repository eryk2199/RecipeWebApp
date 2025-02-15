namespace RecipeWebApp.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Amount { get; set; }
        public Recipe? Recipe { get; set; }
        public int RecipeId { get; set; }
    }
}
