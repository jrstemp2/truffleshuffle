using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class Recipe
    {
        public int ID { get; set; }
        public string Label { get; set; }
        public string Image { get; set; }
        public  Ingredient[] Ingredients { get; set; }
        public double MyProperty { get; set; }
    }

    public class Ingredient
    {
        public string Text { get; set; }
        public int Quantity { get; set; }
        public string Measure { get; set; }
        public string Food { get; set; }
        public double Weight { get; set; }

    }



}
