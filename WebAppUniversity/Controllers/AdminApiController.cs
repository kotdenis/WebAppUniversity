using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;

namespace WebAppUniversity.Controllers
{
    //[Authorize]
    [ApiController]
    public class AdminApiController : ControllerBase
    {
        IAdminRepository<BaseModel> _adminRepository;

        public AdminApiController(IAdminRepository<BaseModel> adminRepository)
        {
            _adminRepository = adminRepository;
        }

        [Authorize]
        [Route("api/adminApi/getBaseModelsAsync")]
        [HttpGet]
        public async Task<IEnumerable<BaseModel>[]> GetBaseModelsAsync()
        {
            return await Task.WhenAll(GetDepartmentAsync(), GetSubjectAsync());
        }

        [Route("api/adminApi/getSecondBaseModelsAsync")]
        [HttpGet]
        public async Task<IEnumerable<BaseModel>[]> GetSecondBaseModelsAsync()
        { 
            return await Task.WhenAll(GetEnrolleeAsync(), GetAchievementsAsync());
        }

        [Route("api/adminApi/getThirdBaseModelsAsync")]
        [HttpGet]
        public async Task<IEnumerable<BaseModel>> GetThirdBaseModelsAsync()
        {
            return await _adminRepository.GetItemsAsync<Programs>();
        }

        [Route("api/adminApi/editDepartmentModelAsync/{id?}")]
        [HttpPut]
        public async Task<IActionResult> EditDepartmentModelAsync([FromRoute]int id, [FromBody]Department department)
        {
            if (department == null)
                return BadRequest();
            try
            {
                await _adminRepository.UpdateAsync<Department>(id, department);
                return Ok();
            }
            catch(Exception) { return BadRequest(); }
        }

        [Route("api/adminApi/editSubjectModelAsync/{id?}")]
        [HttpPut]
        public async Task<IActionResult> EditSubjectModelAsync([FromRoute]int id, [FromBody]Subject subs)
        {
            if (subs == null)
                return BadRequest();
            try
            {
                await _adminRepository.UpdateAsync<Subject>(id, subs);
                return Ok();
            }
            catch (Exception) { return BadRequest(); }
        }

        [Route("api/adminApi/editEnrolleeModelAsync/{id?}")]
        [HttpPut]
        public async Task<IActionResult> EditEnrolleeModelAsync([FromRoute]int id, [FromBody]Enrollee enrollee)
        {
            if (enrollee == null)
                return BadRequest();
            try
            {
                await _adminRepository.UpdateAsync<Enrollee>(id, enrollee);
                return Ok();
            }
            catch (Exception) { return BadRequest(); }
        }

        [Route("api/adminApi/editAchievementModelAsync/{id?}")]
        [HttpPut]
        public async Task<IActionResult> EditAchievementModelAsync([FromRoute]int id, [FromBody]Achievement achievement)
        {
            if (achievement == null)
                return BadRequest();
            try
            {
                await _adminRepository.UpdateAsync<Achievement>(id, achievement);
                return Ok();
            }
            catch (Exception) { return BadRequest(); }
        }

        [Route("api/adminApi/editProgramsModelAsync/{id?}")]
        [HttpPut]
        public async Task<IActionResult> EditProgramsModelAsync([FromRoute]int id, [FromBody]Programs programs)
        {
            if (programs == null)
                return BadRequest();
            try
            {
                await _adminRepository.UpdateAsync<Programs>(id, programs);
                return Ok();
            }
            catch (Exception) { return BadRequest(); }
        }

        private async Task<IEnumerable<BaseModel>> GetDepartmentAsync()
        {
            return await _adminRepository.GetItemsAsync<Department>().ConfigureAwait(false);
        }

        private async Task<IEnumerable<BaseModel>> GetSubjectAsync()
        {
            return await _adminRepository.GetItemsAsync<Subject>().ConfigureAwait(false);
        }

        private async Task<IEnumerable<BaseModel>> GetEnrolleeAsync()
        {
            return await _adminRepository.GetItemsAsync<Enrollee>().ConfigureAwait(false);
        }

        private async Task<IEnumerable<BaseModel>> GetAchievementsAsync()
        {
            return await _adminRepository.GetItemsAsync<Achievement>().ConfigureAwait(false);
        }
    }
}