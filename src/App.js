import React, { Component } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleColorSelection = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { isOpen, selectedColor } = this.state;

    return (
      <div className="App">
        <div className="color-picker">
          <button onClick={this.toggleColorList}>
            {selectedColor ? `Selected: ${selectedColor}` : 'Pick a color'}
          </button>
          {isOpen && (
            <div className="color-list">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-square"
                  style={{ background: color }} // Set the background color
                  onClick={() => this.handleColorSelection(color)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
