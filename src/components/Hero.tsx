import image from "./images/JH_lifestyle_foto.jpg"
import ContactSVG from "./ContactSVG";

interface Props {
    summary: string[];
    links: string[][];
}

function Hero(props: Props){
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-5 py-5">
                <div className="col-lg-8">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">Joanna Hulek</h1>
                    <h2 className="line_text">Frontend Developer & Agile Practitioner</h2>
                    <h2 className="line_broken">Frontend Developer</h2>
                    <h2 className="line_broken">& Agile Practitioner</h2>
                    <section className="summary">
                        <p>
                            I'm addicted to dance and love being surrounded by plants and flowers. <br></br>
                            I enjoy creating responsive websites and clear, easy-to-maintain solutions.
                        </p>
                        <p>
                            Collaboration, knowledge sharing, and co-creating teams that <i>plays for one goal</i> are my passions. That's why the Agile mindset resonates so well with my own values
                        </p>
                    </section>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {ContactSVG(64)}
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-4">
                    <img src={image} className="d-block mx-lg-auto img-fluid d-none d-md-block" alt="Joanna Hulek" title="by Joanna Dzierzbicka Fotografia" width="100%"
                         loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Hero