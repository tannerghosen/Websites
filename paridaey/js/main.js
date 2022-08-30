function hideandseek(page)
{
	switch(page)
	{
		case "home":
			$("#server1").removeAttr("style").hide();
			$("#server2").removeAttr("style").hide();
			$("#about").removeAttr("style").hide();
			$("#home").show();
			break;
		case "server1":
			$("#home").removeAttr("style").hide();
			$("#server2").removeAttr("style").hide();
			$("#about").removeAttr("style").hide();
			$("#server1").show();
			break;
		case "server2":
			$("#home").removeAttr("style").hide();
			$("#server1").removeAttr("style").hide();
			$("#about").removeAttr("style").hide();
			$("#server2").show();
			break;
		case "about":
			$("#home").removeAttr("style").hide();
			$("#server2").removeAttr("style").hide();
			$("#server1").removeAttr("style").hide();
			$("#about").show();
			break;
		default:
			break;
	}
}

function servers()
{
	$('.bone').each(function(i)
	{
		console.log(i);
		var servername = $(this).children(".window").children(".title-bar").text();
		console.log(servername)
		var ahref = $(this).attr("id");
		console.log(ahref);
		$('#list').append("<li><a onclick=hideandseek('"+ahref+"') href='#'>"+servername+"</a>");
		$('#buttonlist').append("<button onclick=hideandseek('"+ahref+"')>"+servername+"</button>");
	})
}