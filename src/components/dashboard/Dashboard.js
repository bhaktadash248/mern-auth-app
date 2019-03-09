import React from "react";
import { connect } from "react-redux";
import ProjectList from "../project/ProjectList"
import Notification from "./Notifications";

class Dashboard extends React.Component {
    render() {
        const { projects } = this.props;
        console.log(projects);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="col-md-8 col-sm-8">
                            <ProjectList projects={projects} />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);