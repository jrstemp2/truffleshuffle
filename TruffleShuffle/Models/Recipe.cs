using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class Recipe
    {

        public int ID { get; set; }
        public string Title { get; set; }
        public string Ingredients { get; set; }
        public string CookingInstructions { get; set; }
        public int TotalCalories { get; set; }
        public string Category { get; set; }
        public string FoodImage { get; set; }
    }

    public class RecipeValidator
    {
        public bool isValid { get; set; }
        public string errorMessage { get; set; }
    }
   



}
