const { IconButton, IconMenu, MenuItem, Divider } = mui;

LogOutMenu = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
    let iconButtonElement = (
      <IconButton style={{height: '64px', width: '64px', marginLeft: '25px'}}>
        <ActionAccountCircle color='#fff' />
      </IconButton>
    );

    return (
      <IconMenu iconButtonElement={iconButtonElement} anchorOrigin={{vertical: 'center', horizontal: 'middle'}}>
        <MenuItem primaryText={this.props.currentUser.username} disabled={true} style={{lineHeight: '30px'}} />
        <Divider />
        <MenuItem primaryText="Sign out" style={{lineHeight: '30px'}} onTouchTap={this._onTouchTap} />
      </IconMenu>
    );
  },

  _onTouchTap() {
    Meteor.logout();
    this.context.router.push('/home');
  }
});