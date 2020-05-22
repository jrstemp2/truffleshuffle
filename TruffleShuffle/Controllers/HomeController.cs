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
        private readonly IUserData userData;


        public HomeController(IRecipeData recipeData, IUserData userData)
        {
            this.recipeData = recipeData;
            this.userData = userData; 
        }

        // GET: api/Home
        [HttpGet]
        public IEnumerable<Recipe> GetAllRecipes()
        {
            return recipeData.GetAllRecipes();
        }

        //[HttpPost]
        //public Object AddUser(User u)
        //{
        //    int result = userData.AddUser(u);

        //    return new
        //    {
        //        result = result,
        //        success = result == 1 ? true : false
        //    };
        //}
    }
}
