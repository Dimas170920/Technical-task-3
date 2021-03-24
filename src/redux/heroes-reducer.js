import {heroesAPI} from "../api/api";

const SET_HEROES = "SET_HEROES"

let initialState = {
    heroes: []
};

const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEROES:
            return {...state, heroes: action.heroes}
        default:
            return state;
    }
}

export const setHeroes = (heroes) => ({type: SET_HEROES, heroes})

export const requestHeroes = () => {
    return (dispatch) => {
        heroesAPI.getHeroes().then(data => {
            dispatch(setHeroes(data.results));
        });
    }
}


export default heroesReducer;