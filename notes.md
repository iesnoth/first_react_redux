configureStore()

This utility can take a variety of parameters and largely acts as a "central nervous system" for your Redux application. Specifically, it has the capacity to take middleware, enable or disable Redux devtools, and configure any extra behaviors your app may need. (Tip: Visit the redux-toolkit documentation to see the options this method can take!)

createSlice()
This utility will accept an object with three main properties:

name is the descriptive string we came up with a moment ago.
initialState is the initial state value.
reducers is an object that has all of our reducers for this state value within.