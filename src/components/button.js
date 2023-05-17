import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={styles.button}>{props.name}</button>
    </div>
  );
};
export default Button;
