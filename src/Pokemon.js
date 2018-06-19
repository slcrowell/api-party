import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Github.css';
import PokemonMove from './PokemonMove.js';

class Pokemon extends Component {
    state = {
        number: '',
    }

    handleChange = (ev) => {
        this.setState({number: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.history.push(`/pokemon/${this.state.number}`);
    }

    render() {
        return (
            <div className="Github">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                    alt="pokemon"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='number' placeholder='Enter a number' value={this.state.number} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type='submit'>Look up a move</button>
                    </div>
                </form>
            
                <Route path="/pokemon/:number" component={PokemonMove} />
            </div>
        )
    }
}

export default Pokemon