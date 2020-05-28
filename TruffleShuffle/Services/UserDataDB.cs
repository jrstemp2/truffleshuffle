using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class UserDataDB : IUserData
    {
        private readonly string connstring;

        public UserDataDB(IConfiguration config)
        {
            connstring = config.GetConnectionString("default");
        }

        public int AddUser(User user)
        {
            int result = 0;
            using (var conn = new SqlConnection(connstring))
            {
                string queryString = "EXECUTE dbo.AddUser @UserName, @UserPassword, @Displayname, @WeightLossGoal";

                result = conn.Execute(queryString, user);
            }
            return result;
        }
        

        public int DeleteUserByID(int id)
        {
            string queryString = "EXECUTE dbo.DeleteUserByID @id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, new { id });
            }

            return result;
        }
        public IEnumerable<User> GetAllUsers()
        {

            string queryString = "EXECUTE dbo.SelectAllUsers";

            IEnumerable<User> result;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Query<User>(queryString);
            }

            return result;
        }

        public User GetUserByID(int id)
        {
            string queryString = "EXECUTE dbo.SelectUserByID @id";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { id });
            }

            return result;
        }

        public User GetUserByUserName(string username)
        {
            string queryString = "EXECUTE dbo.GetUserByUserName @username";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { username = username });
            }

            return result;
        }

        public int UpdateUser(User u)
        {

            string queryString = "EXECUTE dbo.UpdateUser @ID @UserName, @UserPassword, @DisplayName, @WeightLossGoal";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, u);
            }

            return result;
        }
    }
}
