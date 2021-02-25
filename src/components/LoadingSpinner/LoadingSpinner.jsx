import React from 'react'
import Lottie from 'react-lottie'
import * as loading from './loading.json'
// Styling
import './LoadingSpinner.scss'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner-container'>
            <Lottie className='loading-spinner' options={defaultOptions} height={250} width={250} />
        </div>
    )
}

export default LoadingSpinner
