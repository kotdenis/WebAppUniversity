using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebAppUniversity.Identity.IdentityModels;

namespace WebAppUniversity.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class AccountApiController : ControllerBase
    {
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;
        private RoleManager<IdentityRole> _roleManager;
        IConfiguration _configuration;

        public AccountApiController(UserManager<IdentityUser> userMgr, SignInManager<IdentityUser> signInMgr,
            RoleManager<IdentityRole> roleMgr, IConfiguration configuration)
        {
            _userManager = userMgr;
            _signInManager = signInMgr;
            _roleManager = roleMgr;
            _configuration = configuration;
        }

        
        //[ValidateAntiForgeryToken]
        [Route("api/accountApi/login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginModel loginModel)
        {

            IdentityUser user = await _userManager.FindByNameAsync(loginModel.Name);
            await _signInManager.SignOutAsync();
            if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
            {
                if ((await _signInManager.PasswordSignInAsync(user, loginModel.Password, false, false)).Succeeded)
                {
                    var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Data:JWT:KEY"]));

                    var claims = new List<Claim> 
                    {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    };

                    var token = new JwtSecurityToken(
                        issuer: _configuration["Data:JWT:Issuer"],
                        audience: _configuration["Data:JWT:Audience"],
                        expires: DateTime.Now.AddHours(1),
                        claims: claims,
                        signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
                        );
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        isLogged = true, 
                        name = loginModel.Name
                    });
                }
            }
            return Unauthorized();
        }

        [Route("api/accountApi/register")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Register([FromBody]RegisterModel registerModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { status = "Invalid", message = "Invalid" });
            if (registerModel != null)
            {
                var userEmail = await _userManager.FindByEmailAsync(registerModel.Email);
                if (userEmail != null)
                    return StatusCode(StatusCodes.Status501NotImplemented, new { status = "Error", message = "Already exists" });
                var user = new IdentityUser()
                {
                    UserName = registerModel.Name,
                    Email = registerModel.Email,
                    SecurityStamp = Guid.NewGuid().ToString()
                };
                var result = await _userManager.CreateAsync(user, registerModel.Password);
                if (!result.Succeeded)
                {
                    string error = "";
                    foreach (var err in result.Errors)
                        error += err.Description + "\r\n";
                    return StatusCode(StatusCodes.Status501NotImplemented, new { status = "Error", message = error });
                }
                await _signInManager.SignInAsync(user, false);
                return Ok(new { status = "Success", message = "User created" });
            }
            return StatusCode(StatusCodes.Status501NotImplemented, new { status = "Error", message = "Try again" });
        }

        [Route("api/accountApi/logout")]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok(new { status = "Ok" });
        }
    }
}