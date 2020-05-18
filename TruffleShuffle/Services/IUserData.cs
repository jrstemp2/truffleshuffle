using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public interface IUserData
    {
        // create
        public User AddUser(User user);
        // update
        public int UpdateWeightLossGoal(int UserID, int weightLossGoal);
        public int UpdateDisplayName(int UserID, string displayName);
        // read
        public User GetUserByID(int id);
        public User GetUserByUserName(string username);
        // delete
        public int DeleteUserByID(int id);


    }
}
