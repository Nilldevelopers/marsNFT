import styles from "./WhiteBtn.module.css";

const ColorBtn = (props) => {
  return <button className={`${styles.button}`}>{props.txt}</button>;
};
export default ColorBtn;
