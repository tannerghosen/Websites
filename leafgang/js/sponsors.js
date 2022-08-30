var slide = 1;

function next(n) 
{
	show(slide += n);
}

function currentSlide(n) 
{
	show(slide = n);
}

function show(n) 
{
	var i;
	var slides = document.getElementsByClassName("slides");
	if (n > slides.length) 
	{
		slide = 1;
	}
	if (n < 1) 
	{
		slide = slides.length
	}
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";
	}
	slides[slide-1].style.display = "block"; 
} 

show(slide);