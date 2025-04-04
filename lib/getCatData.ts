"use server";

import {PropTypes} from "@/types";

const apiKey = process.env.API_KEY;

export async function getCatData(): Promise<PropTypes[]> {

  //https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=${apiKey}`
  );


  if (res.status !== 200){
    return []
  }
  else {
    const data = await res.json();
    console.log(data);
    return data
  }
}
