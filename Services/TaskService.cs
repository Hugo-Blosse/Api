namespace project
{
    public class TaskService
    {
        static List<Task> Tasks {get; set;}
        static int nextId;
        static TaskService()
        {
            Tasks = Database.GetTaskData();
            if(Database.GetTaskData().Count!=0)
            {
                nextId = Database.GetTaskData().Max(t => t.Id);
            }
        }
         public static List<Task> GetAll() {
            Tasks = Database.GetTaskData();
            return Tasks;
        }
        public static Task? Get(int id)
        {
            return Tasks.FirstOrDefault(t => t.Id == id);
        }

        public static void Add(Task task)
        {

            nextId++;
            task.Id = nextId;
            Database.Execute(Database.InsertTask(task));
        }

        public static void Delete(int id)
        {
            Database.Execute(Database.DeleteTask(id));
        }

        public static void Update(Task task)
        {    
            Database.Execute(Database.UpdateTask(task));
        }
    }
}