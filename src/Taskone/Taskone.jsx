import React from 'react'
import Template from '../Template/Template'
import './Taskone.css'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';

const QuestionAnswer = () => {
    return (
        <div className="ques-container">
            <p className="ques-text">Question text goes here.</p>
            <textarea className="ans-text" placeholder="eg. text"></textarea>
        </div>
    )
}

const Taskone = () => {
    return (
        <>
            <Template title="TASK ONE TITLE" />
            <div className="taskone-content">
                <div className="taskone-container">
                    <QuestionAnswer />
                    <QuestionAnswer />
                </div>
                <div className="btn-container">
                    <Link to="/oneplayer" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </>
    )
}

export default Taskone