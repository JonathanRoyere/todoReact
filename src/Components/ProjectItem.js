import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props);
    return (
      <li class="project">
        <strong>{this.props.project.title} :</strong> {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
