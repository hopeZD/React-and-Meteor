Message = React.createClass({
  
  render() {

    let avatar;

    if(_.isEmpty(this.props.avatar)) {
      avatar = <div className='avatar'>{this.props.owner.charAt(0).toUpperCase()}</div>;
    } else {
      avatar = <img src={this.props.avatar}/>;
    }


    return (
      <div className="message">
        { avatar }
        <div className='owner'>
          <span>{this.props.owner}</span>
          <span className='date'>{ moment(this.props.createdAt).fromNow() }</span>
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
});


