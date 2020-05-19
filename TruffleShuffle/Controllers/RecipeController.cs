using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TruffleShuffle.Models;
using TruffleShuffle.Services;
using Microsoft.Extensions.Configuration;

namespace TruffleShuffle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeData recipeData;

        public RecipeController(IRecipeData recipeData)
        {
            this.recipeData = recipeData;
        }


        [HttpPost]
        public int AddRecipe(Recipe recipe)
        {
            return recipeData.AddRecipe(recipe);
        }

        [HttpGet]
        public IEnumerable<Recipe> GetAllRecipes()
        {
            return recipeData.GetAllRecipes();
        }
    }
}