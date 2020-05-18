using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class UserDataDB : IUserData
    {
        public User AddUser(User user)
        {
            throw new NotImplementedException();
        }

        public int DeleteUserByID(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUserByID(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUserByUserName(string username)
        {
            throw new NotImplementedException();
        }

        public int UpdateDisplayName(int UserID, string displayName)
        {
            throw new NotImplementedException();
        }

        public int UpdateWeightLossGoal(int UserID, int weightLossGoal)
        {
            throw new NotImplementedException();
        }
    }
}
