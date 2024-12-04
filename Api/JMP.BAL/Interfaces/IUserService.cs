using JMP.BAL.DTO.User;
using JMP.DAL;

namespace JMP.BAL.Interfaces
{
    public interface IUserService
    {
        public Task<Response<UserSummary>> Login(Login loginDTO);

        public Task<Response<UserSummary>> RegisterUserAsync(Register newUser);

        public Task<Response<UserDetail>> UpdateuserAsync(UserDetail updatedUser);

        public Task<Response<UserDetail>> GetUserByMailAsync(string mail);
    }
}
