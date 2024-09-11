import './styles.css';
import React from 'react';

export default function Card({ data }) {
    const { type, joke, setup, delivery } = data;
    const isSingle = type === 'single';
    const isTwoPart = type === 'twopart';

    return (
        <div className='container'>
        <h1 className='titulo'> Piadas </h1>
        <div className='card joke'>
            <div className='joke-content'>
                {isSingle ? (
                    <p>{joke}</p>
                ) : isTwoPart ? (
                    <div>
                        <p>{setup}</p>
                        <p><strong>{delivery}</strong></p>
                    </div>
                ) : (
                    <p>Tipo de piada desconhecido: {type}</p>
                )}
            </div>
        </div>
        </div>
    );
}
