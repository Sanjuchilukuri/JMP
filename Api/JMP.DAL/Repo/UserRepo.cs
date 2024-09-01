using JMP.DAL.DBContext;
using JMP.DAL.Entities;
using JMP.DAL.interfaces;
using Microsoft.EntityFrameworkCore;

namespace JMP.DAL.Repo
{
    public class UserRepo : IUserRepo
    {
        private readonly JMPDBContext _dbContext;

        public UserRepo(JMPDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Response<User>> AdduserAsync(User user)
        {
            if (user != null)
            {
                await _dbContext.Users.AddAsync(user);

                if( await _dbContext.SaveChangesAsync() > 0)
                {
                    return new Response<User>()
                    {
                        data = user,
                        message = "User Added",
                        statusCode = 201
                    };
                }
            }

            return new Response<User>()
            {
                data = new User(),
                message = "Failed to Add user",
                statusCode = 404
            };
        }

        public async Task<Response<bool>> DeActivateUserAsync(User user)
        {
            User? existingUser = await _dbContext.Users.FindAsync(user.Id);
            if (existingUser != null)
            {
                existingUser.IsActive = false;
                if (await _dbContext.SaveChangesAsync() > 0)
                {
                    return new Response<bool>()
                    {
                        data = true,
                        message = "Deactivated Successfully",
                        statusCode = 200
                    };
                }
            }
            return new Response<bool>()
            {
                data = false,
                message = "Failed to deactivate account",
                statusCode = 400
            };
        }

        public async Task<Response<User>> GetUserByIdAsync(int id)
        {
            var user = await _dbContext.Users.SingleOrDefaultAsync(u => u.Id == id && u.IsActive == true);

            if(user != null)
            {
                return new Response<User>()
                {
                    data = user,
                    message = "user found",
                    statusCode = 200
                };
            }

            return new Response<User>()
            {
                data = new User(),
                message = $"User Not Found",
                statusCode = 404
            };
        }

        public async Task<Response<User>> GetUserByEmailAsync(string mail)
        {
            var user = await _dbContext.Users.SingleOrDefaultAsync(u => u.UserEmail == mail && u.IsActive == true);

            if (user != null)
            {
                return new Response<User>()
                {
                    data = user,
                    message = "user found",
                    statusCode = 200
                };
            }

            return new Response<User>()
            {
                data = new User(),
                message = $"User Not Found With {mail}",
                statusCode = 404
            };
        }

        public async Task<Response<User>> UpdateUserAsync(User user)
        {
            var existingUser = await _dbContext.Users.FindAsync(user.Id);

            if (existingUser != null)
            {
                _dbContext.Entry(existingUser).CurrentValues.SetValues(user);

                if (await _dbContext.SaveChangesAsync() > 0)
                {
                    return new Response<User>()
                    {
                        data = existingUser,
                        message = "User updated successfully",
                        statusCode = 200
                    };
                }
                
            }

            return new Response<User>()
            {
                data = new User(),
                message = "User not found",
                statusCode = 404
            };
        }


    }
}
