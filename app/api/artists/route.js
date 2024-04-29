import { NextResponse } from "next/server"
export const dynamic = "force-dynamic"

export async function GET(){

  const resToken = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/token")
  const token_data = await resToken.json()
  const token = await token_data.access_token

  const id = process.env.NEXT_PUBLIC_ARTIST_ID


  const res = await fetch(`https://api.spotify.com/v1/artists/${id}`,{
    method:"GET",  
    headers: {'Authorization': `Bearer ${token}`}
  })

  const artist_data = await res.json()

  return NextResponse.json(artist_data, {status:200})
}
