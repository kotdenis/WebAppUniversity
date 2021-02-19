using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;

namespace WebAppUniversity.Controllers
{
    
    [ApiController]
    public class AdminApiController : ControllerBase
    {
        IAdminRepository<BaseModel> _adminRepository;

        public AdminApiController(IAdminRepository<BaseModel> adminRepository)
        {
            _adminRepository = adminRepository;
        }

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