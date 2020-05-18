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
            string command = "Insert Into Weights (UserID, WeightInDate, CurrentWeight) ";
            command += "Output Inserted.ID, Inserted.UserID, Inserted.WeighInDate, Inserted.CurrentWeight ";
            command += "values (@UserID, @WeighInDate, @CurrentWeight) ";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, weightRecord);
            }

            return result;
        }

        public int DeleteWeightRecordByID(int weightRecordID)
        {
            string command = "Delete from Weights where ID = @ID";

            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.Execute(command, new { ID = weightRecordID });
            }

            return result;
        }

        public WeightRecord GetNewestWeightRecord(int UserID)
        {
            string command = "select top (1) from Weights ";
            command += "where UserID = @UserID ";
            command += "order by DateTime DESC";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, new { UserID });
            }

            return result;
        }

        public WeightRecord GetOldestWeightRecord(int UserID)
        {
            string command = "select top (1) from Weights ";
            command += "where UserID = @UserID ";
            command += "order by DateTime ASC";

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
            command += "order by DateTime DESC";

            IEnumerable<WeightRecord> result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.Query<WeightRecord>(command, new { UserID });
            }

            return result;
        }

        public WeightRecord UpdateWeightRecord(WeightRecord weightRecord)
        {
            string command = "Update Weights ";
            command += "set ";
            command += "WeightInDate = @WeighInDate";
            command += "CurrentWeight = @CurrentWeight";
            command += "order by DateTime ASC";

            WeightRecord result = null;
            using (var conn = new SqlConnection(connString))
            {
                result = conn.QueryFirstOrDefault<WeightRecord>(command, weightRecord);
            }

            return result;
        }
    }
}
