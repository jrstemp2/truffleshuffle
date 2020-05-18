using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    interface IWeightData
    {
        // Create
        public WeightRecord AddWeightRecord(WeightRecord weightRecord);
        // Read
        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int weightRecordID);
        public WeightRecord GetOldestWeightRecord();
        public WeightRecord GetNewestWeightRecord();
        // Update
        public WeightRecord UpdateWeightRecord(WeightRecord weightRecord);

        // Delete
        public int DeleteWeightRecordByID(int weightRecordID);
    }
}
