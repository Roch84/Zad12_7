function Card(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name || 'Nie nadano nazwy';
	//this.columnID = columnID;
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');
		//var cardEdit = $('<button class="edit">Zmiana nazwy</button>');

		cardDeleteBtn.on('click', function(){
			self.removeCard();
		});
		
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription);
		//card.append(cardEdit);
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
		var self = this;
    		$.ajax({
      		url: baseUrl + '/card/' + self.id,
      		method: 'DELETE',
      		success: function(){
        		self.element.remove();
      		}
    	});
	},

	/*editCard: function(card, columnID) {
		var cardNewDescription = prompt('Podaj nową nazwę', card.text());
		var self = this;

		$.ajax({
				url: baseUrl + '/card/' + self.id,
				method: 'PUT',
				data: {
					name: cardNewDescription,
					bootcamp_kanban_column_id: columnID
				},
				success: function (response) {
					self.element.children('p').text(cardNewDescription);
				}
			});
		}*/
}