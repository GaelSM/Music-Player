export default function Button({ children, handleClick }) {
  return (
    <div className="button" onClick={handleClick}>
      { children }
    </div>
  )
}