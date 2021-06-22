import React from 'react'
import { Frame, useMotionValue } from 'framer'


const LazyFrame = ({ children, setToggleMenu }) => {
    const y = useMotionValue(0)

    return (
        <Frame
            height={'100%'} width={'100%'}
            className='container-md'
            background={'transparent'}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0}}
            y={ y }
            style={{
            top: 0,
            zIndex: 9997,
            position: 'relative',
            display: 'flex',
            flexDirection:'column',
            }}
        
            onDragEnd={function() {
            if(y.get() > 30) {setToggleMenu(false)}
            else if (y.get() < -50) setToggleMenu(true)
            }}
        >
            {children}
        </Frame>
    )
}

export default LazyFrame
