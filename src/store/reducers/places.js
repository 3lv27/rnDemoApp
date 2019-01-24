import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: [],
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/23/halstatt-austria.jpg'
          }
        })
      }
      break;
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key
        })
      }
      break;
    default:
      return state
      break;
  }
}

export default reducer