using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class RecipeFavorite
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int RecipeID { get; set; }
    }
}
