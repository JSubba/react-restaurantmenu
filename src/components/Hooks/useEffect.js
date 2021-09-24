import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
    const initialData = 8;
    const [myNum, setMyNum] = useState(initialData);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    }, []);
    return (
        <>
            <p>{myNum}</p>
            <div className="button2" onClick={() => setMyNum(myNum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCREMENT
            </div>
        </>
    );
};

export default UseEffect;
