export default function AboutMe()
{
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/portrait2.png" alt="About Me" />
            </div>
            <div className="hero--section--content">
                <p className="section--title">About</p>
                <h1 className="skills--section--heading">About Me</h1>
                <p className="hero--section--description">
                    I am a frontend developer that has 2 years of experience building and maintaining user-focused applications using Unity and .NET compatible libraries. 
                    During that time, I have effectively collaborated within cross-functional teams, whilst delivering clean, scalable and maintainable code.
                </p>
                <p className="hero--section--description">
                    In my spare time, I also enjoy learning and developing programming skills. This includes expanding upon knowledge acquired academically
                    during university studies of C++, web development and Unreal Engine.
                </p>
            </div>
        </section>
    )
}