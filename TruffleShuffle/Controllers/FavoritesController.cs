using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TruffleShuffle.Models;
using TruffleShuffle.Services;

namespace TruffleShuffle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly IFavoriteData favoriteData;

        public FavoritesController(IFavoriteData favoriteData)
        {
            this.favoriteData = favoriteData;
        }

        [HttpGet("{id}")]
        public IEnumerable<JoinedRF> ShowFavoritesById(int id)
        {
            return favoriteData.ShowFavoritesById(id);
        }


        [HttpPost]
        public int AddToFavorites(RecipeFavorite recipeFavorite)
        {
            var result = favoriteData.GetFavoriteByUserAndRecipe(recipeFavorite.UserID, recipeFavorite.RecipeID);
            int rowsAdded = 0;
            if (result == null)
            {
                rowsAdded = favoriteData.AddToFavorites(recipeFavorite);
            }
           
            return rowsAdded;
            
        }

        [HttpDelete("{id}")]
        public int DeleteFavorite(int id)
        {
            return favoriteData.DeleteFavorite(id);
        }
    }
}