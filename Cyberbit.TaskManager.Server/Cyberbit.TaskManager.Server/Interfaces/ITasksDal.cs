using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cyberbit.TaskManager.Server.Interfaces
{
    public interface ITasksDal
    {
        Task<IList<Models.Task>> GetAllTask();

        Task<Models.Task> GetTaskById(int id);
        
        Task<IList<Models.Task>> GetAllEmployeesTasks(int employeeId);
        Task<IList<Models.Task>> DoneAllTasks(IList<Models.Task> tasks);

        Task<Models.Task> AddTask(Models.Task task);

        Task<Models.Task> UpdateTask(Models.Task task);

        Task<Models.Task> DeleteTaskById(int id);

    }
}
