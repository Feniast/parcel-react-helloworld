import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import anime from 'animejs';

import './HelloWorld.scss';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.text = 'Hello World';
  }

  render() {
    return (
      <div className="hello-world">
        <ReactTransitionGroup component="div">
          <HelloWorldInner text={this.text}></HelloWorldInner>
        </ReactTransitionGroup>
      </div>
    );
  }
}

class HelloWorldInner extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillAppear(callback) {
    this.animateIn(callback);
  }

  componentDidAppear() {
  }

  componentWillEnter(callback) {
    this.animateIn(callback);
  }

  componentDidEnter() {
  }

  componentWillLeave(callback) {
    callback();
  }

  componentDidLeave() {
  }

  animateIn(callback) {
    const letters = this.container.querySelectorAll('.hello-world-letter');
    anime({
      targets: letters,
      duration: 800,
      opacity: [0, 1],
      translateY: [-30, 0],
      delay: (el, i, l) => {
        return i * 100;
      },
      easing: 'easeOutQuad',
      complete: () => {
        callback();
      }
    });
  }

  render() {
    const text = this.props.text || '';
    return (
      <div className="hello-world-inner" ref={e => {this.container = e;}}>
        {text.split('').map((c, i) => {
          c = c === ' ' ? '\u00A0' : c;
          return (
            <span className={"hello-world-letter"} key={i}>{c}</span>
          )
        })}
      </div>
    );
  }

}

export default HelloWorld;