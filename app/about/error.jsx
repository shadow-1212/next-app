"use client"

export default function Error( { error, reset } ) {
  return (
    <div>
        <h1>Something went wrong : {error.message}</h1>
        <button onClick={()=> reset()} > reload the page</button>
    </div>
  );
}