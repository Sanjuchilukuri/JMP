using JMP.DAL.DBContext;
using JMP.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

public class DBInitializer
{
    private readonly JMPDBContext _context;

    public DBInitializer(JMPDBContext context)
    {
        _context = context;
    }

    public async Task InitializeAsync()
    {
        await _context.Database.EnsureCreatedAsync();

        await SeedUsersAsync();
        await SeedWorkModesAsync();
        await SeedSourceLookupsAsync();
        await SeedJobStatusesAsync();
    }

    private async Task SeedUsersAsync()
    {
        if (!await _context.Users.AnyAsync())
        {
            var user = new User()
            {
                UserName = "TestUser",
                UserEmail = "testuser@gmail.com",
                PasswordHash = "TestPassword",
                IsActive = true,
                IsEmailVerified = true
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
    }

    private async Task SeedWorkModesAsync()
    {
        if (!await _context.WorkModeLookups.AnyAsync())
        {
            var workModes = new WorkModeLookup[]
            {
                new WorkModeLookup() { WorkMode = "Remote" },
                new WorkModeLookup() { WorkMode = "Onsite" },
                new WorkModeLookup() { WorkMode = "Hybrid" }
            };

            await _context.WorkModeLookups.AddRangeAsync(workModes);
            await _context.SaveChangesAsync();
        }
    }

    private async Task SeedSourceLookupsAsync()
    {
        if (!await _context.SourceLookUps.AnyAsync())
        {
            var sources = new SourceLookUp[]
            {
                new SourceLookUp() { Source = "LinkedIn" },
                new SourceLookUp() { Source = "Indeed" },
                new SourceLookUp() { Source = "Naukari" },
                new SourceLookUp() { Source = "TimesJob" },
                new SourceLookUp() { Source = "Glassdoor" },
                new SourceLookUp() { Source = "Company Website" },
                new SourceLookUp() { Source = "Other" }
            };

            await _context.SourceLookUps.AddRangeAsync(sources);
            await _context.SaveChangesAsync();
        }
    }

    private async Task SeedJobStatusesAsync()
    {
        if (!await _context.JobStatusLookups.AnyAsync())
        {
            var jobStatuses = new JobStatusLookup[]
            {
                new JobStatusLookup() { JobStatus = "Applied" },
                new JobStatusLookup() { JobStatus = "Shortlisted" },
                new JobStatusLookup() { JobStatus = "Rejected" },
                new JobStatusLookup() { JobStatus = "Interview Scheduled" },
                new JobStatusLookup() { JobStatus = "Interviewed" },
                new JobStatusLookup() { JobStatus = "Offered" },
                new JobStatusLookup() { JobStatus = "On Hold" },
                new JobStatusLookup() { JobStatus = "Withdrawn" },
                new JobStatusLookup() { JobStatus = "Joined" }
            };

            await _context.JobStatusLookups.AddRangeAsync(jobStatuses);
            await _context.SaveChangesAsync();
        }
    }
}
