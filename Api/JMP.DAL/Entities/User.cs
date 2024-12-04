namespace JMP.DAL.Entities
{
    public class User : BaseEntity
    {
        public int Id { get; set; }

        public string Image {  get; set; }

        public string UserName { get; set; }

        public string UserEmail { get; set; }

        public string PasswordHash { get; set; }

        public bool IsActive { get; set; }

        public bool IsEmailVerified { get; set; }

        public ICollection<Job> Jobs { get; set; } = new List<Job>();
    }
}
