﻿using System.Data.Common;
using System.Data.Entity;
using Abp.EntityFramework;
using Nankingcigar.Demo.Core.Entity;

namespace Nankingcigar.Demo.EntityFramework.EntityFramework
{
    public class DemoDbContext : AbpDbContext
    {
        //TODO: Define an IDbSet for each Entity...

        //Example:
        //public virtual IDbSet<User> Users { get; set; }
        public virtual IDbSet<User> Users { get; set; }

        public virtual IDbSet<AuditLog> Audits { get; set; }

        /* NOTE:
         *   Setting "Default" to base class helps us when working migration commands on Package Manager Console.
         *   But it may cause problems when working Migrate.exe of EF. If you will apply migrations on command line, do not
         *   pass connection string name to base classes. ABP works either way.
         */

        public DemoDbContext()
            : base("Default")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        /* NOTE:
         *   This constructor is used by ABP to pass connection string defined in DemoDataModule.PreInitialize.
         *   Notice that, actually you will not directly create an instance of DemoDbContext since ABP automatically handles it.
         */

        public DemoDbContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        //This constructor is used in tests
        public DemoDbContext(DbConnection existingConnection)
            : base(existingConnection, false)
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DemoDbContext(DbConnection existingConnection, bool contextOwnsConnection)
            : base(existingConnection, contextOwnsConnection)
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasMany(e => e.CreatedUsers)
                .WithOptional(e => e.CreatorUser)
                .HasForeignKey(e => e.CreatorUserId);
            modelBuilder.Entity<User>()
                .HasMany(e => e.LastModifiedUsers)
                .WithOptional(e => e.LastModifierUser)
                .HasForeignKey(e => e.LastModifierUserId);
            modelBuilder.Entity<User>()
                .HasMany(e => e.DeletedUsers)
                .WithOptional(e => e.DeleterUser)
                .HasForeignKey(e => e.DeleterUserId);

            modelBuilder.Entity<User>()
                .HasMany(e => e.UserAuditLogs)
                .WithOptional(e => e.User)
                .HasForeignKey(e => e.UserId);
            modelBuilder.Entity<User>()
                .HasMany(e => e.ImpersonatorAuditLogs)
                .WithOptional(e => e.Impersonator)
                .HasForeignKey(e => e.ImpersonatorUserId);
        }
    }
}