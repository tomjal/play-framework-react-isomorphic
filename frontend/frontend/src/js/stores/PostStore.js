/**
 * Created by bladron on 07/04/16.
 */
const Reflux = require('reflux');
const PostActions = require("../actions/PostActions");
const { PostApi } = require("../api/Api");


var PostStore = Reflux.createStore({
    init() {
        this.listenTo(PostActions.getMorePost, this.onGetMorePost);

        this.posts = [];
    },

    onGetMorePost(from) {
        // Get more posts from server
        PostApi.getPosts(from).done( (posts) => {
            this.posts = this.posts.concat(posts);
            this.trigger();
        });
    },

    onGetPost(result) {
        //this.posts = this.posts.concat(result.teasers);
        //this.remainingPosts = result.total;
        //this.trigger();
    }

});

module.exports = PostStore;