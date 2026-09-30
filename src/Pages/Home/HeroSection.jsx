export default function HeroSection()
{
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Jack</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--colour">Front-End
                        <br /> Developer
                        </span>{" "}
                    </h1>
                    <p className="hero--section--description">
                        University of Gloucestershire graduate with 2 years professional experience.
                        <br /> A strong foundation in software development principles and a passion for creating interactive and immersive digital experiences.
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/portrait2.png" alt="Hero Section"/>
            </div>
        </section>
    );
}