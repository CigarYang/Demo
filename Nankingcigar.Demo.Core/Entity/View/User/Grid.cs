﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace Nankingcigar.Demo.Core.Entity.View.User
{
    [Table("vUserGrid")]
    public class Grid : Entity<long>
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Display { get; set; }

        [StringLength(100)]
        public string Email { get; set; }

        public DateTime? LastLoginTime { get; set; }
    }
}