import React, { Component } from 'react';
import { connect } from "react-redux";
import { createProject } from "../../store/action/projectAction";

export class CreateProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    }

    this.handleCreateProject = this.handleCreateProject.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleCreateProject(e) {
    e.preventDefault();
    this.props.createProject(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="well well-lg col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
        <form onSubmit={this.handleCreateProject}>
          <div className="form-group">
            <label htmlFor="title">Project Title:</label>
            <input type="text" className="form-control" id="title" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea type="text" className="form-control" id="description" onChange={this.handleChange} ></textarea>
          </div>

          <button type="submit" className="btn btn-default">Create Project</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);