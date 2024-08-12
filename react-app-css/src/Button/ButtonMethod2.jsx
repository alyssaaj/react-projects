
import styles from './ButtonMethod2.module.css'

function ButtonMethod2(){

    return(
        // Method 1. External
        // <button className="button">Click me</button>

        // Method 2. Modules 
        <button className={styles.button}>Click me</button>
    );

}
export default ButtonMethod2