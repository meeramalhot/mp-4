import { getCatData } from "@/lib/getCatData";
import Header from "../components/Header";

export default async function HomePage() {
  const cats = await getCatData();
  console.log(cats);

  return (
    <main>
      <div>
        <Header />
        {cats.length === 0 ? (
          <p>No cat data was able to be fetched</p>
        ) : (
          cats.map((cat) => (
            <img
              key={cat.id}
              src={cat.url}
              alt="abyssinian cat image"
              style={{ height: "30vh", width: "24vh", padding: "2vh" }}
            />
          ))
        )}
        <h2 style={{ color: "#088F8F", textAlign: "center" }}>
          Refresh for new cats
        </h2>
      </div>
    </main>
  );
}