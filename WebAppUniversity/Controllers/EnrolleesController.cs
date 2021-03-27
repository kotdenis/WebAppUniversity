using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;

namespace WebAppUniversity.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EnrolleesController : ControllerBase
    {
        private readonly IAdminRepository<BaseModel> _adminRepository;
        private readonly ILogger _logger;

        public EnrolleesController(IAdminRepository<BaseModel> adminRepository, ILogger<EnrolleesController> logger)
        {
            _adminRepository = adminRepository;
            _logger = logger;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Enrollee>> GetEnrollees()
        {
            return await _adminRepository.GetItemsAsync<Enrollee>();
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEnrollee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var enrollee = await _adminRepository.GetItemAsync<Enrollee>(id);

            if (enrollee == null)
            {
                _logger.Log(LogLevel.Debug, "Not found by getting enrollee");
                return NotFound();
            }

            return Ok(enrollee);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnrollee([FromRoute] int id, [FromBody] Enrollee enrollee)
        {
            if (!ModelState.IsValid)
            {
                _logger.Log(LogLevel.Debug, "In putting enrollee model state is invalid");
                return BadRequest(ModelState);
            }

            if (id != enrollee.Enrollee_Id)
            {
                return BadRequest();
            }

            if (await _adminRepository.UpdateAsync(enrollee))
                return Ok();
            else
            {
                _logger.Log(LogLevel.Debug, "Mistake while updating enrollee");
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateEnrollee([FromBody] Enrollee enrollee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _adminRepository.CreateAsync<Enrollee>(enrollee);

            return CreatedAtAction("GetDepartment", new { id = enrollee.Enrollee_Id }, enrollee);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnrollee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _adminRepository.DeleteAsync<Enrollee>(id))
            {
                return Ok();
            }

            else
                return NotFound();
        }
    }
}