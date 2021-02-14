using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAppUniversity.Data;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;
using WebAppUniversity.ViewModels;

namespace WebAppUniversity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonApiController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;
        public PersonApiController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<EnrolleeAndDepartment>> GetEnrolleeAndDepartment()
        {
            return await _personRepository.GetFirstEnrolleeDepartmentAsync();
        }
    }
}