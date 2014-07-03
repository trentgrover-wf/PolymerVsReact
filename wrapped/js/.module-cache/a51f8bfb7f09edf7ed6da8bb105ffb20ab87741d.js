/** @jsx React.DOM */

var PostCard = React.createClass({displayName: 'PostCard',

    render: function() {

        var iconStyle = {
            position: 'absolute',
            top: '3px',
            right: '3px',
            fill: '#636363'
            };

        if (this.props.post.favorite) {
            iconStyle.color = 'red';
        }

        /*
        // return DOM tree even if hidden
        return (
            <div className="post-card" hidden={this.props.hidden}>
                <div className="card-header">
                    <img src={this.props.post.avatar} width="70" height="70"/>
                    <h2>{this.props.post.username}</h2>
                </div>
                <button style={iconStyle} onClick={this.props.onFavoriteTapped}>FAV</button>
                <p>{this.props.post.text}</p>
            </div>
        );
        */

        // return DOM tree only if NOT hidden
        if (this.props.hidden) {
            return;
        }

        return (
            React.DOM.div( {className:"post-card", hidden:this.props.hidden}, 
                React.DOM.div( {className:"card-header"}, 
                    React.DOM.img( {src:this.props.post.avatar, width:"70", height:"70"}),
                    React.DOM.h2(null, this.props.post.username)
                ),
                React.DOM.button( {style:iconStyle, onClick:this.props.onFavoriteTapped}, "FAV"),
                React.DOM.p(null, this.props.post.text)
            )
        );
    }

});


                    /*
                    // version with actual dom manipulation
                    if ((self.props.show === 'all') ||
                        (self.props.show === 'favorites' && post.favorite)) {
                        return (
                            <div className="post-card" key={index}>
                                <div className="card-header">
                                    <img src={post.avatar} width="70" height="70"/>
                                    <h2>{post.username}</h2>
                                </div>
                                <button className={iconClass} onClick={callback}>FAV</button>
                                <p>{post.text}</p>
                            </div>
                        );
                    }
                    */
