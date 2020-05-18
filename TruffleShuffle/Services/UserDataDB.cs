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

        public User AddUser(User user)
        {
            string queryString = "INSERT INTO Users(UserID, UserPassWord,DisplayName,WeightLossGoal) " +
                "OUTPUT Inserted.UserID, Inserted.UserPassword, Inserted.DisplayName,Inserted.WeightLossGoal " +
                "VAlUES(@UserID,@UserPassword,@Displayname,@WeightLossGoal) ";


            User result = null;
           
            using(var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, user);
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

        public User GetUserByID(int id)
        {
            string queryString = "Select DisplayName, WeightLossGoal FROM Users WHERE ID=@id";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { id = id });
            }

            return result;
        }

        public User GetUserByUserName(string username)
        {
            string queryString = "Select DisplayName, WeightLossGoal FROM Users WHERE UserName Like @username";

            User result = null;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.QueryFirstOrDefault<User>(queryString, new { username = username });
            }

            return result;
        }

        public int UpdateDisplayName(int userID, string displayName)
        {
            string queryString = "UPDATE Users " +
                "SET DisplayName = @DisplayName " +
                "Where ID=@id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, new { id = userID, displayName = displayName });
            }

            return result;
        }

        public int UpdateWeightLossGoal(int userID, int weightLossGoal)
        {

            string queryString = "UPDATE Users " +
                "SET WeightLossGoal = @WeightLossGoal " +
                "Where ID=@id";

            int result = 0;

            using (var conn = new SqlConnection(connstring))
            {
                result = conn.Execute(queryString, new { id = userID, weightLossGoal = weightLossGoal });
            }

            return result;
        }
    }
}
