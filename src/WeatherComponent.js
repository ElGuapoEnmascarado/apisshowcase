'use client';

import React, { useState, useEffect } from 'react';

function WeatherComponent() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('London');
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de API real de OpenWeatherMap

        // Verifica que la clave de la API no sea nula o vacía
        if (!apiKey) {
            setError('API key no proporcionada');
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del clima');
                }
                return response.json();
            })
            .then(data => {
                setWeather(data);
                setError(null); // Limpiar cualquier error previo
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('No se pudieron obtener los datos del clima');
            });
    }, [city]);

    return (
        <div>
            <h2>WeatherComponent</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : weather ? (
                <div>
                    <h3>Clima en {city}</h3>
                    <p>Temperatura: {weather.main?.temp ?? 'No disponible'}°C</p>
                    <p>Condición: {weather.weather?.[0]?.description ?? 'No disponible'}</p>
                </div>
            ) : (
                <p>Cargando información del clima...</p>
            )}
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Introduce una ciudad"
            />
        </div>
    );
}

export default WeatherComponent;

