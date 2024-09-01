using AutoMapper;
using JMP.BAL.DTO.User;
using JMP.BAL.Interfaces;
using JMP.DAL;
using JMP.DAL.interfaces;
using System.Reflection.Metadata.Ecma335;

namespace JMP.BAL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;

        public UserService(IUserRepo userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        public async Task<Response<UserDetail>> GetUserByMailAsync(string mail)
        {
            var user = await _userRepo.GetUserByEmailAsync(mail);
            return new Response<UserDetail>()
            {
                data = _mapper.Map<UserDetail>(user.data),
                message = user.message,
                statusCode = user.statusCode
                
            };
        }

        public async Task<Response<UserSummary>> Login(Login loginDTO)
        {
            var user = await _userRepo.GetUserByEmailAsync(loginDTO.UserEmailAddress);

            if (user.statusCode == 200)
            {
                if(BCrypt.Net.BCrypt.Verify(loginDTO.Password, user.data.PasswordHash))
                {
                    return new Response<UserSummary>()
                    {
                        data = _mapper.Map<UserSummary>(user.data),
                        message = user.message,
                        statusCode = user.statusCode
                    };
                }
            }

            return new Response<UserSummary>()
            {
                data = new UserSummary(),
                message = "Failed to login",
                statusCode = 400
            };

        }

        public Task<Response<UserSummary>> RegisterUserAsync(Register newUser)
        {
            throw new NotImplementedException();
        }

        public Task<Response<UserDetail>> UpdateuserAsync(UserDetail updatedUser)
        {
            throw new NotImplementedException();
        }
    }
}
