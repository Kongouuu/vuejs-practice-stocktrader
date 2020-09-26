# A practice on Vue.js (Uses all I learned)

## Some ideas involved
### Basics (bindings, computed variables, etc.)
### Bootstrap website
### Using Components
### Communicate into component
### Pass variable out from component
### Transition animation
### Vue Router
### Vuex state management
### Vue resource
### HTTP request (in this project, communicate with firebase)

## Explanations
This is a one page application, where the user is given a certain amount of funds to do trading. The stock price will change daily by clicking next day, and the amount of stocks bought will be stored in the account. The user should profit by buying in low price and selling in high price.
A key features are 
  1) Single-page website with smooth transition
  2) Data communication between components and data management of the whole project. For example, user buying stocks at different prices, and storing the amount of stocks bought for each.
  3) Cool interface, I uses "modal" for the payment interface which looks very nice (the one in the course is just simple alert I think)
  4) Save / Load mechanics based on firebase
  Will modify the readme if needed

## Random
This is a final-assignment for the Vuejs course I took. I have done it a long time ago and thinking of putting it on github just now. The components part and the transition animation part dealing with "one page website" is extremely interesting. The vuejs language to do event listening such as "@click" is really convinient. The rest of the part dealing with resource management, router, http requests are not quite helpful though. I believe working Vue with back-end frameworks like laravel will bring a much better experience.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
