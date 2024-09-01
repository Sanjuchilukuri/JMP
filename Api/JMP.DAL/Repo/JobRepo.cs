using JMP.DAL.DBContext;
using JMP.DAL.Entities;
using JMP.DAL.interfaces;
using Microsoft.EntityFrameworkCore;

namespace JMP.DAL.Repo
{
    public class JobRepo : IJobRepo
    {
        private readonly JMPDBContext _dbContext;
        public JobRepo (JMPDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Response<Job>> AddJobAsync(Job job)
        {
            await _dbContext.Jobs.AddAsync(job);
            if( await _dbContext.SaveChangesAsync() > 0)
            {
                return new Response<Job>()
                {
                    data = job,
                    message = "new Job Added",
                    statusCode = 201
                };
            }
            return new Response<Job>()
            {
                data = new Job(),
                message = "Failed to Add a job",
                statusCode = 400,
            };
        }

        public async Task<Response<Job>> GetJobByCompanyNameAsync(string name)
        {
            Job? job = await _dbContext.Jobs.SingleOrDefaultAsync(j => j.CompanyName == name);

            if (job != null)
            {
                return new Response<Job>()
                {
                    data = job,
                    message = "Job Found",
                    statusCode = 200
                };
            }
            return new Response<Job>()
            {
                data = new Job(),
                message = "Job not Found",
                statusCode = 404
            };
        }

        public async Task<Response<List<Job>>> GetJobsAsync()
        {
            List<Job> jobs = await _dbContext.Jobs.ToListAsync();
            
            if( jobs.Count > 0)
            {
                return new Response<List<Job>>()
                {
                    data = jobs,
                    statusCode = 200,
                    message = $"{jobs.Count} Jobs Found"
                };
            }

            return new Response<List<Job>>()
            {
                data = jobs,
                statusCode = 404,
                message = "No jobs Found"
            };
        }

        public async Task<Response<Job>> UpdateJobAsync(Job job)
        {
            var existingJob = await _dbContext.Jobs.FindAsync(job.Id);

            if (existingJob != null)
            {

                _dbContext.Entry(existingJob).CurrentValues.SetValues(job);

                if (await _dbContext.SaveChangesAsync() > 0)
                {
                    return new Response<Job>()
                    {
                        data = existingJob,
                        message = "Job updated successfully",
                        statusCode = 200
                    };
                } 
            }

            return new Response<Job>()
            {
                data = new Job(),
                message = "Job not found",
                statusCode = 404
            };
        }

    }
}
