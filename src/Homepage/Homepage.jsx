import React from 'react'
import Template from '../Template/Template'
import './Homepage.css';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    return (
        <>
            <Template title="PURDUE FORT WAYNE" />
            <div className='home-container'>
                <div className="text-class">
                    <h3>Welcome</h3>
                    <h2>Experiment name..</h2>
                    <p>Description</p>
                </div>
                <div className="image-class">
                    <img height="250" width="250" src="src/assets/images/imageone.jpg" />
                </div>
            </div>
            <div className='btn-container'>
                <Button variant="outline-dark">Read more</Button>
                <Button variant="dark">Take test</Button>
            </div>
        </>
    )
}

export default Homepage