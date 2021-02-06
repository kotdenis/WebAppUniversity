using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using WebAppUniversity.Models;

namespace WebAppUniversity.DbRepository
{
    public class UniversityDbContext : DbContext
    {
        public UniversityDbContext(DbContextOptions<UniversityDbContext> options) : base(options) { }

        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Applicant> Applicants { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Enrollee> Enrollees { get; set; }
        public DbSet<EnrolleeAchievement> EnrolleeAchievements { get; set; }
        public DbSet<EnrolleeSubject> EnrolleeSubjects { get; set; }
        public DbSet<ProgramEnrollee> ProgramEnrollees { get; set; }
        public DbSet<Programs> Programs { get; set; }
        public DbSet<ProgramSubject> ProgramSubjects { get; set; }
        public DbSet<Subject> Subjects { get; set; }
    }
}
