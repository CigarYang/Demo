﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp;

namespace Nankingcigar.Demo.Core.Entity
{
    public sealed class DemoApiException : Exception, IHasErrorCode
    {
        public DemoApiException(int code)
            : base()
        {
            Code = code;
        }

        public DemoApiException(int code, string message)
            : base(message)
        {
            Code = code;
        }

        public DemoApiException(int code, string message, Exception innerException)
            : base(message, innerException)
        {
            Code = code;
        }

        public int Code { get; set; }
    }
}