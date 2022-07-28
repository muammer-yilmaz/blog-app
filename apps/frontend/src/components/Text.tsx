import React from "react";

type IProps = {
    title: string
}

const Text: React.FC<IProps> = ({ title }) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

export default Text