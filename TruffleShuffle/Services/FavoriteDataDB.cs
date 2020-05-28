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
    public class FavoriteDataDB : IFavoriteData
    {
        private readonly string connstring;

        public FavoriteDataDB(IConfiguration config)
        {
            connstring = config.GetConnectionString("default");
        }

        public int AddToFavorites(RecipeFavorite recipeFavorite)
        {
            int result = 0;
            using (var conn = new SqlConnection(connstring))
            {
                string command = "EXECUTE dbo.AddRecipeFavorite @UserId, @RecipeId";

                result = conn.Execute(command, recipeFavorite);
            }
            return result;
        }


        public int DeleteFavorite(int id)
        {
            string command = "EXECUTE dbo.DeleteRecipeFavorite @id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(command, new { id = id });
            }

            return result;
        }

        public IEnumerable<JoinedRF> ShowFavoritesById(int userId)
        {
            string queryString = "SELECT RecipeFavorites.ID, UserID, title, RecipeID, Ingredients, CookingInstructions, TotalCalories, Category, FoodIMage FROM RecipeFavorites JOIN Recipes ON RecipeFavorites.RecipeId = Recipes.Id WHERE RecipeFavorites.UserId = @userId";

            IEnumerable<JoinedRF> result = null;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Query<JoinedRF>(queryString, new { userId = userId });
            }

            return result;
        }

        public RecipeFavorite GetFavoriteByUserAndRecipe(int userId, int recipeId)
        {
            string queryString = "EXECUTE dbo.GetFavoriteByUserAndRecipe @userId, @recipeId";

            RecipeFavorite result = null;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirst<RecipeFavorite>(queryString, new { userId, recipeId });
            }
            return result;
        }
    }
}
