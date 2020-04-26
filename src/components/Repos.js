import React from "react";

class Repos extends React.Component {
    position = undefined;
    left_right = (i) => {
        let position = "";
        if (i % 2 === 0) {
            position = "direction-r";
        }
        else {
            position = "direction-l";
        }
        this.position = position;
        console.log(position);
    }
    render() {
    return (
        <ul className="timeline">
            {
                this.props.repositories && this.props.repositories.map((repo , i) =>
                    <li key={i}>
                        {this.left_right(i)}
                        <div className={this.position}>
                            <div className="flag-wrapper">
                                <span className="flag">{repo.repository_name}</span>
                                <span className="time-wrapper"><span className="time">{repo.created_at}</span></span>
                            </div>
                            <div className="desc">{repo.description}</div>
                        </div>
                    </li>
                )
            }
            {
                this.props.error && <p>
                    {this.props.error}
                </p>
            }
            {
                !this.props.error && !this.props.repositories && <li>
                    Please write a user github name
                </li>
            }
        </ul>
    );
}
}
export default Repos;