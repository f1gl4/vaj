function BurgerList({ count, name }) {

    const burgers = Array.from({ length: count }, (_, index) => (
      <li key={index}>
        {name} is a great burger!
      </li>
    ))
  
    return (
      <ul>
        {burgers}
      </ul>
    )
}
  
export default BurgerList
  