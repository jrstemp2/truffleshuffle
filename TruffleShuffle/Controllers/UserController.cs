using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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



        // GET: api/User
        [HttpGet("{id}")]
        public User GetUserByID(int id)
        {
            return userData.GetUserByID(id);
        }

        [HttpGet("username/{userName}")]
        public User GetUserByUserName(string userName)
        {
            return userData.GetUserByUserName(userName);
        }

        //Delete
        [HttpDelete("{id}")]
        public int DeleteUserByID(int id)
        {
            return userData.DeleteUserByID(id);
        }

        [HttpPost]
        public int AddUser(User u)
        {
            return userData.AddUser(u);
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
