/* eslint-disable no-fallthrough */
export const ReviewReducer = (state, action) => {
  switch (action.type) {
    case "REVIEW_DATA":
      state.reviews.unshift({
        id: 2,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
        message: action.payload.message,
        rating: action.payload.rating,
        dateInfo: action.payload.dateInfo,
      });
      return {...state}
    case "GET_REVIEWS":
      state.reviews = []
      console.log(action.payload) 
      for (let elem in action.payload) {
        console.log(elem)
        state.reviews.push(action.payload[elem])
      }
      state.reviews.reverse()
      
      // action.payload.map((reviewElement) => {
      //   return state.reviews.push(reviewElement);
      // });
      return {...state}
      // console.log(action)
    case "GET_SERVICES":
      state.services = []
      action.payload.map((services) => {
        return state.services.push(services);
      });
      // console.log(state)
      return {...state}
    default:
      return state;
    }
};
