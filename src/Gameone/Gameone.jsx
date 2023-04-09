import React, { useState } from 'react'
import './Gameone.css'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import Template from '../Template/Template'
import Button from 'react-bootstrap/Button';
import './Gameone.css';

const lettersList = ['M', 'A', 'E', 'P', 'L', 'F', 'O'];

const Question = () => {
    return (
        <div className="ques-container">
            <p className="ques-text">{`Question text goes here. <<Anagram>>`}</p>
        </div>
    )
}

const Answer = () => {
    return (
        <div className="ans-container">
            <textarea className="gameone-anstext" placeholder="eg. text"></textarea>
        </div>
    )
}

const Letters = (letter) => {
    return (
        <div className="letter">
            {letter.letter}
        </div>
    )
}

const ErrorText = () => {
    return (
        <p className="error-txt">Wrong! Please try again!!</p>
    )
}

const Gameone = () => {
    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        setIsError(true);
    }

    return (
        <>
            <Template title="GAME ONE TITLE" />
            <div className="gameone-content">
                <div className="gameone-container">
                    <Question />
                    {isError ? <ErrorText /> : ''}
                    <div className="letters-class">
                        {lettersList.map((letter) => (
                            <Letters letter={letter} />
                        ))}
                    </div>
                    <Answer />
                    <Button variant="dark" onClick={() => handleClick()}>Check</Button>
                </div>
                <div className="btn-container">
                    <Link to="/" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </>
    )
}

export default Gameone