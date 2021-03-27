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
    public class ProgramsController : ControllerBase
    {
        private readonly IAdminRepository<BaseModel> _adminRepository;
        private readonly ILogger _logger;

        public ProgramsController(IAdminRepository<BaseModel> adminRepository, ILogger<ProgramsController> logger)
        {
            _adminRepository = adminRepository;
            _logger = logger;
        }
        
        [HttpGet]
        public async Task<IEnumerable<BaseModel>> GetPrograms()
        {
            return await _adminRepository.GetItemsAsync<Programs>();
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrograms([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var programs = await _adminRepository.GetItemAsync<Programs>(id);

            if (programs == null)
            {
                _logger.Log(LogLevel.Debug, "Not found by getting programs");
                return NotFound();
            }

            return Ok(programs);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrograms([FromRoute] int id, [FromBody] Programs programs)
        {
            if (!ModelState.IsValid)
            {
                _logger.Log(LogLevel.Debug, "In putting programs model state is invalid");
                return BadRequest(ModelState);
            }

            if (id != programs.Program_Id)
            {
                return BadRequest();
            }

            if (await _adminRepository.UpdateAsync(programs))
                return Ok();
            else
            {
                _logger.Log(LogLevel.Debug, "Mistake while updating programs");
                return NotFound();
            }
        }
        
        [HttpPost]
        public async Task<IActionResult> CreatePrograms([FromBody] Programs programs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _adminRepository.CreateAsync<Programs>(programs);

            return CreatedAtAction("GetDepartment", new { id = programs.Program_Id }, programs);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrograms([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _adminRepository.DeleteAsync<Programs>(id))
            {
                return Ok();
            }

            else
                return NotFound();
        }
    }
}