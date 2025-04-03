"use client";

import { getCatData } from "@/lib/getCatData";
import Header from "../components/Header";


export default async function HomePage() {
    const cats = await getCatData();

    return (
        <main>
            <div>
                <Header/>

                {
                    cats.map((cat) => (
                    <img key={cat.id} src={cat.url} alt={'abyssinian cat image'}
                         style={{height: "30vh", width: "24vh", padding: "2vh"}}/>
                ))}
            </div>
        </main>
    );
}
