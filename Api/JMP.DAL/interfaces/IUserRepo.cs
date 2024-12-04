using JMP.DAL.Entities;

namespace JMP.DAL.interfaces
{
    public interface IUserRepo
    {
        public Task<Response<User>> AdduserAsync(User user);

        public Task<Response<User>> GetUserByIdAsync(int id);
        
        public Task<Response<User>> GetUserByEmailAsync(string mail);

        public Task<Response<User>> UpdateUserAsync(User user);

        public Task<Response<bool>> DeActivateUserAsync(User user);


    }
}
