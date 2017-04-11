/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

facebookProfile = {
	name: "",
	friends: 0,
	messages: [],
	postMessage : function(message) {
		messages.push("New message");
	},
	deleteMessage : function(index) {
		messages.splice(index,1);
	},
	addFriend: function() {
		return friends += 1;
	},
	removeFriend: function() {
		return friends -= 1;
	}

}