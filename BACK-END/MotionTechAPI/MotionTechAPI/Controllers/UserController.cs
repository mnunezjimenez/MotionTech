using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MotionTechAPI.Data;
using MotionTechAPI.Models;
using MotionTechAPI.Services;

namespace MotionTechAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        MotionTechService _service;
        public UserController(MotionTechService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _service.GetAll();
        }

        [HttpGet("{email}/{password}")]
        public ActionResult<User> GetByCredentials(string email,string password)
        {
            var user = _service.GetByCredentials(email, password);
            if (user is not null)
                return user;
            else
                return NotFound();
        }

        [HttpPost("{email}/{password}")]
        public IActionResult Create(string email, string password)
        {
            User user = _service.Create(email,password);
            return user == null ? BadRequest() : Ok(user);
            //return CreatedAtAction(nameof(GetByCredentials), new { id = user!.ID }, user);
        }
    }
}

