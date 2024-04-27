import { useEffect, useState } from "react"

const useFetchApiToken = () =>{
  const grant_type = process.env.NEXT_PUBLIC_TOKEN_GRANT_TYPE
  const tokenUrl = process.env.NEXT_PUBLIC_TOKEN_URL
  const id = process.env.NEXT_PUBLIC_CLIENT_ID
  const secret = process.env.NEXT_PUBLIC_CLIENT_SECRET


  // console.log('useFetchApiToken started')
  const [token, setToken] = useState('')
  const [error, setError] = useState(null)

  useEffect( ()=>{
    setTimeout(()=>{
      fetch(tokenUrl, {
        method:"POST",
        headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams( {
          grant_type: grant_type,
          client_id: id,
          client_secret: secret
        }).toString()
      })
      .then(res =>{
        if( !res.ok ) throw new Error("Problemi con il caricamento token")
        
        return res.json()
      }).then(res=>{
        setToken(res.access_token)
      })
      .catch(e =>{
        setError(e)
      })
    }, 1000)
    

  },[])

  return {token, error}
}

export default useFetchApiToken

