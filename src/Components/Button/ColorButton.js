import './ColorButton.css'

const ColorButton = (props) => {
  return (
    <button className={`btn btn-style ${props.className}`}>
      <span>{props.text}</span>
    </button>
  );
};
export default ColorButton;
