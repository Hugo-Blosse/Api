namespace project
{
    public class UserService
    {
        static List<User> Users { get; }
        static UserService()
        {
            Users = Database.GetData();
        }
        public static List<User> GetAll() => Users;

        public static User? Get(int id)
        {
            return Users.FirstOrDefault(u => u.Id == id);
        }

        public static void Add(User user)
        {
            Users.Add(user);
            Database.Execute(Database.InsertUser(user));
        }

        public static void Delete(int id)
        {
            var user = Get(id);
            if(user is null)
                return;

            Users.Remove(user);
            Database.Execute(Database.DeleteUser(id));
        }

        public static void Update(User user)
        {
            var index = Users.FindIndex(p => p.Id == user.Id);
            if(index == -1)
                return;

            Users[index] = user;
        }
    }
}
