import React from "react";

interface Props {
    params: {

    };
}

const page = (props: Props) => {
    console.log(props.params);
    return (
        <div>
            page
        </div>
    );
}

export default page;