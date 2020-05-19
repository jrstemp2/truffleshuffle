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

        [HttpGet("Category/{cat}")]
        public IEnumerable<Recipe> GetAllRecipesByCategory(string cat)
        {
            return recipeData.GetAllRecipesByCategory(cat);
        }
        [HttpGet("{id}")]
        public Recipe GetAllRecipeByID(int id)
        {
            return recipeData.GetRecipeByID(id);
        }

        [HttpDelete("{id}")]
        public int DeleteRecipe(int id)
        {
            return recipeData.DeleteRecipeByID(id);
        }

        [HttpPut]
        public object UpdateRecipe(Recipe recipe)
        {
            int result = recipeData.UpdateRecipe(recipe);

            if (result == 1)
            {
                return new { Success = true, Message = "Recipe updated" };
            }
            else
            {
                return new { Success = false, Message = "Something went wrong, recipe did not update" };
            }
        }
    }
}