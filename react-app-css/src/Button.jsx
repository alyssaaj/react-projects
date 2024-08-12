

function Button(){

    // Method 3. Inline 
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // Method 1. External
        // <button className="button">Click me</button>

        // Method 3. Inline
        <button style={styles}>Click me</button>
    );

}
export default Button
