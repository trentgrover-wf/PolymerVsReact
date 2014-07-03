
    var PostCard = React.createClass({

        render: function() {

            return (
                <div className="post-card" key={this.props.index}>
                    <div className="card-header">
                        <img src={this.props.post.avatar} width="70" height="70"/>
                        <h2>{this.props.post.username}</h2>
                    </div>
                    <p>{this.props.post.text}</p>
                </div>
            );

        }

    });

//                    <button className={iconClass} onClick={callback}>FAV</button>
