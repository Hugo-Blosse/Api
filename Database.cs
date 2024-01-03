using System.Data;
using System.Data.SqlClient;
namespace project
{
    class Database
    {
        public static void Execute(string command)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(local); Initial Catalog=Users; User ID=root; Password=root;");
            SqlCommand cmd = new SqlCommand(command, conn);

             try {
                conn.Open();
                cmd.ExecuteScalar();
            } catch (Exception exp) {
                Console.Write(exp.Message);
            } finally {
                conn.Close();
            }
        }
        public static List<User> GetData() {
            List<User> list = new List<User>();
            using (SqlConnection conn = new SqlConnection(@"Data Source=(local); Initial Catalog=Users; User ID=root; Password=root;"))
            {
                using (SqlCommand cmd = new SqlCommand("SELECT * FROM TEST", conn))
                {
                    conn.Open();
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        int idOrdinal = reader.GetOrdinal("Id");
                        int nameOrdinal = reader.GetOrdinal("Name");
                        int emailOrdinal = reader.GetOrdinal("Email");
                        int isAdminOrdinal = reader.GetOrdinal("IsAdmin");
                        while(reader.Read())
                        {
                            var user = new User();
                            user.Id = reader.GetInt32(idOrdinal);
                            user.Name = reader.GetString(nameOrdinal);
                            user.Email = reader.GetString(emailOrdinal);
                            user.IsAdmin = reader.GetBoolean(isAdminOrdinal);
                            list.Add(user);
                        }
                    }
                    conn.Close();
                }
}
            return list;
        }
        public static string Start()
        {
            return @"IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'USERS')
                    BEGIN
                    CREATE DATABASE USERS
                    END;
                    USE USERS;
                    IF NOT EXISTS(SELECT * FROM sysobjects WHERE name = 'TEST' and xtype = 'U')
                    CREATE TABLE TEST (
                        Id INT,
                        Name VARCHAR(50),
                        Email VARCHAR(50),
                        IsAdmin BIT,
                        PRIMARY KEY (ID)
                    );";
        }
        public static string InsertUser(User user)
        {
            return $"INSERT INTO TEST VALUES ('{user.Name}', '{user.Email}', '{user.IsAdmin}')";
        }
        public static string DeleteUser(int id)
        {
            return $"DELETE FROM TEST WHERE Id ='{id}";
        }
        public static string UpdateUser(User user)
        {
            return $"UPDATE TEST SET NAME = '{user.Name}', Email = '{user.Email}', IsAdmin = '{user.IsAdmin}' WHERE Id = {user.Id}";
        }
    }
}