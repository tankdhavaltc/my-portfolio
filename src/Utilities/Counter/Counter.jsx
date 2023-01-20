import React from 'react'
import CountUp from 'react-countup';
import "./style.css";

const Counter = ({ count, duration, title }) => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className="counter-value">
                <CountUp
                    duration={duration}
                    end={count}
                />
            </div>
            <div className='counter-name'>
                {title}
            </div>
        </div>
    )
}

export default Counter