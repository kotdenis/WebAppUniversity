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
    [Route("api/[controller]")]
    [ApiController]
    public class AdminApiController : ControllerBase
    {
        IAdminRepository<BaseModel> _adminRepository;

        public AdminApiController(IAdminRepository<BaseModel> adminRepository)
        {
            _adminRepository = adminRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<BaseModel>[]> GetBaseModelsAsync()
        {
            return await Task.WhenAll(GetDepartmentAsync(), GetSubjectAsync());
        }

        private async Task<IEnumerable<BaseModel>> GetDepartmentAsync()
        {
            return await _adminRepository.GetItemsAsync<Department>().ConfigureAwait(false);
        }

        private async Task<IEnumerable<BaseModel>> GetSubjectAsync()
        {
            return await _adminRepository.GetItemsAsync<Subject>().ConfigureAwait(false);
        }
    }
}