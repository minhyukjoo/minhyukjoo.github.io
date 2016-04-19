
function showGrades()
{
	var x = document.getElementById('gradetable');
	x.classname = 'show';
	x.style.display="inline";
}


function hideGrades()
{
	var x = document.getElementById('gradetable');
	x.style.display="none";
}

function withdraw(r) 
{
	var x;
	var i = r.parentNode.parentNode.rowIndex;
   
    if (confirm("Are you sure?") == true) {
        x = "You have successfully withdrew the class!";
        document.getElementById("withdrawtable").deleteRow(i);
    } else {
        x = "";
    }
}

function showTranscript()
{
	alert("You have successfully requested for official transcript!");
}

function addClass()
{	
	alert("You have a hold(s). Please see your advisor!");
}