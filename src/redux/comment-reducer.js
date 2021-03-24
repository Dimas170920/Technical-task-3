const SET_COMMENT = "SET_COMMENT"

let initialState = {
    comments: []
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT:
            let numb = state.comments.findIndex((arr) => arr[0]=== action.id)

            if(numb === -1){
                return {...state, comments: [...state.comments,[action.id, action.commentBody]]}
            }else {
                state.comments[numb].push(action.commentBody)
                return{...state, comments: [...state.comments]}
            }
            return {...state}

        default:
            return state;
    }
}

export const setComment = (commentBody,id) => ({type: SET_COMMENT, commentBody,id})

export const fillComment = (comment) => {
    return (dispatch) => {
        let id = Object.keys(comment).toString();
        let commentBody = comment[id]
            dispatch(setComment(commentBody,id));
        }

}


export default commentReducer;