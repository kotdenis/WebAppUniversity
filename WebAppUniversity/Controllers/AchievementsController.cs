﻿using System;
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
    public class AchievementsController : ControllerBase
    {
        private readonly IAdminRepository<BaseModel> _adminRepository;
        private readonly ILogger _logger;

        public AchievementsController(IAdminRepository<BaseModel> adminRepository, ILogger<AchievementsController> logger)
        {
            _adminRepository = adminRepository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<BaseModel>> GetAchievements()
        {
            return await _adminRepository.GetItemsAsync<Achievement>();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAchievement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var achievement = await _adminRepository.GetItemAsync<Achievement>(id);

            if (achievement == null)
            {
                _logger.Log(LogLevel.Debug, "Not found by getting achievement");
                return NotFound();
            }

            return Ok(achievement);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAchievement([FromRoute] int id, [FromBody] Achievement achievement)
        {
            if (!ModelState.IsValid)
            {
                _logger.Log(LogLevel.Debug, "In putting achievement model state is invalid");
                return BadRequest(ModelState);
            }

            if (id != achievement.Achievement_Id)
            {
                return BadRequest();
            }

            if (await _adminRepository.UpdateAsync(achievement))
                return Ok();
            else
            {
                _logger.Log(LogLevel.Debug, "Mistake while updating achievement");
                return NotFound();
            }
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateAchievement([FromBody] Achievement achievement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _adminRepository.CreateAsync<Achievement>(achievement);

            return CreatedAtAction("GetDepartment", new { id = achievement.Achievement_Id }, achievement);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAchievement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _adminRepository.DeleteAsync<Achievement>(id))
            {
                return Ok();
            }

            else
                return NotFound();
        }
    }
}