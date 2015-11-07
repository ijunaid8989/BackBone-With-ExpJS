var Book = Backbone.Model.extend({
	idAttribute : "_id"
});

var BookCollection = Backbone.Collection.extend({
	model : Book,
	url : "/books"
});

var BookView = Backbone.View.extend({
	tagName : 'li',
	addClass : 'book',
	render : function(){
		var template = $("#book-template").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;
	}
});

var BookCollectionView = Backbone.View.extend({
	tagName : 'ul',
	addClass : 'books',
	render : function(){
		this.collection.each(function(book){
			var bookView = new BookView({ model : book });
		this.$el.append(bookView.render().el);	
		}, this);
		return this;
	}
});