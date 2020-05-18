using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TruffleShuffle.Models
{
    public class Users
    {

        public int ID { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public string DisplayName { get; set; }
        public int WeightLossGoal { get; set; }
    }
}
