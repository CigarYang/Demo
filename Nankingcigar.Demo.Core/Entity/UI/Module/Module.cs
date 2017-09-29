﻿using Abp.Domain.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nankingcigar.Demo.Core.Entity.UI.Module
{
    [Table("Module")]
    public class Module : Entity<long>
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage",
            "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Module()
        {
            Parents = new HashSet<ModuleRelationship>();
            Children = new HashSet<ModuleRelationship>();
            ModuleComponents = new HashSet<ModuleComponent>();
            Routes = new HashSet<Route.Route>();
            Routes = new HashSet<Route.Route>();
        }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public bool RequiredLogin { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<ModuleRelationship> Parents { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<ModuleRelationship> Children { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<ModuleComponent> ModuleComponents { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Route.Route> Routes { get; set; }
    }
}