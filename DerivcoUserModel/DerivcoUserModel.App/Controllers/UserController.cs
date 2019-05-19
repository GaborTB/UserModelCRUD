using Microsoft.AspNetCore.Mvc;
using DerivcoUserModel.Logic;
using DerivcoUserModel.Data.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace DerivcoUserModel.App.Controllers
{
    //[Route("api/[controller]/[action]")]
    [Route("api/Users")]
    public class UserController : Controller
    {
        readonly UserService userService;

        public UserController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("")]
        public ActionResult List()
        {
            return Ok(userService.ListAllUsers());
        }

        [HttpPost("")]
        public ActionResult CreateOrUpdate([FromBody] User/*dynamic*/ user)
        {
            User mutatedUser = userService.AddOrUpdate(user);
            return Ok(mutatedUser);// Ok(userService.UpdateComment(user.id, user.Comment));
        }

        [HttpDelete("{userId}")]
        public ActionResult Delete([FromRoute] int userId)
        {
            userService.DeleteUser(userId);
            return NoContent();
        }
    }
}
