import React from 'react'

const ProjectDetails = (props) => {
    let id = props.match.params.id;
    return (
        <div className="container well well-lg">
            <h3>Project Title - {id}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr />
            <p>Posted By: Bhakta Dash</p>
            <p>Created On sept-3-2019</p>
        </div>
    )
}

export default ProjectDetails;
