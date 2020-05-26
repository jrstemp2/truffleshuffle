using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TruffleShuffle.Models;
using TruffleShuffle.Services;

namespace TruffleShuffle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserData userData;

        public UserController(IUserData userData)
        {
            this.userData = userData;
        }

        [HttpGet("all/")]
        public IEnumerable<User> GetAllUsers()
        {
            IEnumerable<User> result = userData.GetAllUsers();
            return result;
        }

        // GET: api/User
        [HttpGet("userid/{id}")]
        public User GetUserByID(int id)
        {
            return userData.GetUserByID(id);
        }

        [HttpGet("username/{userName}")]
        public User GetUserByUserName(string userName)
        {
            return userData.GetUserByUserName(userName);
        }

        [HttpPost("signup/")]
        public Object AddUser(User u)
        {
            int result = 0;
            string errorMessage = "";

            //TODO: better validation
            if (u.UserName.Length >= 2 &&
                u.UserPassword.Length >= 8 &&
                u.DisplayName.Length >= 2)
            {
                User isDuplicate = userData.GetUserByUserName(u.UserName);
                if (isDuplicate is null)
                {
                    result = userData.AddUser(u);
                }
                else
                {
                    errorMessage = "User already exists";
                }
            }
            else
            {
                errorMessage = "Invalid user format";
            }


            u.UserPassword = "********";
            return new
            {
                success = result == 1 ? true : false,
                errorMessage,
                user = u
            };
        }

        [HttpPost("login/")]
        public Object Login(User u)
        {
            bool success = false;
            string errorMessage = "";
            User userInDB = null;

            //TODO: better validation
            if (u.UserName.Length >= 2)
            {
                userInDB = userData.GetUserByUserName(u.UserName);
            }
            else
            {
                errorMessage = "invalid username submitted";
            }

            if (userInDB is null || u is null)
            {
                errorMessage = "incorrect username";
            }
            else
            {
                if (userInDB.UserPassword.Equals(u.UserPassword))
                {
                    success = true;
                }
                else
                {
                    errorMessage = "incorrect password";
                }
            }

            u.UserPassword = "********";
            userInDB.UserPassword = u.UserPassword;
            return new
            {
                success,
                errorMessage,
                user = success ? userInDB : u,
            };
        }



        [HttpPut("updateuser/{id}")]
        public object UpdateWeightLossGoal(User u)
        {
            int result = userData.UpdateUser(u);

            if (result == 1)
            {
                return new { Success = true, Message = "User updated" };
            }
            else
            {
                return new { Success = false, Message = "Something went wrong, user did not update" };
            }
        }



    }
}
