import { useParams } from "react-router-dom"

export default function Category() {

  const {name} = useParams();
  return (
    <div>{name}</div>
  )
}