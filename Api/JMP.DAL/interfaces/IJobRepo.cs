using JMP.DAL.Entities;

namespace JMP.DAL.interfaces
{
    public interface IJobRepo
    {
        public Task<Response<Job>> AddJobAsync(Job job);

        public Task<Response<Job>> UpdateJobAsync(Job job);

        public Task<Response<List<Job>>> GetJobsAsync();

        public Task<Response<Job>> GetJobByCompanyNameAsync(string name);
    }
}
