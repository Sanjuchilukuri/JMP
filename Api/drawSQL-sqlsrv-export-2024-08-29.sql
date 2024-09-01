CREATE TABLE "Jobs"(
    "jobId" INT NOT NULL,
    "company" NVARCHAR(255) NOT NULL,
    "Role" NVARCHAR(255) NOT NULL,
    "location" NVARCHAR(255) NOT NULL,
    "appliedOn" DATETIME NOT NULL,
    "appliedResume" VARBINARY(MAX) NOT NULL,
    "source" NVARCHAR(255) NOT NULL,
    "HRContactStatus" NVARCHAR(255) NOT NULL,
    "jobStatus" NVARCHAR(255) NOT NULL,
    "userId" INT NOT NULL
);
ALTER TABLE
    "Jobs" ADD CONSTRAINT "jobs_jobid_primary" PRIMARY KEY("jobId");
CREATE TABLE "users"(
    "userId" INT NOT NULL,
    "userName" NVARCHAR(255) NOT NULL,
    "email" NVARCHAR(255) NOT NULL,
    "passwordHash" NVARCHAR(255) NOT NULL,
    "isActive" INT NOT NULL
);
ALTER TABLE
    "users" ADD CONSTRAINT "users_userid_primary" PRIMARY KEY("userId");
CREATE UNIQUE INDEX "users_email_unique" ON
    "users"("email");
ALTER TABLE
    "Jobs" ADD CONSTRAINT "jobs_userid_foreign" FOREIGN KEY("userId") REFERENCES "users"("userId");