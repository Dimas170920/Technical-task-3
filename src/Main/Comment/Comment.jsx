import React from "react"

const Comment = ({comments, id}, ...props) => {

    let numb = comments.findIndex((arr) => Number(arr[0]) === id)
    if (numb === -1 || numb === null) {
        return null
    } else {
        return (<div>
                {comments[numb].map(c =>
                    Number(c) !== id
                        ? <div>{c}</div>
                        : null
                )}
            </div>
        )
    }

}

export default Comment