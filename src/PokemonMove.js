import React, { Component } from 'react'

class PokemonMove extends Component {
  constructor(props) {
    super(props)

    this.state = {
      move: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.number !== this.props.match.params.number) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/move/${params.number}/`)
      .then(response => response.json())
      .then(move => this.setState({ move }))
  }

  render() {
    const { move } = this.state

    return (
      <div className="PokemonMove">
        <h2> {(move.names === undefined ? null : move.names[2].name)} </h2>
        <p> {(move.flavor_text_entries === undefined ? null : move.flavor_text_entries[2].flavor_text)} </p>
        <span>
            {(move.power !== '' ? (null) : (`Power: ${move.power}`))} 
            PP: {move.pp}
        </span>
      </div>
    )
  }
}

export default PokemonMove   