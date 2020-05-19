using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public interface IFavoriteData
    {
        public int AddToFavorites(RecipeFavorite recipeFavorite );

        public IEnumerable<JoinedRF> ShowFavoritesById(int userId);

        public int DeleteFavorite(int id);

        //public RecipeFavorite GetFavoriteByUserAndRecipe(int userId, int recipeId);
    }
}
