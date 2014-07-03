/** @jsx React.DOM */

var PostCard = React.createClass({displayName: 'PostCard',

    render: function() {
/*
        .card-header {
            margin-bottom: 10px;

            align-items: center;
            flex-direction: row;
            display: flex;
        }
        .card-header h2 {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 300;
        }
        .card-header img {
            width: 70px;
            border-radius: 50%;
            margin: 10px;
        }
*/
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

        var buttonStyle = {
            position: 'absolute',
            top: '3px',
            right: '3px',
            fill: '#636363'
            };

        if (this.props.post.favorite) {
            buttonStyle.color = 'red';
        }

        // return DOM tree even if hidden
        return (
            React.DOM.div( {style:cardStyle, hidden:this.props.hidden}, 
                React.DOM.div( {className:"card-header"}, 
                    React.DOM.img( {src:this.props.post.avatar, width:"70", height:"70"}),
                    React.DOM.h2(null, this.props.post.username)
                ),
                React.DOM.button( {style:buttonStyle, onClick:this.props.onFavoriteTapped}, "FAV"),
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
