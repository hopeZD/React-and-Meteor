Chat = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("userData");
    Meteor.subscribe("messages");
    Meteor.subscribe("userStatus");

    return{
      currentUser: Meteor.user(),
      messages: Messages.find({}, {sort: {createdAt: 1}}).fetch(),
      onlineUsers: Meteor.users.find({}).fetch()
    }
  },

	render() {

		return(
			<div className="chat-room">
        <UserList users={this.data.onlineUsers} />
        <MessageList messages={this.data.messages} />
				<MessageForm currentUser={this.data.currentUser} />
			</div>
		);
	}
});