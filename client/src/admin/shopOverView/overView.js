import React from 'react';
import './overView.css';
import main from './main.PNG';

function overView() {
    return (
        <div className='overView'>
            <h1>Shop Overview</h1>
            <img src={main} alt="summary"/>
        </div>
    );
}

export default overView;