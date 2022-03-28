import styles from "./Cover.module.css";

const Cover = (props) => {
  return (
    <div className={`${styles.background} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Cover;
