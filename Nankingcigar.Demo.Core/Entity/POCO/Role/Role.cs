﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace Nankingcigar.Demo.Core.Entity.POCO.Role
{
    [Table("Role")]
    public sealed class Role :
        DemoEntity,
        IFullAudited<User.User>
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage",
            "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Role()
        {
            RoleUsers = new HashSet<RoleUser>();
            RoleApis = new HashSet<RoleApi>();
            RoleRoutes = new HashSet<RoleRoute>();
        }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<RoleUser> RoleUsers { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<RoleApi> RoleApis { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<RoleRoute> RoleRoutes { get; set; }


        public User.User CreatorUser { get; set; }
        public User.User LastModifierUser { get; set; }
        public User.User DeleterUser { get; set; }
    }
}