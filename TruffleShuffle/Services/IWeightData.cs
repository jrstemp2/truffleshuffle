using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruffleShuffle.Models;

namespace TruffleShuffle.Services
{
    interface IWeightData
    {
        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int ID);
    }
}
