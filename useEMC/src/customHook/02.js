import { useFetch } from "./useFetch";

const url = "https://jsonplaceholder.typicode.com";

function C02() {
  const { data, fetchUrl } = useFetch(url, "users");
  return (
    <div>
      <h1>useFetch</h1>
      <button
        onClick={() => {
          fetchUrl("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          fetchUrl("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          fetchUrl("todos");
        }}
      >
        todos
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
function C03() {
  const { data: userData } = useFetch(url, "users");
  const { data: userPost } = useFetch(url, "posts");
  return (
    <div>
      <h1>C03</h1>
      <h3>user</h3>
      <pre>{JSON.stringify(userData[0], null, 2)}</pre>
      <h3>post</h3>
      <pre>{JSON.stringify(userPost[0], null, 2)}</pre>
    </div>
  );
}

export { C02, C03 };
