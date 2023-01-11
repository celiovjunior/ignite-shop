import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  
  return(
    <h1>product page {JSON.stringify(query)}</h1>
  )
}