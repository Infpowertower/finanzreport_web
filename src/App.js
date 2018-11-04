import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Menu />
        <Dashboard />
        <ButtonBar />
      </div>
    );
  }
}

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <span><h1>Finanzreport</h1></span>
            </div>
        )
    }
}

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <Panel title={'Aktueller Stand:'} value={1000.34} />
                <Panel title={'Guthaben'} value={1000.34} />
                <Panel title={'Ersparnisse'} value={10000.39} />
                <Panel title={'Bilanz aktueller Monat'} value={-234.23}/>
            </div>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <MenuButton name={'Dashboard'}/>
                <MenuButton name={'Übersicht'}/>
                <MenuButton name={'Konto1'} />
                <MenuButton name={'Konto2'} />
                <MenuButton name={'Konto3'} />


            </div>
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

            </div>
        )
    }
}

export default App;
