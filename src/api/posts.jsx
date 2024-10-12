export async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
}
