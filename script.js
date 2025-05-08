// ✅ 1. Simulate a Food Delivery

// Task: Create a function orderFood that returns a Promise. It should resolve after 2 seconds with "🍕 Pizza delivered!".

// Bonus: Add a chance to reject with "🚫 Delivery failed!".

function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.7; // 80% chance to succeed
      if (success) {
        resolve("🍕 Pizza delivered!");
      } else {
        reject("🚫 Delivery failed!");
        resolve("🍕 Pizza delivered!");
      }
    }, 2000);
  });
}

orderFood()
  .then((message) => {
    console.log(message); // "🍕 Pizza delivered!"
  })
  .catch((error) => {
    console.error(error); // "🚫 Delivery failed!"
  });
