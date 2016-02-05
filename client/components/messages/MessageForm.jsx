const { TextField, RaisedButton, Card } = mui;

MessageForm = React.createClass({
  
  getInitialState() {
    return {
      inputValue: ''
    };
  },

  getStyles() {
    return {
      textField: {
        marginRight: '5px',
        transition: 'none',
        height: '45px',
        width: '80%',
      },
      label: {
        fontWeight: '600',
        fontSize: '14px',
        padding: '0 12px',
      },
      button: {
        minWidth: 0,
      }
    };
  },

  _handleChange(e) {
    this.setState({inputValue: this.refs.message.getValue()});
  },

  _handleSubmit(e) {
    e.preventDefault();
    const message = this.refs.message.getValue();
    const currentUser = this.props.currentUser;
    const username = currentUser.username;
    const avatar = currentUser.avatar;

    Meteor.call('messagesAdd', username, avatar, message, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      this.setState({inputValue: ''});
    });
  },

  render() {
    let styles = this.getStyles();

    return (
      <Card className="message-form">
        <form onSubmit={ this._handleSubmit }>
          <TextField
            ref="message"
            style={styles.textField}
            value={this.state.inputValue}
            onChange={this._handleChange}
            hintText="说点儿什么"
            multiLine={true} />

          <RaisedButton
            style={styles.button}
            labelStyle={styles.label}
            type="submit"
            label="发送"
            primary={true} />
        </form>
      </Card>
    );
  }
});


