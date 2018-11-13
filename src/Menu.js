import React, { Component } from 'react';
import './Menu.css';

export class Menu extends Component {
    constructor(props) {
      super(props);
      this.createButtons = this.createButtons.bind(this);
    };

    createButtons() {
        return (this.props.items.map((item, i) =>
          <MenuButton name={item[0]} key={i} />))
    };


    render() {
        return (
            <section className='Menu'>
                {this.createButtons()}
            </section>
        )
    }
}

class MenuButton extends Component {
    render() {
        return (
            <button className='MenuButton'>{this.props.name}</button>
        )
    }
}
