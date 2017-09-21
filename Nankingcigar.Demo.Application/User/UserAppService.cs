﻿using Nankingcigar.Demo.Core.Entity.User;
using Nankingcigar.Demo.Dapper.Extend;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Dependency;
using Castle.MicroKernel.Registration;
using Nankingcigar.Demo.Core.DomainService.Authorization;

namespace Nankingcigar.Demo.Application.User
{
    internal class UserAppService : DemoAppServiceBase, IUserAppService
    {
        private readonly IDapperRepositoryExtension<Landing, long> _userLandingDapperRepositoryExtend;
        private readonly IDapperRepositoryExtension<Grid, long> _userGridDapperRepositoryExtend;

        public UserAppService(
            IDapperRepositoryExtension<Core.Entity.User.Landing, long> userLandingDapperRepositoryExtend,
            IDapperRepositoryExtension<Grid, long> userGridDapperRepositoryExtend)
        {
            _userLandingDapperRepositoryExtend = userLandingDapperRepositoryExtend;
            _userGridDapperRepositoryExtend = userGridDapperRepositoryExtend;
        }

        public virtual async Task<Landing> Get(long? userId)
        {
            return await _userLandingDapperRepositoryExtend.GetAsync(userId ?? AbpSession.UserId.Value);
        }

        public virtual async Task<IEnumerable<Grid>> GetAll()
        {
            return await _userGridDapperRepositoryExtend.GetAllAsync();
        }
    }
}