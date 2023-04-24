import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
        <Link href="/blog">
         <button>Blog</button> 
        </Link>
        <Link href='/product'>
        <button>Product</button>
        </Link>

    </div>
  );
}
export default Home;
