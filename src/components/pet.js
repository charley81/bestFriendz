export default function Pet({ name, animalType, breed }) {
  return (
    <div>
      <h4>{name}</h4>
      <h3>{animalType}</h3>
      <h3>{breed}</h3>
    </div>
  )
}
