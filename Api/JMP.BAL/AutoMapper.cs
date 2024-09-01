using AutoMapper;
using JMP.BAL.DTO.User;
using JMP.DAL.Entities;

namespace JMP.BAL
{
    public class AutoMapper : Profile
    {
        public AutoMapper() 
        {
            CreateMap<User, UserSummary>();
        }

    }
}
