import React, { FC } from "react";
import s from "./IconSliderPrev.module.scss";

interface IconSliderPrevProps {}

export const IconSliderPrev: FC<IconSliderPrevProps> = (props) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                opacity="0.2"
                cx="20"
                cy="20"
                r="19.5"
                transform="rotate(-180 20 20)"
                stroke="currentColor"
            />
            <path
                d="M29.3536 20.3536C29.5488 20.1583 29.5488 19.8417 29.3536 19.6464L26.1716 16.4645C25.9763 16.2692 25.6597 16.2692 25.4645 16.4645C25.2692 16.6597 25.2692 16.9763 25.4645 17.1716L28.2929 20L25.4645 22.8284C25.2692 23.0237 25.2692 23.3403 25.4645 23.5355C25.6597 23.7308 25.9763 23.7308 26.1716 23.5355L29.3536 20.3536ZM9 20.5L29 20.5L29 19.5L9 19.5L9 20.5Z"
                fill="currentColor"
            />
        </svg>
    );
};
