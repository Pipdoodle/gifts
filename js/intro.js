console.log(document)
var txt = document.getElementById("centerText");
txt.innerHTML = "New stuff";

function introText(index)
{


	txtSeq = ['hi', 'bye', 'sigh']
	times = []

	setTimeout(fade, 200, "#centerText", "in", txtSeq[index])
	index += 1
	setTimeout(fade, times[index], "#centerText", "out", null)
	if (index < txtSeq.length)
	{
		fade(txt, 1)
		fade(txt, 0)
		setTimeout(introText, 1200, index)
	}
}
function fade(element, dir, str)
{
	if (dir == "in")
	{
		$(element).fadeIn();
		txt.innerHTML = str
	}
	else
	{
		$(element).fadeOut();
	}
}

setTimeout(introText, 0, 0)
