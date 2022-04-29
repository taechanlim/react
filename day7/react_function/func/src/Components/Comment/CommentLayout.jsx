import React from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

const CommentLayout = () => {
    return(
        <>
            <CommentForm />
            <CommentList />
        </>
    )
}

export default CommentLayout