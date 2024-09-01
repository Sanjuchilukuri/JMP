using JMP.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace JMP.DAL.DBContext
{
    public class JMPDBContext : DbContext
    {
        public JMPDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions) { }

        public DbSet<User> Users;

        public DbSet<Job> Jobs;


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
               .ValueGeneratedOnAdd()
               .UseIdentityColumn(seed: 1, increment: 1);

                entity.Property(e => e.UserName).IsRequired();

                entity.Property(e => e.UserEmail).IsRequired();

                entity.HasIndex(e => e.UserEmail).IsUnique();

                entity.Property(e => e.PasswordHash).IsRequired();

                entity.Property(e => e.IsActive).IsRequired();

            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.HasKey( e => e.Id);

                entity.Property(e => e.Id)
               .ValueGeneratedOnAdd()
               .UseIdentityColumn(seed: 1, increment: 1);

                entity.Property(e => e.CompanyName).IsRequired();

                entity.Property(e => e.RoleName).IsRequired();

                entity.Property(e => e.Location).IsRequired();

                entity.Property(e => e.AppliedOn).IsRequired();

                entity.Property(e => e.AppliedResume).IsRequired();

                entity.Property(e => e.Source).IsRequired();

                entity.Property(e => e.HRContactStatus).IsRequired();

                entity.Property(e => e.JobStatus).IsRequired();

                entity.HasOne(e => e.User)
                .WithMany(e => e.Jobs)
                .HasForeignKey(e => e.userId);

            });
            base.OnModelCreating(modelBuilder);
        }

    }
}
