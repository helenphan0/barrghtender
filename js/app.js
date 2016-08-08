var ingredients = ['strong', 'salty', 'bitter', 'sweet', 'fruity', 'spicy'];

var Question = function(question) {
	this.question = question;
};

var strong = new Question(['Ye want it stiff, mate?']);
var salty = new Question(['Do ye like the taste of the sea?']);
var bitter = new Question(['A little something to make ye scowl?']);
var sweet = new Question(['Any sweets for your imbibement?']);
var fruity = new Question(['How about something to keep off the scurvy?']);
var spicy = new Question(['Ye need a bit of a kick in yer drink?']);

var questionList = [strong, salty, bitter, sweet, fruity, spicy];

var Ingredients = function(ingredient) {
	this.ingredient = ingredient;
};

var strongIngr = new Ingredients(['a glug of rum', 'slugs of whiskey', 'a sloppy splash of gin', 'a long pour of bourbon']);
var saltyIngr = new Ingredients(['an olive on a stick', 'salt-dusted rim', 'some fancy_@$% Himalayan salt', 'a wee bit of the ocean']);
var bitterIngr = new Ingredients(['a shake of bitters', 'a splash of tonic', 'a twist of lemon peel', 'a lump of crystallized ginger']);
var sweetIngr = new Ingredients(['three cubes of sugar', 'several spoonfuls of honey', 'a squirt of nectar', 'some tapioca pearls']);
var fruityIngr = new Ingredients(['a slice of orange', 'a cherry on top', 'chunks of pineapple', 'frozen blueberries']);
var spicyIngr = new Ingredients(['a hop of jalapeno', 'a few dashes of cholula', 'a sprinkle of pepper', 'a mini bottle of tobasco']);

var Pantry = function(pantry) {
	this.pantry = pantry;
};

var stockPantry = new Pantry([strongIngr, saltyIngr, bitterIngr, sweetIngr, fruityIngr, spicyIngr]);
console.log(stockPantry);


var i = 0;
var product = Math.floor((Math.random() * 4));

var Pref = function(preferences) {
	this.preferences = preferences;
};

var order = new Pref([]);

var mug = ['a wooden jug of questionable rum with', 'a tall flagon of ale with', 'a bejeweled chalice of wine with', 'a replica Indiana Jones holy grail cup of cave water with'];

function askQ() {
	if (i < 6) {
		var q = questionList[i].question;
		$('p.question').text(q);
		console.log(stockPantry.pantry[i].ingredient[product]);
	}
	else {
		$('p.question').text("That'll be 15 gold lubbers, mate.");
		$('ul').hide();
		createDrink(order);
	};
};

function mixDrink() {
	var answer = $('input:checked').val();
	var y = parseInt(answer);
	console.log(y);
	if (y == 1 && i < 6) {
		console.log(ingredients[i]);
		order.preferences.push(stockPantry.pantry[i].ingredient[product]);
	};
	i++;
	console.log(order);
};

function createDrink(){
	var html = '';
	html += '<p>' + 'You received' + '</p><p>' + mug[product] + '</p><p>' + '</p>';
	for (var x = 0; x < order.preferences.length; x++) {
		html += '<p>' + order.preferences[x] + '</p>'
	}
	$('.drinkorder').append(html);
};


$(document).ready(function(event) {
	askQ();
	$('.bartender').on('click', 'button', function(i) {
		i.preventDefault();
		mixDrink();
		$('input').prop('checked',false);
		askQ();
	});
});


