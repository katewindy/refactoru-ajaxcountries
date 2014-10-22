// CLIENT SIDE JS

console.log('TEST');

$(document).on('ready', function(){

	$(document).on('click', '#loadCountries', function(){
		$.get('/countries', {}, function(responseData, err){
			// console.log('err:', err);
			// console.log('response:',responseData);
			for (var i = 0; i < responseData.length; i++){
				$('#countryList').append('<li>' + responseData[i].name + '</li>');
			}
		});
	});

});