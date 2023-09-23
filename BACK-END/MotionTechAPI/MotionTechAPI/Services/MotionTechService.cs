using Microsoft.EntityFrameworkCore;
using MotionTechAPI.Data;
using MotionTechAPI.Models;

namespace MotionTechAPI.Services
{
	public class MotionTechService
	{
		private readonly MotionTechContext _context;
		public MotionTechService(MotionTechContext context)
		{
			_context = context;
		}

		public IEnumerable<User> GetAll()
		{
			return _context.Users
				.AsNoTracking()
				.ToList();
		}

		public User? GetByCredentials(string email, string password)
		{
			return _context.Users
				.Where(p => p.Email == email && p.Password == password)
				.FirstOrDefault();
        }

		public User Create(string email, string password)
		{
			User newUser = new User(email, password);
			_context.Users.Add(newUser);
			_context.SaveChanges();
			return newUser;
		}
	}
}

