import React, { Component } from 'react';
import FlipCard from 'react-flipcard-2';

class FlipCardComponent extends Component {
  state = {
    isFlipped: false
  }

  showBack = () => {
    this.setState({
      isFlipped: true
    });
  }

  showFront = () => {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip = (flipped) => {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown = (e) => {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

  render() {
    return (
      {/* Default behavior is horizontal flip on hover, or focus */ }
      <FlipCard>
        {this.props.children}
      </FlipCard>

      {/* The `type` attribute allows using a vertical flip */ }
    {/* <FlipCard type="vertical">
          <div>
            <div>Front</div>
            <div><small>(vertical flip)</small></div>
          </div>
          <div>Back</div>
        </FlipCard> */}

    {/*
          The `disabled` attribute allows turning off the auto-flip
          on hover, or focus. This allows manual control over flipping.
 
          The `flipped` attribute indicates whether to show the front,
          or the back, with `true` meaning show the back.
        */}
    {/* <FlipCard
          disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        >
          <div>
            <div>Front</div>
            <button type="button" onClick={this.showBack}>Show back</button>
            <div><small>(manual flip)</small></div>
          </div>
          <div>
            <div>Back</div>
            <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
          </div>
        </FlipCard> */}
    );
  }
};

export default FlipCardComponent;
