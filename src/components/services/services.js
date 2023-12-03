import styles from './services.module.css';

const Services = () => {
    return (
       <div className="container">
            <h1 id="services" className="title">Our Services</h1>       
            
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/a94a7692-0504-4add-9969-af68739a0466/services_01169.jpg" className={styles.servicesImage} alt="Material Supply"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Material Supply</h2>
                        <p className={styles.serviceText}>
                            In our workspace you can find a variety of acrylic samples in various colors, textures and thicknesses, that you
                            can purchase retail in your desired dimensions or choose to work with for custom-made constructions. Also,
                            materials like soft wood or aluminum sheets can be ordered on demand to be processed with our studio’s
                            equipment.
                        </p>  
                    </div>
                </div>
                
                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/1d760fb1-4570-45d9-9439-5f94a6257709/services_02169.jpg" className={styles.servicesImage} alt="Precision cutting & engraving"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Precision cutting & engraving</h2>
                        <p className={styles.serviceText}>
                            Our Laser Cutter can perform precision cutting and engraving on a variety of materials:
                            acrylic and other plastics, plywood, MDF, cardboard, paper. The digital design is directly
                            transferred with accuracy on the chosen surface through the computer’s software.
                        </p>                                 
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/2fa15d3d-6209-4199-97fc-32e17f58cd4c/services_03169.jpg" className={styles.servicesImage} alt="Custom fabrication"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Custom fabrication</h2>
                        <p className={styles.serviceText}>
                            To fabricate your desired construction we can cut, bolt, screw, bend acrylic pieces using
                            heat, combine them with acrylic glue leaving seamless joints, and most importantly find
                            structural solutions that meet your individual needs.
                        </p>                                 
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/6bed1714-b4f6-4c55-8fde-25b5d176b737/services_04169.jpg" className={styles.servicesImage} alt="Product & Graphic Design"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Product & Graphic Design</h2>
                        <p className={styles.serviceText}>
                            Our in-house designer prepares your existing digital or physical designs for high quality print
                            and structural results, both aesthetically and in terms of durability. In case you only have a
                            rough idea of what you need, we offer product/graphic design services to help you visualize
                            the outcome through implementation drawings, mockups and models before realizing it.
                        </p>                                 
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/045e7289-168a-4e72-8982-96b544e35658/services_05169.jpg" className={styles.servicesImage} alt="Multi-surface digital printing"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Multi-surface digital printing</h2>
                        <p className={styles.serviceText}>
                            Through our UV-flatbed digital printer you can apply a graphic visual of your choice on
                            almost any smooth surface from a vast range of materials. The specially formulated inks of
                            the printer are instantly cured on the selected surface using UV lamps.
                        </p>                                 
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <img src="https://ucarecdn.com/892eccb9-d697-4930-b69e-48b2f1ada405/services_06169.jpg" className={styles.servicesImage} alt="Surface processing"/>
                    
                    <div>
                        <h2 className={styles.serviceTitle}>Surface processing</h2>
                        <p className={styles.serviceText}>
                            Complementary to our custom fabrication services is the ability to process acrylic or other
                            material surfaces through sandblasting and polishing equipment, in order to reach the
                            intended texture for your design.
                        </p>                                 
                    </div>
                </div>
            </div>
            
           

       </div>
       
    )
}

export default Services;