import React from "react";

const ProjectSummery = ({project}) => {
    return (
        <div className="well well-lg">
            <h4>{project.title}</h4>
            <p>Project text.</p>
            <p>Created On sept-3-2019</p>
        </div>
    )
}

export default ProjectSummery;