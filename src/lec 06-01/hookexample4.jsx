import { useState } from "react";
function StateExample4(){
    const[styles,setStyles]=useState({
        bold:false,
        italic:false,
        underline:false
    })
    const handleStyleChange = (style) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            [style]: !prevStyles[style] // Toggle the style
        }));
    };
    return (
        <div>
            <label>
                <input type="checkbox" checked={styles.bold} onChange={() => handleStyleChange("bold")} />
                {"Bold"}
            </label>
            <br/>
            <label>
                <input type="checkbox" checked={styles.italic} onChange={() => handleStyleChange("italic")} />
                {"Italic"}
            </label>
            <br/>
            <label>
                <input type="checkbox" checked={styles.underline} onChange={() => handleStyleChange("underline")} />
                {"UnderLine"}
            </label>
            <br/>
            <p
                style={{
                    fontWeight: styles.bold ? "bold" : "normal",
                    fontStyle: styles.italic ? "italic" : "normal",
                    textDecoration: styles.underline ? "underline" : "none"
                }}
            >
                Hello!!! Ayushi Babariya
            </p>
        </div>
    )
}
export default StateExample4;