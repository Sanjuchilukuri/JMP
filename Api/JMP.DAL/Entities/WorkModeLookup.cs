using JMP.DAL.Entities;

public class WorkModeLookup : BaseEntity
{
    public int Id { get; set; }

    public string WorkMode { get; set; }

    public ICollection<Job> Jobs { get; set; }
}