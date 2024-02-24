    import React from "react";

function Demo() {
    const styles = {
        color: "Blue",
        padding: "50px",
        fontSize:"60px",
        backgroundColor: "green"
    };

    return (
        <>
            <h1 style={{ backgroundColor: "Aqua" }}>Hello style</h1>
            <p style={{ textAlign: "center" }}>Styling</p>
            <p style={styles}>Internal Styling</p>
        </>
    );
}

export default Demo;
