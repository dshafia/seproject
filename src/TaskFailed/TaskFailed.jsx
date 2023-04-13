import React from 'react'
import Template from '../Template/Template'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import './TaskFailed.css'

const TaskFailed = () => {
    return (
        <>
            <Template title="GAME ONE TITLE" />
            <div className="taskfailed-content">
                <div className="taskfailed-container">
                    <p className="taskfailed-text">TASK FAILED!</p>
                    <p style={{ marginTop: '10rem', fontSize: '20px' }}>{`<< MORE TEXT >>`}</p>
                </div>
                <div className="btn-container">
                    <Link to="/taskfailedtwo" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </>
    )
}

export default TaskFailed