# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- It removes the need to prop drill data every time you want to pass down. Instead, you can simply create one provider that wraps the top level component, and everything inside that component gets the data as if it where prop drilled all the way down.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- `Actions`, to me, are the informers for the `reducers`. A `reducer` can return many different products, but it needs an `action` to tell it what to produce.

- `Reducers` are the ones who tell the `store` what to be. They contain object(s) that could later replace the `store`'s property values.

- The `Store` is the object that represents everything that can be altered within the application. It is the bank for your applications data.

- The `store` is known for being the "single source of truth" because it holds all the data that the application consumes. Everything the application is (aside from all the static content) comes from the `store`, and the `store` alone.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- `Redux-thunk` is a powerful tool for redux that allows for asynchronous actions. Redux is synchronous by default, which results in making API calls with actions to return an item other than a promise not an option. With `thunk`, API calls will be given time to retrieve data to be later passed into the `reducers`, then the `store`.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- I liked using both the Context API from React and Redux. Context API was definitely easier to pick up, but I think I will be using Redux when build week comes. This is because of the fact that the Context API rerenders all the components that are using it when a single piece of data changes. I know there are workarounds for this issue, but I already feel comfortable with Redux and don't mind the initial setup.
