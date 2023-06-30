### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
-  ==> using async & await, promises, and also using .then() & .catch()

- What is a Promise?
- ==> a promise is returned in a response by an asynchronous method and if the response is
- ==> thenable we can get the data, if not handle with error.

- What are the differences between an async function and a regular function?
- ==> an operation following a regualr function waits for the preceeding function to complete,
- ==> other functions can preceed to run while an async function is still pending.

- What is the difference between Node.js and Express.js?
- ==> node can work without express but express needs node.

- What is the error-first callback pattern?
- ==> a function that either returns an error or the response data.

- What is middleware?
- ==> middleware is code that runs in the middle of the request/ response cycle.

- What does the `next` function do?
- ==>once we throw we need to send error to the global error handler. We use next for this.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

==> making thre request sequentially while each must wait for the previous
==> before starting. It would be better to start the requests in parallel
==> using Promise.all()

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
