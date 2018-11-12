import React, { Component } from 'react';
import './App.css';
import { Menu } from './Menu';


class NavBar extends Component {
    render() {
        return (
            <section className='NavBar'>
                <h1>Finanzreport</h1>
            </section>
        )
    }
}

class Showroom extends Component {
  render() {
    return(
      <div className="Showroom">
        <Dashboard
          panels={
            [{title: 'Aktueller Stand:', value: 1000.34},
            {title: 'Guthaben', value: 1000.34},
            {title: 'Ersparnisse', value: 10000.39},
            {title: 'Bilanz aktueller Monat', value: -234.23}]
          }
        />
        <ButtonBar />
      </div>
    );
  }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.initPanels = this.initPanels.bind(this);
        this.state = {
          panels: this.props.panels,
        };
    }

    initPanels() {
      if (this.state.panels) {
        return(this.state.panels.map(panel =>
          <Panel title={panel.title} value={panel.value} />
        ));
      }
    }

    render() {
        return (
            <section className='Dashboard'>
                {this.initPanels()}
            </section>
        )
    }
}

class Panel extends Component {
    render() {
        return (
            <div className='Panel'>
                <h3>{this.props.title}</h3>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

class ButtonBar extends Component {
    render() {
        return (
            <div className='ButtonBar'>
                <BottomButton name={'Neu'}/>
            </div>
        )
    }
}

class BottomButton extends Component {
    render() {
        return (
            <button className='BottomButton'>{this.props.name}</button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 0, //Dashboard = 0
        };
    }

    render() {
        let location;
        if (this.state.location === 0) {
          location = <Dashboard />;
        }
        return (
            <div className="App">
                <NavBar />
                <Menu items={[['Dashboard', '/path'], ['Übersicht', '/path'], ['Konto', '/path']]}/>
                <Showroom location={this.location}/>
            </div>
        );
    }
}

export default App;
