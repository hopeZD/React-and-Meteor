UserInfo = React.createClass({
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className='user-info'>
        <img src={ userInfo.avatar_url || userInfo.avatar } />
        <ul>
          <li>
            <b>{ userInfo.followers }</b>
            <span>followers</span>
          </li>
          <li>
            <b>{ userInfo.following }</b>
            <span>following</span>
          </li>
          <li>
            <b>{ userInfo.public_repos || userInfo.repos }</b>
            <span>repos</span>
          </li>
        </ul>
      </div>
    );
  }
});