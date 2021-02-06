using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAppUniversity.DbRepository.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Achievements",
                columns: table => new
                {
                    Achievement_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Bonus = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Achievements", x => x.Achievement_Id);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Department_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Department_Id);
                });

            migrationBuilder.CreateTable(
                name: "Enrollees",
                columns: table => new
                {
                    Enrollee_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enrollees", x => x.Enrollee_Id);
                });

            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    Subject_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.Subject_Id);
                });

            migrationBuilder.CreateTable(
                name: "Programs",
                columns: table => new
                {
                    Program_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Department_Id = table.Column<int>(nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    Plan = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programs", x => x.Program_Id);
                    table.ForeignKey(
                        name: "FK_Programs_Departments_Department_Id",
                        column: x => x.Department_Id,
                        principalTable: "Departments",
                        principalColumn: "Department_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EnrolleeAchievements",
                columns: table => new
                {
                    EnrolleeAchievement_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Enrollee_Id = table.Column<int>(nullable: false),
                    Achievement_Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnrolleeAchievements", x => x.EnrolleeAchievement_Id);
                    table.ForeignKey(
                        name: "FK_EnrolleeAchievements_Achievements_Achievement_Id",
                        column: x => x.Achievement_Id,
                        principalTable: "Achievements",
                        principalColumn: "Achievement_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EnrolleeAchievements_Enrollees_Enrollee_Id",
                        column: x => x.Enrollee_Id,
                        principalTable: "Enrollees",
                        principalColumn: "Enrollee_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EnrolleeSubjects",
                columns: table => new
                {
                    EnrolleeSubject_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Subject_Id = table.Column<int>(nullable: false),
                    Enrollee_Id = table.Column<int>(nullable: false),
                    Result = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnrolleeSubjects", x => x.EnrolleeSubject_Id);
                    table.ForeignKey(
                        name: "FK_EnrolleeSubjects_Enrollees_Enrollee_Id",
                        column: x => x.Enrollee_Id,
                        principalTable: "Enrollees",
                        principalColumn: "Enrollee_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EnrolleeSubjects_Subjects_Subject_Id",
                        column: x => x.Subject_Id,
                        principalTable: "Subjects",
                        principalColumn: "Subject_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Applicants",
                columns: table => new
                {
                    Applicant_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Program_Id = table.Column<int>(nullable: false),
                    Enrollee_Id = table.Column<int>(nullable: false),
                    Itog = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicants", x => x.Applicant_Id);
                    table.ForeignKey(
                        name: "FK_Applicants_Enrollees_Enrollee_Id",
                        column: x => x.Enrollee_Id,
                        principalTable: "Enrollees",
                        principalColumn: "Enrollee_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Applicants_Programs_Program_Id",
                        column: x => x.Program_Id,
                        principalTable: "Programs",
                        principalColumn: "Program_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProgramEnrollees",
                columns: table => new
                {
                    ProgramEnrollee_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Program_Id = table.Column<int>(nullable: false),
                    Enrollee_Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgramEnrollees", x => x.ProgramEnrollee_Id);
                    table.ForeignKey(
                        name: "FK_ProgramEnrollees_Enrollees_Enrollee_Id",
                        column: x => x.Enrollee_Id,
                        principalTable: "Enrollees",
                        principalColumn: "Enrollee_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProgramEnrollees_Programs_Program_Id",
                        column: x => x.Program_Id,
                        principalTable: "Programs",
                        principalColumn: "Program_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProgramSubjects",
                columns: table => new
                {
                    ProgramSubject_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Program_Id = table.Column<int>(nullable: false),
                    Subject_Id = table.Column<int>(nullable: false),
                    MinResult = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgramSubjects", x => x.ProgramSubject_Id);
                    table.ForeignKey(
                        name: "FK_ProgramSubjects_Programs_Program_Id",
                        column: x => x.Program_Id,
                        principalTable: "Programs",
                        principalColumn: "Program_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProgramSubjects_Subjects_Subject_Id",
                        column: x => x.Subject_Id,
                        principalTable: "Subjects",
                        principalColumn: "Subject_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Applicants_Enrollee_Id",
                table: "Applicants",
                column: "Enrollee_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Applicants_Program_Id",
                table: "Applicants",
                column: "Program_Id");

            migrationBuilder.CreateIndex(
                name: "IX_EnrolleeAchievements_Achievement_Id",
                table: "EnrolleeAchievements",
                column: "Achievement_Id");

            migrationBuilder.CreateIndex(
                name: "IX_EnrolleeAchievements_Enrollee_Id",
                table: "EnrolleeAchievements",
                column: "Enrollee_Id");

            migrationBuilder.CreateIndex(
                name: "IX_EnrolleeSubjects_Enrollee_Id",
                table: "EnrolleeSubjects",
                column: "Enrollee_Id");

            migrationBuilder.CreateIndex(
                name: "IX_EnrolleeSubjects_Subject_Id",
                table: "EnrolleeSubjects",
                column: "Subject_Id");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramEnrollees_Enrollee_Id",
                table: "ProgramEnrollees",
                column: "Enrollee_Id");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramEnrollees_Program_Id",
                table: "ProgramEnrollees",
                column: "Program_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Programs_Department_Id",
                table: "Programs",
                column: "Department_Id");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramSubjects_Program_Id",
                table: "ProgramSubjects",
                column: "Program_Id");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramSubjects_Subject_Id",
                table: "ProgramSubjects",
                column: "Subject_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applicants");

            migrationBuilder.DropTable(
                name: "EnrolleeAchievements");

            migrationBuilder.DropTable(
                name: "EnrolleeSubjects");

            migrationBuilder.DropTable(
                name: "ProgramEnrollees");

            migrationBuilder.DropTable(
                name: "ProgramSubjects");

            migrationBuilder.DropTable(
                name: "Achievements");

            migrationBuilder.DropTable(
                name: "Enrollees");

            migrationBuilder.DropTable(
                name: "Programs");

            migrationBuilder.DropTable(
                name: "Subjects");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
