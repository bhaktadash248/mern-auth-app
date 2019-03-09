import React from "react";
import ProjectList from "../project/ProjectList"
import Notification from "./Notifications";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="col-md-8 col-sm-8">
                            <ProjectList />
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

export default Dashboard;