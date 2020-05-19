using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class JoinedRF
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int RecipeID { get; set; }
        public string Title { get; set; }
        public string Ingredients { get; set; }
        public string CookingInstructions { get; set; }
        public int TotalCalories { get; set; }
        public string FoodImage { get; set; }
    }
}
