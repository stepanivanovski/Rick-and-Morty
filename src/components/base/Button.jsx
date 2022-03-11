const Button = ({ text, className = '', onClick = () => {} }) => {
  const classes = `btn ${className}`

  return (
    <button 
      onClick={onClick} 
      className={classes}>
      {text}
    </button>
  )
}

export default Button
