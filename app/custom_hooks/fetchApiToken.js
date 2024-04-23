const token = process.env.TOKEN_BODY
const tokenUrl = process.env.TOKEN_URL
const tokenHeaders = process.env.TOKEN_HEADERS

const fetchApiToken = async () =>{
  console.log(token, tokenUrl, tokenHeaders)
  return await fetch(tokenUrl,{
          method:'POST',
          headers: tokenHeaders,
          body: token
        })
        .then(res =>{
          if( res.ok ){
            console.log(res)
            return res.json()
          }
        })
        .catch(e =>{
          console.log(e)
          return e.message
        })
}

export {
  fetchApiToken
}

