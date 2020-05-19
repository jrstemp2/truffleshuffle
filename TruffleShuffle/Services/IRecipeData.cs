using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public interface IRecipeData
    {
        //Get All Recipes
        public IEnumerable<Recipe> GetAllRecipes();

        //Get All Recipes By Category
        public IEnumerable<Recipe> GetAllRecipesByCategory(string category);

        //Get Recipe By ID
        public Recipe GetRecipeByID(int id);


        //Add New Recipe
        public int AddRecipe(Recipe recipe);


        //Delete Recipe
        public int DeleteRecipeByID(int id);



        //-----------------STRETCH--------------------
        //Stretch - Get By Calorie Count
        //on Home Page upvoted/most favorited



    }
}
