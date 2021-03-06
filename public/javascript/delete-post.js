async function deleteFormHandler(event) {
  event.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const post_text = document.getElementById("post-text").value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .getElementById("delete-post")
  .addEventListener("click", deleteFormHandler);
