import React from "react"

const PostLinks = (props) => {
    let {next, prev} = props
    let nextLink = undefined
    let prevLink = undefined

    if(prev) {
        prevLink = <a className="prevLink" href={`/posts/${prev}`}>Previous Post</a>
    }

    if(next) {
        nextLink = <a className="nextLink" href={`/posts/${next}`}>Next Post</a>
    }

    return (
        <p>
            {prevLink} {(prev && next) ? " • " : ""} {nextLink}
        </p>
    )
}

export default PostLinks
