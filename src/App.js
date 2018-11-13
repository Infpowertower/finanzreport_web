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
  constructor(props) {
    super(props);
    this.state = {
      panels: [{title: 'Aktueller Stand:', value: 1000.34},
      {title: 'Guthaben', value: 1000.34},
      {title: 'Ersparnisse', value: 10000.39},
      {title: 'Bilanz aktueller Monat', value: -234.23}]
    }
    this.deletePanel = this.deletePanel.bind(this);
  }

  deletePanel(id) {
    let newPanels = this.state.panels;
    newPanels.splice(id, 1);
    console.log(newPanels);
    this.setState = {panels: newPanels};
  }

  render() {
    return(
      <div className="Showroom">
        <Dashboard
          panels= {this.state.panels}
          deletePanel = {this.deletePanel}
        />
        <ButtonBar />
      </div>
    );
  }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.makePanels = this.makePanels.bind(this);
    }

    makePanels() {
      if (this.props.panels) {
        return(this.props.panels.map((panel, i) =>
          <Panel id={i} title={panel.title} value={panel.value} key={i} deletePanel={this.props.deletePanel} />
        ));
      }
    }



    render() {
        return (
            <section className='Dashboard'>
                {this.makePanels()}
            </section>
        )
    }
}

class Panel extends Component {
    constructor(props) {
      super(props);
      this.state={background: 'white'};
      this.changeColor = this.changeColor.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    changeColor() {
      const newColor = this.state.background === 'white' ? 'grey' : 'white';
      this.setState({background: newColor});
    }

    handleClick(e) {
      this.props.deletePanel(this.props.id);
    }

    render() {
        return (
            <div style={{background: this.state.background}} className='Panel'>
                <button className="Close" onClick={this.handleClick}>X</button>
                <h3>{this.props.title}</h3>
                <h1>{this.props.value}</h1>
                <h3>{this.props.id}</h3>
            </div>
        )
    }
}

class Overwatch extends Component {
  render() {
    return(
      <section className='Dashboard'>
        <h1>Overwatch aktiviert!</h1>
      </section>

    );
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
