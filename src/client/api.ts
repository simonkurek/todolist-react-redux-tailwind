import ITask from "../interfaces/ITask";
import Task from "./class/Task";

export interface ApiConfig {
  protocol: string;
  host: string;
  port: number;
}

export default class ApiClient {
  private readonly apiUrl: string;
  constructor({ protocol, host, port }: ApiConfig) {
    this.apiUrl = `${protocol}://${host}:${port}`;
  }

  async getAll(): Promise<ITask[]> {
    const response = await fetch(this.apiUrl + "/task/all");
    const tasks = await response.json();
    const itasks = tasks.map((task: Task) => {
      const itask: ITask = {
        id: task.id,
        text: task.text,
        isCompleted: task.isCompleted,
      };
      return itask;
    });
    return itasks;
  }

  async getTaskById(id: number): Promise<ITask> {
    const response = await fetch(this.apiUrl + "/task/" + id);
    const task = await response.json();
    const itask: ITask = {
      id: task.id,
      text: task.text,
      isCompleted: task.isCompleted,
    };
    return itask;
  }

  async createTask(text: string): Promise<void> {
    await fetch(this.apiUrl + "/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  }

  async updateTaskText(id: number, text: string): Promise<void> {
    await fetch(this.apiUrl + "/task/changeTaskText/ " + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  }

  async updateTaskIsCompleted(id: number, isCompleted: boolean): Promise<void> {
    await fetch(this.apiUrl + "/task/changeTaskStatus/ " + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted }),
    });
  }

  async deleteTask(id: number): Promise<void> {
    await fetch(this.apiUrl + "/task/delete/" + id, {
      method: "DELETE",
    });
  }
}
