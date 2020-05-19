using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TruffleShuffle.Models;
using TruffleShuffle.Services;

namespace TruffleShuffle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeightRecordController : ControllerBase
    {
        private readonly IWeightData weightData;

        public WeightRecordController(IWeightData weightData)
        {
            this.weightData = weightData;
        }

        [HttpPost]
        public WeightRecord AddWeightRecord(WeightRecord weightRec)
        {
            return weightData.AddWeightRecord(weightRec);
        }

        [HttpGet("{id}")]
        public IEnumerable<WeightRecord> GetWeightRecordsByUserID(int id)
        {
            return weightData.GetWeightRecordsByUserID(id);
        }

        [HttpGet("oldest/{id}")]
        public WeightRecord GetOldestWeightRecord(int id)
        {
            return weightData.GetOldestWeightRecord(id);
        }
        [HttpGet("newest/{id}")]
        public WeightRecord GetNewestWeightRecord(int id)
        {
            return weightData.GetNewestWeightRecord(id);
        }

        [HttpPut("updaterecord/{id}")]
        public object UpdateWeightRecord(WeightRecord weightRecord)
        {
            int result = weightData.UpdateWeightRecord(weightRecord);

            if (result == 1)
            {
                return new { Success = true, Message = "User updated" };
            }
            else
            {
                return new { Success = false, Message = "Something went wrong, user did not update" };
            }
        }

        [HttpDelete("{id}")]
        public int DeleteWeightRecordByID(int id)
        {
            return weightData.DeleteWeightRecordByID(id);
        }





    }
}
