using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class WeightDataDB : IWeightData
    {

        private readonly string connString;

        public WeightDataDB(IConfiguration config)
        {
            connString = config.GetConnectionString("default");
        }

        public WeightRecord AddWeightRecord(WeightRecord weightRecord)
        {
            string command = "EXECUTE dbo.AddWeightRecord @UserID, @WeightInDate, @CurrentWeight";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, weightRecord);
            }

            return result;
        }

        public int DeleteWeightRecordByID(int weightRecordID)
        {
            string command = "EXECUTE dbo.DeleteWeightRecordByID @ID";

            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.Execute(command, new { ID = weightRecordID });
            }

            return result;
        }

        public bool WeightRecordExistsforDate(WeightRecord weightRec)
        {
            string command = "EXECUTE dbo.SelectRecordByUserIDAndDate @UserID @WeightInDate";

            WeightRecord result = null;

            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, weightRec);
            }

            return result != null;
        }

        public WeightRecord GetNewestWeightRecord(int UserID)
        {
            string command = "EXECUTE dbo.NewestWeightForUserID @UserID ";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, new { UserID });
            }

            return result;
        }

        public WeightRecord GetOldestWeightRecord(int UserID)
        {
            string command = "select top (1) * from Weights ";
            command += "where UserID = @UserID ";
            command += "order by WeightInDate ASC";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, new { UserID });
            }

            return result;
        }

        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int UserID)
        {
            string command = "Select * from Weights ";
            command += "where UserID = @UserID ";
            command += "order by WeightInDate DESC";

            IEnumerable<WeightRecord> result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.Query<WeightRecord>(command, new { UserID });
            }

            return result;
        }

        public int UpdateWeightRecord(WeightRecord weightRecord)
        {
            string command = "Update Weights ";
            command += "set ";
            command += "WeightInDate = @WeightInDate, ";
            command += "CurrentWeight = @CurrentWeight ";
            command += "Where UserID = @UserID and WeightInDate = @WeightInDate";

            int result;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.Execute(command, weightRecord);
            }

            return result;
        }
    }
}
