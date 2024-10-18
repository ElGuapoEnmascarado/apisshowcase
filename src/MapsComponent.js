'use client';

import React, { useState, useEffect } from 'react';

function MapsComponent() {
    const [location, setLocation] = useState(null);
    const [query, setQuery] = useState('New York');
    const [error, setError] = useState(null);
    const accessToken = 'TU_MAPBOX_ACCESS_TOKEN'; // Reemplaza con tu token de acceso de Mapbox

    useEffect(() => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => setLocation(data.features[0]))
            .catch(error => setError(error));
    }, [query]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Ubicación: {query}</h1>
            {location ? (
                <div>
                    <p>Coordenadas: {location.center[1]}, {location.center[0]}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Introduce una ubicación"
            />
        </div>
    );
}

export default MapsComponent;
