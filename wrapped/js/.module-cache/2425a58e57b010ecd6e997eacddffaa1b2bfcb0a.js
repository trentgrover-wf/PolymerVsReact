/** @jsx React.DOM */

var PostList = React.createClass({displayName: 'PostList',

    getInitialState: function() {
        return {
            show: this.props.show ? this.props.show : 'all',
            posts: this.props.posts ? this.props.posts : []
        };
    },

    render: function() {

        var self = this;
        var postNodes = this.state.posts.map(function (post, index) {

            var hidden = self.state.show === 'favorites' && !post.favorite;
            var callback = function() {
                self._favoriteTapped(post, index);
            };

            // return DOM tree even if hidden
            return (
                PostCard( {key:index, post:post, hidden:hidden, onFavoriteTapped:callback} )
            );

            /*
            // only return DOM tree if NOT hidden
            if (!hidden) {
                return (
                    <PostCard key={index} post={post} onFavoriteTapped={callback} />
                );
            }
            */
        });

        var listStyle = {
            display: 'block',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex'
        };

        return (
            React.DOM.div( {style:listStyle}, 
                postNodes
            )
        );
    },

    _favoriteTapped: function(post, index) {
        post.favorite = !post.favorite;
        this.forceUpdate();
    }

});

document.registerReact('post-list', PostList);
