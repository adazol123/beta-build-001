import React from 'react'
import PropTypes from 'prop-types'
import { penta } from '../asset-icons'

const HomeSection = props => {
    return (
        <section className='sub-hero-section'>
            <div className='sub-hero-first'>
                <h2>We help  design <br /> your brand</h2>
                <p>Your success is our objective. We&lsquo;ll care for your brand, product and service as much as you do.</p>   
            </div>
            <div className='sub-hero-second'>
                <p>&quot;We cares much about the quality of design, user experience and overall aesthetics of every asset associated with your brand&quot;</p>
            
            </div>
            <div className='pentagon'>{penta}</div>
        </section>
    )
}

HomeSection.propTypes = {

}

export default HomeSection