using JMP.BAL.DTO.User;
using JMP.BAL.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JMP.WebApi.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly TokenService _tokenService;

        public UserController(IUserService userService, TokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpGet]
        public async Task<IActionResult> Login([FromBody] Login userDetails)
        {
            var user = await _userService.Login(userDetails);
            if (user.statusCode == 200)
            {
                //Call TokenService to generate accessToken
                return Ok(user);
            }
            else
            {
                return BadRequest(user);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Register newUserDetails)
        {
            var user = await _userService.GetUserByMailAsync(newUserDetails.UserEmail);

            if (user.statusCode == 200)
            {
                return Login()
            }


    }
}
