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

var drinkName = {
	adj1: ['Itty Bitty', 'Monstrous', 'Lip Smackin', 'Hellavuh'],
	adj2: ['Teeth Rattlin', 'Belly Bustin', 'Fancy Smellin', 'Toe Curling'],
	noun: ['Poseidon Bringer', 'Sea Dog', 'Shin Breaker', 'Lil Lochness'],
};

var i = 0;
var product = Math.floor((Math.random() * 4));

var Pref = function(preferences) {
	this.preferences = preferences;
};

var order = new Pref([]);

var mug = ['a wooden jug of questionable rum', 'a tall flagon of fizzy ale', 'a bejeweled chalice of wine', 'a replica Indiana Jones holy grail cup of cave water'];

function askQ() {
	$('#reset').hide();
	if (i < 6) {
		var q = questionList[i].question;
		$('p.question').text(q);
	}
	else {
		$('p.question').text("That'll be 15 gold lubbers, mate.");
		$('ul').hide();
		$('#submit').hide();
		$('h2').hide();
		$('#reset').show();
		createDrink(order);
	};
};

function mixDrink() {
	var answer = $('input:checked').val();
	var y = parseInt(answer);
	console.log(y);
	if (y === 1 && i < 6) {
		console.log(ingredients[i]);
		console.log(stockPantry.pantry[i].ingredient[product]);
		order.preferences.push(stockPantry.pantry[i].ingredient[product]);
	}
	else if (y != 1 && y != 0) {
		return false
	};
	i++;
	console.log(order);
};

function mixing() {
	if ( i === 0 && parseInt($('input:checked').val()) == 1) {
		$('section.mixing').append('<p>' + 'Mixing yer drink..' + '</p><p>' + ingredients[i] + '</p>');
	}
	else if (i >= 1 && i < 7 && parseInt($('input:checked').val()) == 1) {
		$('section.mixing').append('<p>' + ingredients[i] + '</p>');
	};
};

function createDrink() {
	var html = '';
	var concoction = drinkName.adj1[product] + ' ' + drinkName.adj2[product] + ' ' + drinkName.noun[product];
	html += '<p>' + 'I call this one the..' + '</p><h3>' + concoction + '</h3><p>' + mug[product] + '</p>';
	if (order.preferences.length > 0) {
		html += '<p>' + 'with' + '</p>';
	};
	for (var x = 0; x < order.preferences.length; x++) {
		html += '<p>' + order.preferences[x] + '</p>'
	};
	$('.drinkorder').append(html);
	console.log(Pref);
	console.log(order);
};

function reset() {
	$('#reset').click(function() {
		i = 0;
		order.preferences = [];
		$('.drinkorder').empty();
		$('.mixing').empty();
		$('#reset').hide();
		$('ul').show();
		$('#submit').show();
		$('h2').show();
		askQ();
	});
};

$(document).ready(function(event) {
	$('#reset').hide();
	askQ();
	$('.bartender').on('click', 'button', function(i) {
		i.preventDefault();
		mixing();
		mixDrink();
		$('input').prop('checked',false);
		askQ();
	});
	reset();
});
