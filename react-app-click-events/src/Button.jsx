/* eslint-disable no-unused-vars */

function Button() {

    const handleClick = () => console.log("Ouch!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`)
        }

    }

    const handleClick4 = (e) => e.target.textContent = "Ouch!";

    
    return(
        // <button onClick={handleClick}>Click me</button>
        // <button onClick={() => handleClick2("Bro")}>Click me</button>
        // <button onClick={() => handleClick3("Bro")}>Click me</button>
        <button onDoubleClick={(e) => handleClick4(e)}>Click me</button>

    );

}
export default Button