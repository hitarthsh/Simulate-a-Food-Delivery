// ✅ 2. Chained Promises: User - Posts - Comments

// Task:
// 1. Create getUser() resolves with { id: 1, name: "Harsh" }
// 2. getPosts(userId) - resolves with list of post titles
// 3. getComments(postId) - resolves with comments
// Chain them together using .then() and log the final output.

function getUser() {
  return new Promise((res, rej) => {
    res({ id: 1, name: "Harsh" });
  });
}

function getPosts(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["title 1", "title 2", "title 3"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["great post!", "very informative", "loved it!"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log(user); // { id: 1, name: "Harsh" }
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts); // ["title 1", "title 2", "title 3"]
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log(comments); // ["great post!", "very informative", "loved it!"]
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("All done!"); // "All done!"
  });
