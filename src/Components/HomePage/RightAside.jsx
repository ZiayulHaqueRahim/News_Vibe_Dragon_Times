import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-9'>
            <SocialLogin />
            <FindUs />
            <QZone />
        </div>
    );
};

export default RightAside;