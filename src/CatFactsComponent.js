'use client';

import React, { useState, useEffect } from 'react';

function CatFactsComponent() {
    const [fact, setFact] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener el dato curioso');
                }
                return response.json();
            })
            .then(data => {
                setFact(data.fact);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('No se pudo obtener el dato curioso');
            });
    }, []);

    return (
        <div className="container">
            <h2>Cat Facts Component</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : fact ? (
                <p>Dato curioso: {fact}</p>
            ) : (
                <p>Cargando dato curioso...</p>
            )}
        </div>
    );
}

export default CatFactsComponent;
