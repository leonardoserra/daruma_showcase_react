import { NextResponse } from "next/server"
export const dynamic = "force-dynamic"

export async function GET(){

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method:"POST",
    headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type:"client_credentials",
      client_id: process.env.APP_CLIENT_ID,
      client_secret: process.env.APP_CLIENT_SECRET
    }).toString()
  })
  const tokenRes = await res.json()

  return NextResponse.json(tokenRes, {status:200})
}



