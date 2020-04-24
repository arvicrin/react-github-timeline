import React from 'react';
import Form from "./components/Form"

class App extends React.Component {
  state = {
    repositories: undefined,
    error: undefined
  }
  getRepo = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    if (username) {
      const api_call = await fetch(`https://api.github.com/users/${username}/repos?type=public`);
      const data = await api_call.json();
      let repositories = data.map(repo => {
        let repos = {
          repository_name: undefined,
          description: undefined,
          created_at: undefined,
        }
        repos.repository_name = repo.name
        repos.description = repo.description
        repos.created_at = repo.created_at
        return repos;
      });
      this.setState({
        repositories: repositories,
        error: ""
      });
    } else {
      this.setState({
        repositories: undefined,
        error: "Please enter the username"
      });
    }

  }
  render() {
    return (
      <div>
        <div>
          <Form getRepo={this.getRepo} error={this.state.error} />
        </div>
      </div>
    )
  }
}


export default App;
