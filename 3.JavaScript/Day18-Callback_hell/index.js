// zomato application

function placeOrder(callback) {
  console.log(`payment processing`);
  setTimeout(() => {
    console.log(`your payment is successful, order get placed`);
    callback();
  }, 3000);
}

function preparingOrder(callback) {
  console.log(`order preparation has started`);
  setTimeout(() => {
    console.log(`your order is ready now`);
    callback();
  }, 3000);
}

function pickupOrder(cb) {
  console.log(`on the way to pick order`);
  setTimeout(() => {
    console.log(`Order picked by the delivery boy`);
    cb();
  }, 3000);
}

function deliverOrder() {
  console.log(`I am on my way to deliver the order`);
  setTimeout(() => {
    console.log(`order delivered succefffully`);
  }, 3000);
}

// placeOrder(preparingOrder(pickupOrder)) can't do this
placeOrder(() => {
  preparingOrder(() => {
    pickupOrder(() => deliverOrder());
  });
});
// preparingOrder()
