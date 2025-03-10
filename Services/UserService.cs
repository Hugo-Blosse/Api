namespace project
{
    public class UserService
    {
        static List<User> Users { get; set; }
        static UserService()
        {
            Users = Database.GetUserData();
        }
        public static List<User> GetAll() {
            Users = Database.GetUserData();
            return Users;
        }
        public static User? Get(string username)
        {
            return Users.FirstOrDefault(u => u.Username == username);
        }

        public static void Add(User user)
        {
            Database.Execute(Database.InsertUser(user));
        }

        public static void Delete(string username)
        {
            Database.Execute(Database.DeleteUser(username));
        }

        public static void Update(User user)
        {
            Database.Execute(Database.UpdateUser(user));
        }
    }
}
