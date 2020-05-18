using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class Weights
    {

        public int ID { get; set; }
        public int UserID { get; set; }
        public DateTime WeighInDate { get; set; }
        public int CurrentWeight { get; set; }
    }
}
