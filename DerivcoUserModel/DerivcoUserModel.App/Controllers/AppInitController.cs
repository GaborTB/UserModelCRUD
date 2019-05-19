using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace DerivcoUserModel.App.Controllers
{
    public class AppInitController : Controller
    {
        public IActionResult Index()
        {
            return View("AppInit");
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}