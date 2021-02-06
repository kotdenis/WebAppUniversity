﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAppUniversity.DbRepository;

namespace WebAppUniversity.DbRepository.Migrations
{
    [DbContext(typeof(UniversityDbContext))]
    [Migration("20210206092029_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAppUniversity.Models.Achievement", b =>
                {
                    b.Property<int>("Achievement_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Bonus");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Achievement_Id");

                    b.ToTable("Achievements");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Applicant", b =>
                {
                    b.Property<int>("Applicant_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Enrollee_Id");

                    b.Property<int>("Itog");

                    b.Property<int>("Program_Id");

                    b.HasKey("Applicant_Id");

                    b.HasIndex("Enrollee_Id");

                    b.HasIndex("Program_Id");

                    b.ToTable("Applicants");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Department", b =>
                {
                    b.Property<int>("Department_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(500);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Department_Id");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Enrollee", b =>
                {
                    b.Property<int>("Enrollee_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Enrollee_Id");

                    b.ToTable("Enrollees");
                });

            modelBuilder.Entity("WebAppUniversity.Models.EnrolleeAchievement", b =>
                {
                    b.Property<int>("EnrolleeAchievement_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Achievement_Id");

                    b.Property<int>("Enrollee_Id");

                    b.HasKey("EnrolleeAchievement_Id");

                    b.HasIndex("Achievement_Id");

                    b.HasIndex("Enrollee_Id");

                    b.ToTable("EnrolleeAchievements");
                });

            modelBuilder.Entity("WebAppUniversity.Models.EnrolleeSubject", b =>
                {
                    b.Property<int>("EnrolleeSubject_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Enrollee_Id");

                    b.Property<int>("Result");

                    b.Property<int>("Subject_Id");

                    b.HasKey("EnrolleeSubject_Id");

                    b.HasIndex("Enrollee_Id");

                    b.HasIndex("Subject_Id");

                    b.ToTable("EnrolleeSubjects");
                });

            modelBuilder.Entity("WebAppUniversity.Models.ProgramEnrollee", b =>
                {
                    b.Property<int>("ProgramEnrollee_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Enrollee_Id");

                    b.Property<int>("Program_Id");

                    b.HasKey("ProgramEnrollee_Id");

                    b.HasIndex("Enrollee_Id");

                    b.HasIndex("Program_Id");

                    b.ToTable("ProgramEnrollees");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Programs", b =>
                {
                    b.Property<int>("Program_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Department_Id");

                    b.Property<string>("Description")
                        .HasMaxLength(500);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("Plan");

                    b.HasKey("Program_Id");

                    b.HasIndex("Department_Id");

                    b.ToTable("Programs");
                });

            modelBuilder.Entity("WebAppUniversity.Models.ProgramSubject", b =>
                {
                    b.Property<int>("ProgramSubject_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("MinResult");

                    b.Property<int>("Program_Id");

                    b.Property<int>("Subject_Id");

                    b.HasKey("ProgramSubject_Id");

                    b.HasIndex("Program_Id");

                    b.HasIndex("Subject_Id");

                    b.ToTable("ProgramSubjects");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Subject", b =>
                {
                    b.Property<int>("Subject_Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Subject_Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("WebAppUniversity.Models.Applicant", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Enrollee", "Enrollee")
                        .WithMany("Applicants")
                        .HasForeignKey("Enrollee_Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppUniversity.Models.Programs", "Programs")
                        .WithMany("Applicants")
                        .HasForeignKey("Program_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebAppUniversity.Models.EnrolleeAchievement", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Achievement", "Achievement")
                        .WithMany("EnrolleeAchievements")
                        .HasForeignKey("Achievement_Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppUniversity.Models.Enrollee", "Enrollee")
                        .WithMany("EnrolleeAchievements")
                        .HasForeignKey("Enrollee_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebAppUniversity.Models.EnrolleeSubject", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Enrollee", "Enrollee")
                        .WithMany("EnrolleeSubjects")
                        .HasForeignKey("Enrollee_Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppUniversity.Models.Subject", "Subject")
                        .WithMany("EnrolleeSubjects")
                        .HasForeignKey("Subject_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebAppUniversity.Models.ProgramEnrollee", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Enrollee", "Enrollee")
                        .WithMany("ProgramEnrollees")
                        .HasForeignKey("Enrollee_Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppUniversity.Models.Programs", "Programs")
                        .WithMany("ProgramEnrollees")
                        .HasForeignKey("Program_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebAppUniversity.Models.Programs", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Department", "Department")
                        .WithMany("Programs")
                        .HasForeignKey("Department_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebAppUniversity.Models.ProgramSubject", b =>
                {
                    b.HasOne("WebAppUniversity.Models.Programs", "Programs")
                        .WithMany("ProgramSubjects")
                        .HasForeignKey("Program_Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebAppUniversity.Models.Subject", "Subject")
                        .WithMany("ProgramSubjects")
                        .HasForeignKey("Subject_Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
