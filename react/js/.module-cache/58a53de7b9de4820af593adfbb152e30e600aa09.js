/** @jsx React.DOM */

var PostList = React.createClass({displayName: 'PostList',

    render: function() {
/*
                var self = this;
                var postNodes = this.props.posts.map(function (post, index) {

                    var hidden = self.props.show === 'favorites' && !post.favorite;
                    var callback = function() {
//                        self._favoriteTapped(post, index);
                    };

                    // return DOM tree even if hidden
                    return (
                        <PostCard key={index} post={post} hidden={hidden} onFavoriteTapped={callback} />
                    );

                    // only return DOM tree if NOT hidden
//                    if (!hidden) {
//                        return (
//                            <PostCard key={index} post={post} onFavoriteTapped={callback} />
//                        );
//                    }
                });
*/

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

    }

});

/*
        var PostList = React.createClass({

            render: function() {
                var self = this;
                var postNodes = this.props.posts.map(function (post, index) {

                    var hidden = self.props.show === 'favorites' && !post.favorite;
                    var callback = function() {
                        self._favoriteTapped(post, index);
                    };

                    // return DOM tree even if hidden
                    return (
                        <PostCard key={index} post={post} hidden={hidden} onFavoriteTapped={callback} />
                    );

                    // only return DOM tree if NOT hidden
//                    if (!hidden) {
//                        return (
//                            <PostCard key={index} post={post} onFavoriteTapped={callback} />
//                        );
//                    }
                });

                return (
                    <div className="post-list" layout vertical center>
                        {postNodes}
                    </div>
                );
            },

            _favoriteTapped: function(post, index) {
                post.favorite = !post.favorite;
                this.forceUpdate();
            }
        });
*/
