/** @jsx React.DOM */

var PostList = React.createClass({displayName: 'PostList',

    render: function() {

        /*
        var cardStyle = {
            marginBottom: '30px',
            display: 'block',
            position: 'relative',
            backgroundColor: 'white',
            padding: '20px',
            width: '100%',
            fontSize: '1.2rem',
            fontWeight: '300'
        };

        return (
            <div style={cardStyle} hidden={this.props.hidden}>
                <div style={headerStyle}>
                    <img src={this.props.post.avatar} width="70" height="70" style={avatarStyle}/>
                    <h2 style={usernameStyle}>{this.props.post.username}</h2>
                </div>
                <button style={buttonStyle} onClick={this.props.onFavoriteTapped}>FAV</button>
                <p>{this.props.post.text}</p>
            </div>
        );
        */

        var listStyle = {
            display: 'block',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex'
        };

        return (
            React.DOM.div( {style:listStyle}
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
