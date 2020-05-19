using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class RecipeDataDB : IRecipeData
    {

        private readonly string connstring;

        public RecipeDataDB(IConfiguration config)
        {
            connstring = config.GetConnectionString("default");
        }


        //Get All Recipes
        public IEnumerable<Recipe> GetAllRecipes()
        {

            string queryString = "SELECT * FROM Recipes";
            IEnumerable<Recipe> result = null;
            using (var conn = new SqlConnection(connstring))
            {
                
                result = conn.Query<Recipe>(queryString);
            }

            return result;
        }

        //Get All Recipes By Category
        public IEnumerable<Recipe> GetAllRecipesByCategory(string category)
        {
            string queryString = "SELECT * FROM Recipes WHERE Category = @Category";

            IEnumerable<Recipe> result = null;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Query<Recipe>(queryString, new { category = category});
            }

            return result;
        }

        //Get Recipe By ID
        public Recipe GetRecipeByID(int id)
        {
            string queryString = "SELECT * FROM Recipes WHERE ID = @id";

            Recipe result = null;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirst<Recipe>(queryString, new { id = id });
            }

            return result;
        }


        //Add New Recipe
        public int AddRecipe(Recipe recipe)
        {
            int result = 0;
            using (var conn = new SqlConnection(connstring))
            {
                string command = "INSERT INTO Recipes (Title, Ingredients, CookingInstructions, TotalCalories, Category, FoodImage) ";
                command += "VALUES (@Title, @Ingredients, @CookingInstructions, @TotalCalories, @Category, @FoodImage)";

                result = conn.Execute(command, recipe);
            }
            return result;
        }


        //Delete Recipe
        public int DeleteRecipeByID(int id)
        {

            string command = "DELETE FROM Recipes WHERE ID = @id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(command, new { id = id });
            }

            return result;

        }
    }
}
