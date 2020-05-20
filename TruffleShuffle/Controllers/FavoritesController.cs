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

        [HttpPost("{id}")]
        public int AddToFavorites(RecipeFavorite recipeFavorite)
        {
            return favoriteData.AddToFavorites(recipeFavorite);
        }

        [HttpDelete("{id}")]
        public int DeleteFavorite(int id)
        {
            return favoriteData.DeleteFavorite(id);
        }
    }
}