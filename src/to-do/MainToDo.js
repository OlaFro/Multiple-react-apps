import React from "react";
import AddTask from "./AddTask";
import Search from "./search";

class Main extends React.Component {
  state = {
    tasks: [
      { deadline: "2020-10-06", task: "awesome task" },
      { deadline: "2020-10-21", task: "best task" },
      { deadline: "2020-10-21", task: "curious task" },
      { deadline: "2020-10-21", task: "dreadful task" },
      { deadline: "2020-10-21", task: "easy task" },
      { deadline: "2020-10-21", task: "funny task" },
      { deadline: "2020-10-21", task: "gorgeous task" },
      { deadline: "2020-10-21", task: "heavy task" },
      { deadline: "2020-10-21", task: "ignorant task" },
      { deadline: "2020-10-21", task: "job task" },
    ],
    result: [],
  };

  filterTask = (title) => {
    let result = this.state.tasks.filter((elem) => {
      // console.log(elem.task);
      return elem.task.startsWith(`${title}`);
    });
    this.setState({
      ...this.state,
      result,
    });
  };

  submitTask = (taskObject) => {
    this.setState({
      tasks: [...this.state.tasks, taskObject],
    });
  };

  render() {
    return (
      <div className="mx-auto flex-column col-8 border bg-light my-5 align-items-center d-flex">
        <h1 className="display-5 text-center my-3 ">To-Do app</h1>
        <Search todos={this.state.tasks} filterTask={this.filterTask} />
        <p>
          {this.state.result.length
            ? this.state.result.map((t) => {
                return t.task + " ";
              })
            : null}
        </p>
        <AddTask submit={this.submitTask} />
      </div>
    );
  }
}

export default Main;
