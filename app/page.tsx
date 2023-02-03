export default async function Home() {
    const data = await fetch(`${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}`)
    const res= await data.json();
    console.log(res);
    return (
    <main>
        <h1 className="text-2xl font-bold">
          hello world 🦾?
        </h1>
    </main>
  )
}
