import React, { Component } from 'react';
import './sass/main.scss';

class App extends Component {
    render() {
        return (
        <div className="content">
            <header className="header">
                <h1>Am I doing a thing</h1>
            </header>
            <main>
                <section className="section-weather-today">
                    <p>Component holding the weather data for today will go here</p>
                </section>
                <section className="section-weather-week">
                    <p>Component holding the weather data for the week will go here.</p>
                </section>
            </main>
        </div>
        )
    }
}

export default App;