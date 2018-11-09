import React, { Component } from 'react';
import './App.css';



class NavBar extends Component {
    render() {
        return (
            <section className='NavBar'>
                <h1>Finanzreport</h1>
            </section>
        )
    }
}

class Dashboard extends Component {
    render() {
        return (
            <section className='Dashboard'>
                <Panel title={'Aktueller Stand:'} value={1000.34} />
                <Panel title={'Guthaben'} value={1000.34} />
                <Panel title={'Ersparnisse'} value={10000.39} />
                <Panel title={'Bilanz aktueller Monat'} value={-234.23}/>
                <Panel />
                <Panel />


            </section>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <section className='Menu'>
                <MenuButton name={'Dashboard'}/>
                <MenuButton name={'Übersicht'}/>
                <MenuButton name={'Konto1'} />
                <MenuButton name={'Konto2'} />
                <MenuButton name={'Konto3'} />


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
        return (
            <div className="App">
                <NavBar />
                <Menu />
                {//toDo}
                }
                {//{this.state.location} === 1 ? <Dashboard/>: <div className='Dashboard'><h1>This works!</h1></div>
                }
                <Dashboard />
                <ButtonBar />
            </div>
        );
    }
}

export default App;
