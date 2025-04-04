import Header from "@/components/Header";

export default function AboutPage() {
  return (

    <div>
      <Header />

      <h1 style={{color: "#088F8F", textAlign:"center", padding: "2vh"}}> Welcome to the site!</h1>
      <h2 style={{color: "#088F8F", textAlign:"center" }}>This site uses an API to fetch images of cats</h2>
      <p style={{color: "#088F8F", textAlign:"center", padding: "2vh"}}>The cats are abyssinian. According to Wikipedia, the Abyssinian is a breed of cat with a distinctive "ticked" tabby coat, in which individual hairs are banded with different colours. They are also known simply as Abys. 
      The first members of the breed to be exhibited in England were brought there from Abyssinia 
      (now known as Ethiopia), hence the name. Genetic studies place the breed's origins in Southeast Asia 
      and the coasts of the Indian Ocean, however. It is possible that the breed was introduced to Abyssinia 
      by travelers who had stopped in Calcutta.
      </p>
    </div>
  );
}