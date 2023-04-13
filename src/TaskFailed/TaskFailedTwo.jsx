import React from 'react'
import Template from '../Template/Template'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import './TaskFailed.css'
import { Letters } from '../Gameone/Gameone';

const lettersList = ['T', 'S', 'M', 'I', 'Y', 'N', 'H'];
const resultsLetters = ['H', 'Y', 'M', 'N', 'I', 'S', 'T'];

const TaskFailedTwo = () => {
    return (
        <>
            <Template title="GAME ONE TITLE" />
            <div className="taskfailed-content">
                <div className="taskfailed-container">
                    <p style={{ marginTop: '3rem', fontSize: '32px' }}>TASK FAILED!</p>
                    <p style={{ marginTop: '2rem', marginBottom: '5rem', fontSize: '20px' }}>PLAYER TWO'S RESULT</p>
                    <div className="letters-class">
                        {lettersList.map((letter) => (
                            <Letters letter={letter} />
                        ))}
                    </div>
                    <p style={{ marginTop: '8rem', fontSize: '32px', fontWeight: 'bolder' }}>HYMNIST</p>
                </div>
                <div className="btn-container">
                    <Link to="/" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </>
    )
}

export default TaskFailedTwo