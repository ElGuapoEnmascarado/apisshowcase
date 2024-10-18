'use client';

import React, { useState, useEffect } from 'react';

function CountryComponent() {
    const [country, setCountry] = useState(null);
    const [query, setQuery] = useState('France');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del país');
                }
                return response.json();
            })
            .then(data => {
                setCountry(data[0]);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('No se pudo obtener los datos del país');
            });
    }, [query]);

    return (
        <div className="container">
            <h2>CountryComponent</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : country ? (
                <div>
                    <h3>País: {country.name.common}</h3>
                    <p>Capital: {country.capital?.[0] ?? 'No disponible'}</p>
                    <p>Región: {country.region}</p>
                    <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} width="100" />
                </div>
            ) : (
                <p>Cargando datos del país...</p>
            )}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Introduce el nombre de un país"
            />
        </div>
    );
}

export default CountryComponent;
