import React from 'react'
import {Link} from 'react-router-dom'

export default class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined,
            posts: undefined,
            loaded: false
        }
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    getAllPosts() {
        fetch(`http://localhost:5000/posts/all`, {mode: 'cors'})
        .then((res) => {
            return res.json()
        })
        .then(
            (result) => {
                this.setState({
                    posts: result,
                    loaded: true
                })

            },
            (error) => {
                this.setState({
                    loaded: true,
                    error
                })
                console.error(error)
            }
        )
    }

    componentDidMount() {
        this.getAllPosts();
    }

    render() {
        let {error, loaded, posts} = this.state

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

        if(posts.length > 0) {
            return (
                <ul>
                    {
                        posts.map((post) => {
                            let {id, name} = post
                            let target = `/posts/${id}`
                            return (
                                <li key={id}><a href={target}>{name}</a></li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            return (
                <p>There are no posts.</p>
            )
        }
    }
}
