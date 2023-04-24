import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <button>Home</button>
      </Link>
      <h2>
        <Link href='product/1/'>Product 1</Link>
      </h2>
      <h2>
        <Link href='product/2/'>Product 2</Link>
      </h2>
      <h2>
        <Link href='product/3/'>
                Product 3
        </Link>

      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <label>product</label>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
