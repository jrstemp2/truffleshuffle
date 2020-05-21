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
                string command = "INSERT INTO RecipeFavorites (UserId, RecipeId) ";
                command += "VALUES (@UserId, @RecipeId)";

                result = conn.Execute(command, recipeFavorite);
            }
            return result;
        }


        public int DeleteFavorite(int id)
        {
            string command = "DELETE FROM RecipeFavorites WHERE ID = @id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(command, new { id = id });
            }

            return result;
        }

        public IEnumerable<JoinedRF> ShowFavoritesById(int userId)
        {
            string queryString = "SELECT * FROM RecipeFavorites JOIN Recipes ON RecipeFavorites.RecipeId = Recipes.Id WHERE RecipeFavorites.UserId = @userId";

            IEnumerable<JoinedRF> result = null;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Query<JoinedRF>(queryString, new { userId = userId });
            }

            return result;
        }
    }
}
