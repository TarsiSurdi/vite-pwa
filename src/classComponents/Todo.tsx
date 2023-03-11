import { ChangeEvent, Component, FormEvent } from "react";

interface TaskI {
  id: number;
  body: string;
}

interface TodoState {
  newTask: string;
  allTasks: TaskI[];
}

export class Todo extends Component<object, TodoState> {
  constructor(props: object) {
    super(props);

    this.state = {allTasks: [], newTask: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    this.setState({newTask: value});
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    const {allTasks, newTask} = this.state;

    const taskToAdd: TaskI = {
      id: Math.random(),
      body: newTask.trim(),
    };

    if(taskToAdd.body) {
      this.setState({allTasks: [...allTasks, taskToAdd]});
    }

    this.setState({newTask: ""});
  }

  handleDelete(id: number) {
    const {allTasks} = this.state;
    this.setState({allTasks: allTasks.filter((task) => task.id !== id)});
  }

  render() {
    const {allTasks, newTask} = this.state;

    return(
      <div id="todo">
        <h2>Todo</h2>
        <ul>
          {allTasks.map((task) => <li key={task.id}>{task.body}<button onClick={() => this.handleDelete(task.id)}>X</button></li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTask} onChange={this.handleChange} placeholder="Do laundry..." />
          <button type="submit">New Task</button>
        </form>
      </div>
    );
  }
}