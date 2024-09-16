using JMP.DAL.Entities;

public class SourceLookUp : BaseEntity
{
    public int Id { get; set; }

    public string Source { get; set; }

    public ICollection<Job> Jobs { get; set; }
}