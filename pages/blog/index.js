import Link from "next/link"

function Blog() {
  
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
    </div>
    
  )
}

export default Blog
