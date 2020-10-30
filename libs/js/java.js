	
	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/neighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				
			},
		
			success: function(result) {

				console.log(result);
	
				if (result.status.name == "ok") {

					$('#name').html(result['data'][0]['name']);
					$('#code').html(result['data'][0]['countryCode']);
					$('#status').html(result['data'][0]['fcodeName']);
					$('#txtPopulation').html(result['data'][0]['population']);
					

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
			
			}
		}); 
	

    });
    
    $('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/toponym.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCountry').html(result['data'][0]['countryName']);
					$('#txtToponym').html(result['data'][0]['toponymName']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	

  
    
    $('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/postal.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postal: $('#postalCode').val(),
				count: $('#country').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtPostalCode').html(result['data'][0]['placeName']);
					$('#txtCountry1').html(result['data'][0]['adminName2']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});