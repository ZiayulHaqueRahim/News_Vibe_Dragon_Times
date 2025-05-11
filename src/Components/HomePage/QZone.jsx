import React from 'react';
import  swimmingImage from "../../assets/swimming.png";
import playImage from "../../assets/playground.png";
import classImage from "../../assets/class.png";

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className="py-2">
                <img src={swimmingImage}  />
                <img src={playImage}  />
                <img src={classImage}  />
            </div>
        </div>
    );
};

export default QZone;