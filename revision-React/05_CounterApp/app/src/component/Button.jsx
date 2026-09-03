
const Button = ({text, func}) => {
  return (
      <button className="counter" onClick={func} >
      {text}
    </button>
  )
}

export default Button;
