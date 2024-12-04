using JMP.DAL.Entities;

public class JobStatusLookup : BaseEntity
{
    public int Id { get; set; }

    public string JobStatus { get; set; }

    public ICollection<Job> Jobs { get; set; }
}