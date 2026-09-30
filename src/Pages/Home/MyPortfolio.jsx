import data from "../../data/index.json";

export default function MyPortfolio()
{
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="section--title">Projects</p>
                    <h1 className= "skills--section--heading">My Portfolio</h1>
                </div>
                <div>
                    <a 
                        className="btn btn-github"
                        href="https://github.com/brown1sh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 33 33"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.59 13.07 10.96 15.2.8.14 1.09-.35 1.09-.78 0-.38-.01-1.41-.02-2.77-4.45.97-5.39-2.15-5.39-2.15-.73-1.85-1.78-2.34-1.78-2.34-1.45-.99.11-.97.11-.97 1.61.11 2.45 1.65 2.45 1.65 1.43 2.45 3.75 1.74 4.66 1.33.15-1.04.56-1.74 1.02-2.14-3.55-.4-7.29-1.78-7.29-7.91 0-1.75.62-3.17 1.65-4.29-.17-.4-.71-2.03.16-4.23 0 0 1.34-.43 4.4 1.64A15.3 15.3 0 0116 8c1.36.01 2.73.18 4 .54 3.06-2.07 4.4-1.64 4.4-1.64.87 2.2.33 3.83.16 4.23 1.03 1.12 1.65 2.54 1.65 4.29 0 6.15-3.75 7.5-7.32 7.9.57.5 1.09 1.47 1.09 2.97 0 2.14-.02 3.87-.02 4.4 0 .43.29.93 1.1.78C27.42 29.07 32 23.08 32 16c0-8.84-7.16-16-16-16z"
                                fill="currentColor"
                            />
                        </svg>
                        Visit My GitHub
                    </a>
                </div>
            </div>
            <div className="portfolio--section--container">

                {data?.portfolio?.map((item) =>(
                    <a
                        key= {item.id}
                        href= {item.linkAddress}
                        target="_blank"
                        rel= "noopener noreferrer"
                        className="portfolio--section--card--link"
                    >
                    <div className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            {item.id !== "1" && (
                                <p className="text-sm portfolio--link">
                                    {item.link}
                                    <svg
                                        xmlns= "http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                            stroke="currentColor"
                                            strokeWidth="2.66667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </p>
                            )}
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </section>
    );
}