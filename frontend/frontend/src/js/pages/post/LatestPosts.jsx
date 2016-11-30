const React = require("react");


class LatestPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    renderPost = (post) => (
        <div key={post.id}>
            <div>{ post.title }</div>
        </div>
    );

    render = () => (
        <div>
            { this.props.posts.map( (post) => this.renderPost(post)) }
            <button onClick={this.props.onClickMore}>More posts !</button>
        </div>
    );
}

LatestPosts.defaultProps = {
    posts: []
};

LatestPosts.propTypes = {
    posts               : React.PropTypes.array.isRequired,
    webHost             : React.PropTypes.string,
    canShowMore         : React.PropTypes.bool,
    onClickMore         : React.PropTypes.func
};

module.exports = LatestPosts;