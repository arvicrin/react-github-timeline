import React from 'react';
import Form from "./components/Form";
import Repos from "./components/Repos";
import './App.css';

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
        return {
          repository_name: repo.name,
          description: repo.description,
          created_at: new Date(repo.created_at)
        };
      });

      repositories.sort((a,b) => a.created_at - b.created_at);
      repositories.forEach(element => {
        element.created_at = element.created_at.toString();
      });

      this.setState({
        repositories: repositories.reverse(),
        error: ""
      });
    } else {
      this.setState({
        repositories: undefined,
        error: "Please enter the username"
      });
    }
  console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="Form_style">
          <Form getRepo={this.getRepo} error={this.state.error} />
        </div>
        <div>
          <Repos repositories={this.state.repositories} error={this.state.error} />
        </div>
      </div>
    )
  }
}


export default App;
