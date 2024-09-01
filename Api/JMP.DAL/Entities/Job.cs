namespace JMP.DAL.Entities
{
    public class Job
    {
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public string RoleName { get; set; }

        public string Location { get; set; }

        public DateOnly AppliedOn { get; set; }

        public byte[] AppliedResume {  get; set; }

        public string Source { get; set; }

        public string HRContactStatus { get; set; }

        public string JobStatus { get; set; }

        public User userId { get; set; }

        public User User { get; set; }


    }
}
