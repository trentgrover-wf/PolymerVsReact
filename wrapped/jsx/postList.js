/** @jsx React.DOM */

var PostList = React.createClass({

    render: function() {

        var showProp = this.props.show ? this.props.show : 'all';
        var postsProp = this.props.posts ? this.props.posts : [];
        var self = this;
        var postNodes = postsProp.map(function (post, index) {

            var hidden = showProp === 'favorites' && !post.favorite;
            var callback = function() {
                self._favoriteTapped(post, index);
            };

            // return DOM tree even if hidden
            return (
                <PostCard key={index} post={post} hidden={hidden} onFavoriteTapped={callback} />
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
            <div style={listStyle}>
                {postNodes}
            </div>
        );
    },

    _favoriteTapped: function(post, index) {
        post.favorite = !post.favorite;
        this.forceUpdate();
    }

});

document.registerReact('post-list', PostList);
