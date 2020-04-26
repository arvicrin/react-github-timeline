import React from "react";

const Repos = props => {
    return (
        <div className="Repos_style">
            {
                props.repositories && props.repositories.map((repo , i) =>
                     <p key={i}>
                         Repository name: {repo.repository_name}<br />
                         Description: {repo.description}<br />
                         Created at: {repo.created_at}<br />
                    </p>
                )
            }
            {
                props.error && <p>
                    {props.error}
                </p>
            }
        </div>
    );
}

export default Repos;