import { NextResponse } from "next/server"
export const dynamic = "force-static"

export async function GET(){
  const link = process.env.NEXT_PUBLIC_TOKEN_URL
  const res = await fetch(link, {
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



