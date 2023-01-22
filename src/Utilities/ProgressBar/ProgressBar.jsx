import React from 'react'
// import ProgressBar from 'react-animated-progress-bar';
import "./style.css";
import ProgressBar from '@ramonak/react-progress-bar';

const SkillProgressBar = ({ title, width }) => {
    return (
        <div className='progressbar'>
            <div className='d-flex justify-content-between progress-bar-label'>
                <span className='fw-bold'>{title}</span>
                <span className='fw-bold'>{`${width}%`}</span>
            </div>
            <ProgressBar
                className="progress-bar"
                animateOnRender={true}
                initCompletedOnAnimation={3}
                maxCompleted={100}
                completed={width}
                isLabelVisible={false}
                baseBgColor="#f3f3f3"
                bgColor="#34b7a7"
                width="500px"
                height="10px"
                borderRadius="0"
            />
        </div>
    )
}

export default SkillProgressBar;