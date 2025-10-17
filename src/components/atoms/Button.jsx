import '../../styles/atoms/button.css'
const Button = ({ text, onClick }) => (
  <button className="btn" onClick={onClick}>{text}</button>
);

export default Button;