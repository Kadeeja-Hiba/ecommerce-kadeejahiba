import styles from "./chips.module.css";

const Chips = (props) => {
  return (
    <div>
      <p className={styles.chip}>{props.name}</p>
    </div>
  );
};
export default Chips;
