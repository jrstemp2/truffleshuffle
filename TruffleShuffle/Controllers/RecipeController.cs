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
        public object AddRecipe(Recipe recipe)
        {
            RecipeValidator rv = RecipeValid(recipe);

            int result = 0;
            string errorMessage = "";
            if(rv.isValid)
            {
                result = recipeData.AddRecipe(recipe);
            }
            else
            {
                errorMessage = rv.errorMessage;
            }

            return new
            {
                success = rv.isValid && result == 1,
                errorMessage,
                data = recipe
            };
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
            RecipeValidator rv = RecipeValid(recipe);

            int result = 0;
            string errorMessage = "";
            if (rv.isValid)
            {
                result = recipeData.UpdateRecipe(recipe);
            }
            else
            {
                errorMessage = rv.errorMessage;
            }

            return new
            {
                success = rv.isValid && result == 1,
                errorMessage,
                data = recipe
            };
        }

        private RecipeValidator RecipeValid(Recipe recipe)
        {
            bool isValid = false;
            string errorMessage = "";


            if (recipe.Title.Length < 45 && recipe.Title.Length > 2)
            {
                if (recipe.Ingredients.Length < 1000 && recipe.Ingredients.Length > 5)
                {
                    if (recipe.CookingInstructions.Length < 1000 && recipe.CookingInstructions.Length > 5)
                    {
                        if (recipe.TotalCalories > 0)
                        {
                            if (recipe.Category.Length < 45 && recipe.Category.Length > 2)
                            {
                                isValid = true;
                            }
                            else
                            {
                                errorMessage = "Please Enter a Category";
                            }
                        }
                        else
                        {
                            errorMessage = "The Total Calories must be greater than 0";
                        }
                    }
                    else
                    {
                        errorMessage = "The Cooking Instructions Must Be Between 5 and 350 Characters.";
                    }
                }
                else
                {
                    errorMessage = "The Ingredients Must Be Between 5 and 300 Characters.";
                }
            }
            else
            {
                errorMessage = "The Title Must Be Between 2 and 45 Characters.";
            }
            return new RecipeValidator {isValid = isValid, errorMessage = errorMessage};
        }
    }
}