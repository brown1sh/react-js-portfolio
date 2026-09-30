import {useState} from "react";

export default function MyResume({isOpen, onClose})
{
    if (!isOpen)
    {
        return null;
    }

    return (
        <div
            className="resume--overlay"
            onClick={onClose}
        >
            <div
                className="resume--modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="resume--close"
                    onClick={onClose}
                    aria-label="Close Resume"
                >
                    X
                </button>

                <iframe
                    src="./resume.pdf"
                    title="My Resume"
                    className="resume--pdf"
                />
            </div>
        </div>
    );
}