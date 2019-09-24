import React, {useState} from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './CardSlider.scss'

export default function CardSlider({words}) {
    const [curIndex, setCurIndex] = useState(0)
    const prev = () => {
        if (curIndex === 0)
            return
        setCurIndex(prevIndex => prevIndex - 1)
    }

    const next = () => {
        if (curIndex === words.length - 1)
            return
        setCurIndex(prevIndex => prevIndex + 1)
    }

    return (
        <div className="container">
            <Card word={words[curIndex].word} answer={words[curIndex].answer}  />
            
            <div className="pagination">
                <span className="prev" onClick={prev} style={{
                    color: curIndex === 0 ? "silver" : "black"
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                    {curIndex + 1} / {words.length}
                <span className="next" onClick={next} style={{
                    color: curIndex === words.length - 1 ? "silver" : "black"
                }}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </div>
    )
}
