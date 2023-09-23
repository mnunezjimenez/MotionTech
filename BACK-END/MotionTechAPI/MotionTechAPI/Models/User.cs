using System.ComponentModel.DataAnnotations;
namespace MotionTechAPI.Models
{
	public class User
	{
		[Key]
		public int ID { get; set; }
		public string? Email { get; set; }
		public string? Password { get; set; }

		public User(string email, string password)
		{
			Email = email;
			Password = password;
		}

		public User() { }
	}
}

