import React, { useState } from 'react'
import './Gameone.css'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import Template from '../Template/Template'
import Button from 'react-bootstrap/Button';
import './Gameone.css';
import Gametwo from '../Gametwo/Gametwo';

const lettersList = ['M', 'A', 'E', 'P', 'L', 'F', 'O'];

export const Question = () => {
    return (
        <div className="ques-container">
            <p className="ques-text">{`Question text goes here. <<Anagram>>`}</p>
        </div>
    )
}

export const Answer = () => {
    return (
        <div className="ans-container">
            <textarea className="gameone-anstext" placeholder="eg. text"></textarea>
        </div>
    )
}

export const Letters = (letter) => {
    return (
        <div className="letter">
            {letter.letter}
        </div>
    )
}

export const ErrorText = () => {
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
                    {/* <Question />
                    {isError ? <ErrorText /> : ''}
                    <div className="letters-class">
                        {lettersList.map((letter) => (
                            <Letters letter={letter} />
                        ))}
                    </div>
                    <Answer />
                    <Button variant="dark" onClick={() => handleClick()}>Check</Button> */}

                    <Gametwo />

                </div>
                <div className="gameone-btn">
                    <Link to="/taskfailed" className="gamebtn-text">End game</Link>
                </div>
            </div>
        </>
    )
}

export default Gameone