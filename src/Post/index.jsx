import React from "react";
import { useParams } from "react-router-dom"
import { marked } from "marked";
import Posts from "../Posts";
import PostLinks from "../PostLinks";
import NavBar from "../NavBar";

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            post: undefined,
            loaded: false
        };
        this.getMatchingPost = this.getMatchingPost.bind(this);
    }
    
    getMatchingPost() {
        return fetch(`http://localhost:5000/posts/${this.state.id}`, {mode: 'cors'});
    }

    componentDidMount() {
        this.getMatchingPost()
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        post: result,
                        loaded: true
                    });
                },
                (error) => {
                    this.setState({
                        loaded: true,
                        error
                    });
                }
            );
    }

    render() {
        let {id, error, loaded, post} = this.state;
        let postMarkup = undefined;

        if(error || this.state.hasError) {
            return (
                <div className="oopsIFuckedUp">
                    {error.message}
                </div>
            );
        } else if(!loaded) {
            return (
                <div className="justASecAlrightGeez">
                    Loading...
                </div>
            );
        }

        if(id === "all") {
            return <Posts />
        } else if(post) {
            postMarkup = marked.parse(post.content)

            return (
                <article>
                    <h1>{post.name}</h1>
                    <main dangerouslySetInnerHTML={{__html: postMarkup}} />
                    <PostLinks next={post.next_id} prev={post.previous_id} />
                </article>            
            );
        }
    }
}

const Post = (props) => (
    <>
    <NavBar />
    <PostItem
        {...props}
        params={useParams()}/>  
    </>
);

export default Post;
