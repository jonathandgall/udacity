/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

facebookProfile = {
	name: "",
	friends: 0,
	messages: [],
	postMessage : function(message) {
		facebookProfile.messages.push(message);
	},
	deleteMessage : function(index) {
		facebookProfile.messages.splice(index,1);
	},
	addFriend: function() {
		return facebookProfile.friends += 1;
	},
	removeFriend: function() {
		return facebookProfile.friends -= 1;
	}
};

facebookProfile.postMessage("Hello");
console.log(facebookProfile.messages)