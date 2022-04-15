import React from "react"
import { marked } from "marked"
import { useParams } from "react-router-dom"
import Posts from "../Posts"
import NavBar from "../NavBar"
import PostLinks from "../PostLinks"

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id,
            post: undefined,
            loaded: false
        }
    }
    
    componentDidMount() {
        fetch(`http://localhost:5000/posts/${this.state.id}`, {mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        post: result,
                        loaded: true
                    })
                },
                (error) => {
                    this.setState({
                        loaded: true,
                        error
                    })
                }
            )
    }

    render() {
        let {id, error, loaded, post} = this.state
        let postMarkup = undefined

        if(error) {
            return (
                <div className="oopsIFuckedUp">
                    {error.message}
                </div>
            )
        } else if(!loaded) {
            return (
                <div className="justASecAlrightGeez">
                    Loading...
                </div>
            )
        }

        if(id === "all") {
            return <Posts />
        } else if(post) {
            postMarkup = marked.parse(post.content)
            /* elses are for pussies */
            return (
                <article>
                    <h1>{post.name}</h1>
                    <main dangerouslySetInnerHTML={{__html: postMarkup}} />
                    <PostLinks next={post.next_id} prev={post.previous_id} />
                </article>            
            )
        }
    }
}

export default (props) => (
    <>
    <NavBar />
    <Post
        {...props}
        params={useParams()}/>  
    </>
)
