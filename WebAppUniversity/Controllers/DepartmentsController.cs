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
    public class DepartmentsController : ControllerBase
    {
        private readonly IAdminRepository<BaseModel> _adminRepository;
        private readonly ILogger _logger;

        public DepartmentsController(IAdminRepository<BaseModel> adminRepository, ILogger<DepartmentsController> logger)
        {
            _adminRepository = adminRepository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<BaseModel>> GetDepartments() 
        {
            return await _adminRepository.GetItemsAsync<Department>();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDepartment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var department = await _adminRepository.GetItemAsync<Department>(id);

            if (department == null)
            {
                _logger.Log(LogLevel.Debug, "Not found by getting Department");
                return NotFound();
            }

            return Ok(department);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartment([FromRoute] int id, [FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                _logger.Log(LogLevel.Debug, "In putting department model state is invalid");
                return BadRequest(ModelState);
            }

            if (id != department.Department_Id)
            {
                return BadRequest();
            }

            if (await _adminRepository.UpdateAsync(department))
                return Ok();
            else
            {
                _logger.Log(LogLevel.Debug, "Mistake while updating department");
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateDepartment([FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _adminRepository.CreateAsync<Department>(department);

            return CreatedAtAction("GetDepartment", new { id = department.Department_Id }, department);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _adminRepository.DeleteAsync<Department>(id))
            {
                return Ok();
            }

            else
                return NotFound();
        }
    }
}