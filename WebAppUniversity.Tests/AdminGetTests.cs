using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using System.Threading.Tasks;
using WebAppUniversity.DbRepository;
using WebAppUniversity.Models;
using WebAppUniversity.Controllers;

namespace WebAppUniversity.Tests
{
    public class AdminGetTests
    {
        Mock<IAdminRepository<BaseModel>> mock;
        public AdminGetTests()
        {
            mock = new Mock<IAdminRepository<BaseModel>>();
        }

        [Fact]
        public void GetParallelDatas()
        {
            var controller = new AdminApiController(mock.Object, null);
            var res = controller.GetBaseModelsAsync()
        }

        
    }
}
