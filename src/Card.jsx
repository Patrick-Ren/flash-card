import React, { useState, useEffect} from 'react'
import './Card.scss'

export default function Card( {word, answer} ) {
    const [flipped, setFlipped] = useState(false)
    useEffect(() => {
        setFlipped(false)
    }, [word]) //everytime word changes, show front side
    return (
        <div 
            className="card" 
            style={{ transform: flipped ? "rotateX(180deg)" : "none"}}
        >
            <div className="front" onClick={() => setFlipped(true)}>{word}</div>
            <div className="back" onClick={() => setFlipped(false)}>{answer}</div>
        </div>
    )
}