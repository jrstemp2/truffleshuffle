using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class WeightDataDB : IWeightData
    {
        public WeightRecord AddWeightRecord(WeightRecord weightRecord)
        {
            throw new NotImplementedException();
        }

        public int DeleteWeightRecordByID(int weightRecordID)
        {
            throw new NotImplementedException();
        }

        public WeightRecord GetNewestWeightRecord()
        {
            throw new NotImplementedException();
        }

        public WeightRecord GetOldestWeightRecord()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int ID)
        {
            throw new NotImplementedException();
        }

        public WeightRecord UpdateWeightRecord(WeightRecord weightRecord)
        {
            throw new NotImplementedException();
        }
    }
}
