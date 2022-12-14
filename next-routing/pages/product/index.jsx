import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <div>
      <Link href="/">
        <a> {`<-`} Back to Home</a>
      </Link>
      <h1>Product List Page</h1>
      <ul>
        <li>
          <Link href="/product/1">
            <a>Product - 1</a>
          </Link>
        </li>
        <li>
          <Link href="/product/2">
            <a>Product - 2</a>
          </Link>
        </li>
        <li>
          <Link href="/product/3" replace>
            <a>Product - 3</a>
          </Link>
        </li>
        <li>
          <Link href={`/product/${productId}`}>
            <a>Product - {productId}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
