using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    interface IUserData
    {
        public User GetUserByID(int id);


    }
}
