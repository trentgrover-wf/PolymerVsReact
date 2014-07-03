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
