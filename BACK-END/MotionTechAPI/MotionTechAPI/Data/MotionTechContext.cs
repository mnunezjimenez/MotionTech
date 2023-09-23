using Microsoft.EntityFrameworkCore;
using MotionTechAPI.Models;

namespace MotionTechAPI.Data
{
	public class MotionTechContext : DbContext
	{
		public MotionTechContext(DbContextOptions<MotionTechContext> options) : base (options)
		{
		}

		public DbSet<User> Users => Set<User>();
	}
}

