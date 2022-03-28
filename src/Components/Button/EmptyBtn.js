import styles from "./EmptyBtn.module.css";

const EmptyBtn = (props) => {
  return <button className={`${styles.button}`}>{props.txt}</button>;
};
export default EmptyBtn;
