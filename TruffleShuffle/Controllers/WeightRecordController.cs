using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
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
        public object AddWeightRecord(WeightRecord weightRec)
        {
            bool successfullyAdded = false;
            string errorMessage = string.Empty;


            if (weightRec.WeightInDate <= DateTime.Now && weightRec.WeightInDate > DateTime.UnixEpoch) // valid date
            {
                if (weightRec.CurrentWeight > 0) // valid weight
                {
                    weightRec.WeightInDate = weightRec.WeightInDate.Date; // trim off time part of date time
                    if (!weightData.WeightRecordExistsforDate(weightRec))
                    {
                        try
                        {
                            weightData.AddWeightRecord(weightRec);
                            successfullyAdded = true;
                        }
                        catch (Exception e)
                        {
                            errorMessage = e.Message;
                        }
                    }
                    else
                    {
                        errorMessage = "Weight Exists for date";
                    }

                }
                else
                {
                    errorMessage = "Weight must be a postive number";
                }
            } 
            else
            {
                errorMessage = "Outside of valid date range. Must be between today and Jan 1 1970";
            }

            return new { success = successfullyAdded, errorMessage, data = weightRec };
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
