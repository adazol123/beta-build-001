import { icons_1 as icons, icons_2 as iconss} from './tech-icons'



const TechStackSection = () => {
    return (
        <section className='section tech-section'>
            <h2>Tech Stack</h2>
            <div className="logos-container">
                <div className="logo-slider">
                    <div className="logo-slide">
                        {icons.map((icon, index)  => (
                        <div key={index} style={{ 
                            backgroundImage: `url(/assets/svg/tech-logos/logo-${index + 1}.svg) `,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        ,
                        }} alt={icon}/>
                        ))}
                    </div>
                    <div className="logo-slide">
                        {icons.map((icon, index)  => (
                        <div key={index} style={{ 
                            backgroundImage: `url(/assets/svg/tech-logos/logo-${index + 1}.svg) `,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        ,
                        }} alt={icon}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="logos-container">
                <div className="logo-slider">
                    <div className="logo-slide below">
                        {iconss.map((icon, index)  => (
                        <div key={index} style={{ 
                            backgroundImage: `url(/assets/svg/tech-logos/logo-0${index + 1}.svg)`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }} alt={icon}/>
                    
                        ))}
                    </div>
                    <div className="logo-slide below">
                        {iconss.map((icon, index)  => (
                        <div key={index} style={{ 
                            backgroundImage: `url(/assets/svg/tech-logos/logo-0${index + 1}.svg)`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }} alt={icon}/>
                        ))}
                    </div>

                </div>
            </div>
            <div className="tech-sub-container">
                <div className="tech-carousel">
                    <h4>Page is currently on <br /> building phase <br />  </h4>
                    <p>🔨</p>
                </div>
            </div>

        </section>
    )
}

export default TechStackSection
