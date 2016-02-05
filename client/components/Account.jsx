const {
  RaisedButton,
  FlatButton,
  TextField,
  Card
} = mui;

Account = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("userData");
    return {
      currentUser: Meteor.user()
    }
  },

  getInitialState() {
    return {
      user: {},
    };
  },
  
  _handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.getValue();
    const url = `https://api.github.com/users/${username}`;

    HTTP.call('get', url, (error, res) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({user: JSON.parse(res.content)})
      }
    });
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _handleClick(e) {
    e.preventDefault();

    Meteor.call('userProfile', this.state.user, (error) => {
      if(error) {
        console.log(error);
        return;
      }
      this.context.router.push('/chat');
    });
  },

  render() {
    let GitHubInfo;

    if(!_.isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />

          <RaisedButton
            style={{display: 'block', margin: '30px auto 0', width: '180px'}}
            primary={true}
            label="save"
            onClick={this._handleClick} />
        </div>
      );

    }else if(this.data.currentUser && this.data.currentUser.avatar) {
      GitHubInfo = (
        <UserInfo userInfo={this.data.currentUser} />
      );
    }

    
    return (
      <div className='account'>
        <Card className='content'>
          <form onSubmit={this._handleSubmit}>
            <TextField
              hintText="Github Account"
              ref='username'/>

            <FlatButton
              type="submit"
              primary={true}
              label="search github" />
          </form>
          { GitHubInfo }
        </Card>
      </div>
    );
  }
});