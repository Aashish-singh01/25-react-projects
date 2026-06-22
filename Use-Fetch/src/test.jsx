import { useFetch } from "./useFetch";

export default function UseFetchHookTest() {
  const { data, pending, error } = useFetch("https://dummyjson.com/products");

  return (
    <div>
      <h1>Use Fetch Hook</h1>

      {pending ? <h2>Pending! Please wait</h2> : null}
      {error ? <h2 style={{ color: "red" }}>Error: {error}</h2> : null}

      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
