using System;
using MotionTechAPI.Models;

namespace MotionTechAPI.Data
{
	public class DbInitializer
	{
		public static void Initialize(MotionTechContext context)
		{
			if (context.Users.Any())
			{
				return; //DB has been seeded
			}

			var users = new User[]
			{
				new User
				{
					Email = "12345@gmail.com",
					Password = "test1"
				},
				new User
				{
					Email = "123456@gmail.com",
					Password = "test2"
				},
				new User
				{
					Email = "1234567@gmail.com",
					Password = "test3"
				}
			};

			context.Users.AddRange(users);
			context.SaveChanges();
		}
	}
}

