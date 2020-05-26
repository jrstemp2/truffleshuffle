using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class WeightRecord
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public DateTime WeightInDate { get; set; }
        public int CurrentWeight { get; set; }
    }
}
