using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public interface IWeightData
    {
        // Create
        public WeightRecord AddWeightRecord(WeightRecord weightRecord);
        // Read
        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int UserID);
        public WeightRecord GetOldestWeightRecord(int UserID);
        public WeightRecord GetNewestWeightRecord(int UserID);
        // Update
        public int UpdateWeightRecord(WeightRecord weightRecord);

        // Delete
        public int DeleteWeightRecordByID(int weightRecordID);
    }
}
