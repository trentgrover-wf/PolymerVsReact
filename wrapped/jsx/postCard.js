/** @jsx React.DOM */

var PostCard = React.createClass({

    render: function() {

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

        var headerStyle = {
            marginBottom: '10px',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex'
        };

        var avatarStyle = {
            width: '70px',
            borderRadius: '50%',
            margin: '10px'
        };

        var usernameStyle = {
            margin: '0',
            fontSize: '1.8rem',
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
    }

});
