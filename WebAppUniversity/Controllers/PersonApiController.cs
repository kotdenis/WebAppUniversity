using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppUniversity.Data;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PersonApiController : ControllerBase
    {
        private readonly IUniversityRepository _universityRepository;
        public PersonApiController(IUniversityRepository universityRepository)
        {
            _universityRepository = universityRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<IBaseViewModel>[]> GetInitialDataAsync()
        {
            return await Task.WhenAll(_universityRepository.GetBaseEnrolleeAndDepartmentAsync(), 
                _universityRepository.GetBaseUgeAsync(), _universityRepository.GetBaseStatementsAsync());
        }


        [HttpPost]
        public async Task<IEnumerable<EnrolleeAndDepartment>> GetConcreteEnrolleeAndDepartmentAsync([FromBody]EnrolleeAndDepartment name)
        {
            return await _universityRepository.GetConcreteEnrolleeDepartmentAsync(name.ProgramName, name.DepartmentName);
        }
    }
}