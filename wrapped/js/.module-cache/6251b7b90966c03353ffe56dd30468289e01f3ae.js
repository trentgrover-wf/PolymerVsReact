/** @jsx React.DOM */

var PostCard = React.createClass({displayName: 'PostCard',

    render: function() {

        return (
            React.DOM.div( {className:"post-card", key:this.props.index}, 
                React.DOM.div( {className:"card-header"}, 
                    React.DOM.img( {src:this.props.post.avatar, width:"70", height:"70"}),
                    React.DOM.h2(null, this.props.post.username)
                ),
                React.DOM.p(null, this.props.post.text)
            )
        );

    }

});

//                    <button className={iconClass} onClick={callback}>FAV</button>
