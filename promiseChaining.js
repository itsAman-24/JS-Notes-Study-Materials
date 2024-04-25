const cart = ["shirt" , "jeans" , "shoes"];

const promise = createOrderId(cart);
console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
});

function createOrderId(cart) {
    //creating promise
    const prms = new Promise(function(reject,resolve) {
        if(!varifyOrderId(cart)) {
            const error = new Error("There is some problem");
            reject(error);
        }

        //creating orderId
        const orderId = "12345";

        if(orderId) {
            resolve(orderId);
        }
    });

    return prms;
}

function varifyOrderId (cart) {
    return true;
}