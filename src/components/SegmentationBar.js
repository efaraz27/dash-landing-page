import React from 'react'
import '../styles/SegmentationBar.css'

function SegmentationBar() {
    return (
        <div className='segmentation-bar'>
            <div className='bar-1' style={{height: '30%'}}></div>
            <div className='bar-2' style={{height: '50%'}}></div>
            <div className='bar-3' style={{height: '70%'}}></div>
        </div>
    )
}

export default SegmentationBar
