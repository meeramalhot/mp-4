"use server";

import { NextResponse } from "next/server";


const apiKey = process.env.API_KEY;

export async function getCatData() {

  //https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=${apiKey}`
  );


  if (res.status !== 200){
    return NextResponse.json({error: "Failed"}, {status:500})
  }
  else {
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  }
}
