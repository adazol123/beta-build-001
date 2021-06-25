import { icons_1 as icons, icons_2 as iconss} from './tech-icons'



const TechStackSection = () => {
    return (
        <section className='section tech-section'>
            <h2>Tech Stack</h2>
            <div className="logos-container">
                <div className="logo-slider">
                    <div className="logo-slide">
                        {icons.map((icon, index)  => (<img key={index} src={icon} alt={icon}/>))}
                    </div>
                    <div className="logo-slide">
                        {icons.map((icon, index)  => (<img key={index} src={icon} alt={icon}/>))}
                    </div>
                </div>
            </div>
            <div className="logos-container">
                <div className="logo-slider">
                    <div className="logo-slide below">
                        {iconss.map((icon, index)  => (<img  key={index} src={icon} alt={icon} />))}
                    </div>
                    <div className="logo-slide below">
                        {iconss.map((icon, index)  => (<img  key={index} src={icon} alt={icon} />))}
                    </div>

                </div>
            </div>
            <div className="tech-sub-container">
                <div className="tech-carousel">
                    
                </div>
            </div>

        </section>
    )
}

export default TechStackSection
