import React from 'react'
import Template from '../Template/Template'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import './Screenone.css'

const Team = () => {
    return (
        <>
            <Template title="<< TEAM TEXT >>" />
            <div className="screenone-content">
                <div className="screenone-container">
                    <p style={{ marginTop: '5rem', marginBottom: '6rem', fontSize: '20px' }}>{`YOU and PLAYER 23423`}</p>
                    <img style={{ marginRight: '15rem', border: '1px solid black' }} height="200" width="200" alt='human icon image' src="src/assets/images/humanicon.jpg" />
                    <img style={{ border: '1px solid black' }} height="200" width="200" alt='human icon image' src="src/assets/images/humanicon.jpg" />
                    <p style={{ marginTop: '5rem' }} >{`<< INFO TEXT >>`}</p>
                </div>
                <div className="btn-container">
                    <Link to="/game" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </>
    )
}

export default Team