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
                string queryString = "INSERT INTO Users(UserName, UserPassword, DisplayName, WeightLossGoal) ";
                queryString += "VAlUES(@UserName, @UserPassword, @Displayname, @WeightLossGoal)";

                result = conn.Execute(queryString, user);
            }
            return result;
        }


        public int DeleteUserByID(int id)
        {
            string queryString = "DELETE FROM Users WHERE ID = @id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, new { id = id });
            }

            return result;
        }
        public IEnumerable<User> GetAllUsers()
        {

            string queryString = "SELECT * FROM Users";

            IEnumerable<User> result;
            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Query<User>(queryString);
            }

            return result;
        }

        public User GetUserByID(int id)
        {
            string queryString = "Select * FROM Users WHERE ID=@id";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { id = id });
            }

            return result;
        }

        public User GetUserByUserName(string username)
        {
            string queryString = "Select * FROM Users WHERE UserName Like @username";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { username = username });
            }

            return result;
        }

        public int UpdateUser(User u)
        {

            string queryString = "UPDATE Users " +
                "SET UserName = @UserName, UserPassword = @UserPassword, DisplayName = @DisplayName, WeightLossGoal = @WeightLossGoal " +
                "Where ID=@id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, u);
            }

            return result;
        }
    }
}
