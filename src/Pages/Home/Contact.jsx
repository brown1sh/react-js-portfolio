import { useState } from "react";

export default function ContactMe()
{
    const [result, setResult] = useState("");
    const [showToast, setShowToast] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "68e7de00-b07d-4a75-9c49-8449cbdb9ce4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Email sent Successfully!" : "Error - Email not sent.");
        setShowToast(true);

        event.target.reset();

        setTimeout(() => {setShowToast(false);}, 8000);
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h1 className= "skills--section--heading">Contact Me</h1>
                <p className="text-lg">For any questions, please feel free to contact me with your details below!</p>
            </div>
            <form className="contact--form--container" onSubmit = {onSubmit}>
                <div className="container">
                    <label htmlFor="full-name" className="contact--label">
                        <span className="text-md">Name</span>
                        <input type="text" className="contact--input text md" name="full-name" id="full-name" required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text md" name="email" id="email" required />
                    </label>
                </div>
                <label htmlFor="phone" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text md" name="message" id="message" rows="8" placeholder="Type your message..." />
                </label>
                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>

            {showToast && (
                <div className="contact--toast">
                    <div>
                        <p className="contact--toast--message">{result}</p>
                    </div>

                    <button
                        className="contact--toast--close"
                        onClick={() => setShowToast(false)}
                        aria-label="Close notification"
                    >
                        X
                    </button>
                </div>
            )}
        </section>
    );
}