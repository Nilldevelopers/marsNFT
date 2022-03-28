import styles from "./CoverSlider.module.css";

const CoverSlider = (props) => {
  return <div className={`${styles.background}`}>{props.children}</div>;
};
export default CoverSlider;
