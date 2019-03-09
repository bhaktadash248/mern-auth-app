import React from "react";
import ProjectSummery from "../project/ProjectSummery";

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects && projects.map(project => {
                return (
                    <ProjectSummery project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;