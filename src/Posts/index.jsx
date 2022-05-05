import React from 'react';
import { marked } from 'marked';
import { useParams } from 'react-router-dom';

class PostsItem extends React.Component {
    constructor(props) {
        super(props)
        let pageNumber;

        if (this.props.hasOwnProperty("pageNumber")) {
            pageNumber = this.props.pageNumber;
        } else if(this.props.hasOwnProperty("params")) {
            pageNumber = this.props.params.pageNumber;
        }
        
        this.state = {
            error: undefined,
            posts: undefined,
            loaded: false,
            pageNumber: pageNumber,
            pageCount: undefined
        }
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    getAllPosts() {
        fetch(`http://localhost:5000/posts/page/${this.state.pageNumber}`, {mode: 'cors'})
        .then((res) => {
            return res.json()
        })
        .then(
            (result) => {
                this.setState({
                    ...this.state,
                    posts: result.posts,
                    pageCount: result.pageCount,
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
        let {error, loaded, posts} = this.state;
        let pageNumber = parseInt(this.state.pageNumber);
        let pageCount = parseInt(this.state.pageCount);
        let prevLink = undefined, nextLink = undefined;
        let prevText = "&laquo; Previous";
        let nextText = "Next &raquo;"

        if(pageNumber < pageCount - 1) {
            nextLink = `/posts/page/${pageNumber + 1}`;
        }
        
        if(pageNumber === 1) {
            prevLink = "/";
        } else if(pageNumber === 0) {
            prevLink = null;
        } else {
            prevLink = `/posts/page/${pageNumber - 1}`;
        }

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

        if(posts) {
            return (
                <div id='postsContainer'>
                    <main>
                    {
                        posts.map((post) => {                            
                            let {id, name, summary, publicationDate} = post;
                            let target = `/posts/${id}`;
                            let summaryHtml = marked.parse(summary);

                            return (
                                <article key={id}>
                                    <header className='postHeader'>
                                        <h2><a href={target}>{name}</a></h2>
                                        <time className='postDate'>
                                            {publicationDate}
                                        </time>
                                    </header>
                                    <p className='postSummary' dangerouslySetInnerHTML={{__html: summaryHtml}}/>
                                </article>
                            )
                        })
                    }
                    </main>
                    <div id='paginationLinks'>
                        {
                            prevLink ?
                                <a href={prevLink} dangerouslySetInnerHTML={{__html: prevText}}/>
                            : ""
                        }
                        {prevLink && nextLink ? " • " : ""}
                        {
                            nextLink ?
                                <a href={nextLink} dangerouslySetInnerHTML={{__html: nextText}}/>
                            : ""
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <p>There are no posts.</p>
            )
        }
    }
}

const Posts = (props) => {
    return (
        <>
        <PostsItem
            {...props}
            params={useParams()} />
        </>
    );
}
export default Posts;
