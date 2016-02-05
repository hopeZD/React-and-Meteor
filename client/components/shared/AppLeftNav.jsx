const { LeftNav, List, ListItem } = mui;

const SelectableList = selectableEnhance.SelectableContainerEnhance(List);

AppLeftNav = React.createClass({
  getInitialState() {
    return {
      open: false,
      selectedIndex: ''
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.setState({
      selectedIndex: this._getSelectedIndex()
    })
  },

  componentWillReceiveProps() {
    this.setState({
      selectedIndex: this._getSelectedIndex()
    })
  },

  _getSelectedIndex() {
    return this.context.router.isActive('/home') ? '/home' :
      this.context.router.isActive('/signup') ? '/signup' :
      this.context.router.isActive('/account') ? '/account' :
      this.context.router.isActive('/chat') ? '/chat' :
      this.context.router.isActive('/login') ? '/login' : '';
  },

  render() {
    let styles = {
      header: {
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: '#ff4081',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    };
    let currentUser = this.props.currentUser;

    return (
      <LeftNav open={this.state.open}
               docked={false}
               onRequestChange={open => this.setState({open})}>
        <div style={styles.header}
          onTouchTap={this.handleTouchTapHeader}>
          S3
        </div>
        <SelectableList
          selectedItemStyle={styles.selectedList}
          valueLink={{
            value: this.state.selectedIndex,
            requestChange: this.handleUpdateSelectedIndex, }}>
          <ListItem
            value="/home"
            primaryText="Home" />
          <ListItem
            value={ currentUser ? '/account' : '/signup' }
            primaryText={ currentUser ? 'Account' : 'Sign up' } />
          <ListItem
            value={ currentUser ? '/chat' : '/login' }
            primaryText={ currentUser ? 'Chat' : 'Log in' } />
        </SelectableList>
      </LeftNav>
    );
  },

  handleToggle() {
    this.setState({open: !this.state.open});
  },

  handleUpdateSelectedIndex(e, index) {
    this.context.router.push(index);
    this.setState({
      open: false,
      selectedIndex: index,
    });
  },

  handleTouchTapHeader() {
    this.context.router.push('/home');
    this.setState({open: false});
  }
});