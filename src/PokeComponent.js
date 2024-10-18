'use client';

import React, { useState, useEffect } from 'react';

function PokeComponent() {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonId, setPokemonId] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del Pokémon');
                }
                return response.json();
            })
            .then(data => {
                setPokemon(data);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('No se pudo obtener los datos del Pokémon');
            });
    }, [pokemonId]);

    return (
        <div className="container">
            <h2>PokeComponent</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : pokemon ? (
                <div>
                    <h3>{pokemon.name}</h3>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="pokemon-image"
                    />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                </div>
            ) : (
                <p>Cargando Pokémon...</p>
            )}
            <input
                type="number"
                value={pokemonId}
                onChange={(e) => setPokemonId(e.target.value)}
                placeholder="Introduce el ID del Pokémon"
                min="1"
            />
        </div>
    );
}

export default PokeComponent;
