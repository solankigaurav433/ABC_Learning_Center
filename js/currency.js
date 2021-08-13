$(function () 
{
	// Get data .
	$.getJSON( "currencies.json", function( data ) 
	{
	// Call a function to create HTML for all the products.
	generateCurrencyHTML(data);
	});
})
	
function generateCurrencyHTML(data)
{ 
		products = $('#currencies');
		data.forEach(function (item, index) 
		{ 
			// Populate currency select item data.
			products.append($('<option class="currencies__option" value="'+item.value+'" symbol="'+item.symbol+'" data-id="'+item.id+'">'+item.id+'</option>'));
		});
}