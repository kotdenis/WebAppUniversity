using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;

namespace WebAppUniversity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AchievementsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public AchievementsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Achievements
        [HttpGet]
        public IEnumerable<Achievement> GetAchievements()
        {
            return _context.Achievements;
        }

        // GET: api/Achievements/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAchievement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var achievement = await _context.Achievements.FindAsync(id);

            if (achievement == null)
            {
                return NotFound();
            }

            return Ok(achievement);
        }

        // PUT: api/Achievements/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAchievement([FromRoute] int id, [FromBody] Achievement achievement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != achievement.Achievement_Id)
            {
                return BadRequest();
            }

            _context.Entry(achievement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AchievementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Achievements
        [HttpPost]
        public async Task<IActionResult> PostAchievement([FromBody] Achievement achievement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Achievements.Add(achievement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAchievement", new { id = achievement.Achievement_Id }, achievement);
        }

        // DELETE: api/Achievements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAchievement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var achievement = await _context.Achievements.FindAsync(id);
            if (achievement == null)
            {
                return NotFound();
            }

            _context.Achievements.Remove(achievement);
            await _context.SaveChangesAsync();

            return Ok(achievement);
        }

        private bool AchievementExists(int id)
        {
            return _context.Achievements.Any(e => e.Achievement_Id == id);
        }
    }
}