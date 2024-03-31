import React, { useImperativeHandle } from "react";

const CustomInput = (props, ref) => {
    useImperativeHandle(ref, () => {
        return {
            alertHi: () => alert("hi")
        }
    }, [])
    return <>
        <input
            // ref={ref}
            {...props} />
    </>;
};

export default React.forwardRef(CustomInput);