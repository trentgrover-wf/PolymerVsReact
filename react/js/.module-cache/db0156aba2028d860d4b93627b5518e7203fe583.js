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

        return (
            React.DOM.div( {className:"post-card", key:this.props.index, hidden:this.props.hidden}, 
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

// this.props.index
// this.props.hidden
// this.props.post.favorite
// this.props.post.avatar
// this.props.post.username
// this.props.post.text
// this.props.onFavoriteTapped

/*
                        <div className="post-card" key={index}
                            hidden={(self.props.show === 'favorites' && !post.favorite)}>
                            <div className="card-header">
                                <img src={post.avatar} width="70" height="70"/>
                                <h2>{post.username}</h2>
                            </div>
                            <button className={iconClass} onClick={callback}>FAV</button>
                            <p>{post.text}</p>
                        </div>
*/
