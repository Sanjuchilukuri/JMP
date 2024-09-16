namespace JMP.DAL.Entities
{
    public class Job : BaseEntity
    {
        public int Id { get; set; }

        public string RoleName { get; set; }

        public string CompanyName { get; set; }

        public int WorkModeID { get; set; }

        public WorkModeLookup WorkMode { get; set; }

        public string Location { get; set; }

        public DateOnly AppliedOn { get; set; }

        public byte[] AppliedResume {  get; set; }

        public int SourceID { get; set; }

        public SourceLookUp Source { get; set; }

        public string OtherSource { get; set; }
        
        public int JobStatusID { get; set; }

        public JobStatusLookup JobStatus { get; set; }

        public User userId { get; set; }

        public User User { get; set; }

    }
}
