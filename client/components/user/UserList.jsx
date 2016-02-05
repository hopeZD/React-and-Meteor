const { Avatar, Card } = mui;

UserList = React.createClass({
  render() {
    const allOnlineUsers = _.map(this.props.users, (user, key) => {
      let avatar;
      if(_.isEmpty(user.avatar)) {
        avatar = <Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>;
      } else {
        avatar = <Avatar src={user.avatar}/>;
      }
      return (
        <li key={key}>
          { avatar }
          <div>{user.username}</div>
        </li>
      );
    });

    return (
      <Card style={{overflow: 'visible'}} className='online-list'>
        <h3>在线人数 {_.size(this.props.users)}</h3>
        <ul>
          { allOnlineUsers }
        </ul>
      </Card>
    );
  }
});
 

