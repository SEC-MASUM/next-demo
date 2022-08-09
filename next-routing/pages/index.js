import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();

  const handelClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handelClick}>Place Order</button>
    </div>
  );
}

export default Home;
