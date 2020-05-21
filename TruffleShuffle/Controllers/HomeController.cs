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
    public class HomeController : ControllerBase
    {
        private readonly IRecipeData recipeData;

        public HomeController(IRecipeData recipeData)
        {
            this.recipeData = recipeData;
        }

        // GET: api/Home
        [HttpGet]
        public IEnumerable<Recipe> GetAllRecipes()
        {
            return recipeData.GetAllRecipes();
        }
    }
}
