using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    public class WeightDataDB : IWeightData
    {
        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int ID)
        {
            throw new NotImplementedException();
        }
    }
}
