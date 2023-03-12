import { GET_SERVICES_FETCHED } from "./actions";

const serviceReducer = (state = { services: []}, action) => {
    switch (action.type) {
        case GET_SERVICES_FETCHED:
            return {...state, services: action.services}
        default: 
            return state;
    }
}

export default serviceReducer;