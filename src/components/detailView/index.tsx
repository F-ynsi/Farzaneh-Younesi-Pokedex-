import React from 'react'
import { Pokemon } from '../../types/pokemonSchemas'
import './detailView.css'

const DetailView = ({ pokemon}:{ pokemon: Pokemon }) => {
    const { id, name, abilities } = pokemon
    return (
        <section className="detail-view">
            <img src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} className="sprite-image" alt="sprite"/>
            <div className="data-wrapper">
                <h1 className="data-name">ID: {id} {name}</h1>
                <p className="data-char">Type: {name} </p>
                <p className="data-char">Height: {name} </p>
                <p className="data-char">Weight: {name} </p>
            </div>
        </section>
    )
}

export default DetailView