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
    public class SubjectsController : ControllerBase
    {
        private readonly IAdminRepository<BaseModel> _adminRepository;
        private readonly ILogger _logger;

        public SubjectsController(IAdminRepository<BaseModel> adminRepository, ILogger<SubjectsController> logger)
        {
            _adminRepository = adminRepository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<BaseModel>> GetSubjects()
        {
            return await _adminRepository.GetItemsAsync<Subject>();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subject = await _adminRepository.GetItemAsync<Subject>(id);

            if (subject == null)
            {
                _logger.Log(LogLevel.Debug, "Not found by getting Subject");
                return NotFound();
            }

            return Ok(subject);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubject([FromRoute] int id, [FromBody] Subject subject)
        {
            if (!ModelState.IsValid)
            {
                _logger.Log(LogLevel.Debug, "In putting subject model state is invalid");
                return BadRequest(ModelState);
            }

            if (id != subject.Subject_Id)
            {
                return BadRequest();
            }

            if (await _adminRepository.UpdateAsync(subject))
                return Ok();
            else
            {
                _logger.Log(LogLevel.Debug, "Mistake while updating subject");
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateSubject([FromBody] Subject subject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _adminRepository.CreateAsync<Subject>(subject);

            return CreatedAtAction("GetSubject", new { id = subject.Subject_Id }, subject);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _adminRepository.DeleteAsync<Subject>(id))
            {
                return Ok();
            }

            else
                return NotFound();
        }
    }
}