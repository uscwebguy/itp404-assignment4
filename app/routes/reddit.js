import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function(){
		var redditUrl = "https://www.reddit.com/r/emberjs.json";
		return $.ajax({ 
			url: redditUrl
		}).then( function( response ){
			console.log(response);
			var redditData = response.data.children.map( function( subreddit ){
				return subreddit.data;
			});
			console.log( redditData );
			return redditData;
		} );
	}
});
