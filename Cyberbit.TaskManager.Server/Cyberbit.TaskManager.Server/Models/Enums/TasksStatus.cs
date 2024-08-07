﻿using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Cyberbit.TaskManager.Server.Models.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum TasksStatus
    {
        Open,
        Done,
        Overdue
    }
}
