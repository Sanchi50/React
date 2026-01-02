import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { theme: "light" };

    // IMPORTANT: manual binding
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  }

  render() {
    return (
      <div className={this.state.theme}>
        <button onClick={this.toggleTheme}>
          {this.state.theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>

        <h2>Why We Explore - NASA</h2>

        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1671686299/launch-pad-67650_1920_p6izup.jpg"
          alt="space shuttle"
        />

        <p>
          Humans are driven to explore the unknown, discover new worlds, push
          the boundaries of our scientific and technical limits, and then push
          further.
        </p>
      </div>
    );
  }
}

export default App;
