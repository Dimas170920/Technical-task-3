import React from "react"
import {useForm} from 'react-hook-form';
import {compose} from "redux";
import {connect} from "react-redux";
import {fillComment} from "../redux/comment-reducer";

const CommentForm = ({fillComment, id}, ...props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        if (data[id] !== "") {
            fillComment(data);
        }
        e.target.reset()
    }

    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><textarea placeholder="Comment" name={id} ref={register}/></div>
                <div>
                    <button>comment</button>
                </div>
            </form>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        comments: state.commentPage.comments
    }
}


export default compose(
    connect(mapStateToProps, {fillComment})
)(CommentForm)