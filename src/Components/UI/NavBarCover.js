import styles from "./NavBarCover.module.css";
const NavBarCover = (props) => {
  return (
    <div className={`${props.className} ${styles.background}`}>{props.children}</div>
  );
};
export default NavBarCover;
