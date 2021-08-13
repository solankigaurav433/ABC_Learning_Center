var default_content="";

$(document).ready(function(){
	checkURL();
	$('ul li a').click(function (e){
	checkURL(this.hash);
});

//filling in the default content
default_content = $('#pageContent').html();

setInterval("checkURL()",250);
});

var lasturl="";

function checkURL(hash)
{
	if(!hash) 
		hash=window.location.hash;
	
	if(hash != lasturl)
	{
		lasturl=hash;
		
		if(hash=="")
			$('#pageContent').html(default_content);
		else
		{
			if(hash=="#products")
				loadProducts();
			else
				loadPage(hash);
		}
	}
}


function loadPage(url)
{   
    $("#backendmessage").empty();
	url=url.replace('#','');
	$('#loading').css('visibility','visible');
	$.ajax({
		type: "POST",
		url: "load_page.php",
		data: 'page='+url,
		dataType: "html",
		success: function(msg)
		{
			if(parseInt(msg)!=0)
			{
				$('#pageContent').html(msg);
				$('#loading').css('visibility','hidden');
			}
		}
	});
}

