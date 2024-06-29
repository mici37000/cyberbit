﻿using Cyberbit.TaskManager.Server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cyberbit.TaskManager.Server.Interfaces
{
    public interface IUsersDal
    {
        Task<IList<User>> GetAllUser();

        Task<User> GetUserById(int id);

        Task<User> AddUser(User user);

        Task<User> UpdateUser(User user);

        Task<User> DeleteUserById(int id);
        Task<User> GetUser(string userEmail, string password);
    }
}
