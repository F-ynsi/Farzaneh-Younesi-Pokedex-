import React from 'react'
import { Pokemon } from '../../types/pokemonSchemas'
import Modal from 'react-modal'
import { getPokeName } from '../util'
import { MODAL_CUSTOM_STYLE } from '../constants'

const DetailView = ({ pokemon }:{ pokemon: Pokemon }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const { id, name, abilities, types, order, stats, moves } = pokemon
    const abilityNames = abilities.map((ability) => ability.ability.name )
    const typeNames = types.map((type) => type.type.name )
    const statNames = stats.map((stat) => stat.stat.name )
    const moveNames = moves.map((move) => move.move.name )
    
    const openModal= () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <img src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${getPokeName(name)}.gif`} className="w-25 h-25" alt="sprite"/>
            <p>{name} </p>
            <div>
                <p><b>ID</b>: {id}</p>
                <p><b>Type</b>: {typeNames.join(" | ")} </p>
                <p><b>Order-number</b>: {order} </p>
            </div>
            <div>
                <button type="submit" onClick ={openModal} className="btn btn-outline-dark btn-lg btn-block">More about me!</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={MODAL_CUSTOM_STYLE}
                >
                    <div>
                        <div className="d-flex flex-column align-items-center">
                            <img src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${getPokeName(name)}.gif`} className="w-25 h-25" alt="sprite"/>
                            <h6 className="p-3">#{name}</h6>
                        </div>
                        <div className="d-flex flex-column align-items-center p-3">
                            <h3>Abilities</h3>
                            <p> {abilityNames.join(" | ")} </p>
                            <h3>Stats</h3>
                            <p> {statNames.join(" | ")} </p>
                            <h3>Evolutions</h3>
                            <p> no evolution found! </p>
                            <h3>Moves</h3>
                            <p> {moveNames.join(" | ")} </p>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default DetailView