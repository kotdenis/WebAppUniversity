﻿using System;
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
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class PersonApiController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;
        public PersonApiController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<IBaseViewModel>[]> GetInitialDataAsync()
        {
            return await Task.WhenAll(GetEnrolleeAndDepartmentAsync(), GetUgeResultsAsync(), GetStatementsAsync());
        }


        [HttpPost]
        public async Task<IEnumerable<EnrolleeAndDepartment>> GetConcreteEnrolleeAndDepartmentAsync([FromBody]EnrolleeAndDepartment name)
        {
            return await _personRepository.GetConcreteEnrolleeDepartmentAsync(name.ProgramName, name.DepartmentName);
        }

        private async Task<IEnumerable<IBaseViewModel>> GetEnrolleeAndDepartmentAsync()
        {
            return await _personRepository.GetFullEnrolleeDepartmentAsync().ConfigureAwait(false);
        }

        private async Task<IEnumerable<IBaseViewModel>> GetUgeResultsAsync()
        {
            return await _personRepository.GetUgeResultsAsync().ConfigureAwait(false);
        }

        private async Task<IEnumerable<IBaseViewModel>> GetStatementsAsync()
        {
            return await _personRepository.GetStatementsAsync().ConfigureAwait(false);
        }
    }
}