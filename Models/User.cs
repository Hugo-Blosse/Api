using System.ComponentModel.DataAnnotations;
namespace project
{
    public class User
    {
        public int Id {get; set;}
        public string? Name {get; set;}
        public string? Email {get; set;}
        public bool IsAdmin {get; set;}
    }
}
