function changeImage()
{
element = document.getElementById('example')
if (element.src.match("out"))
  {
  element.src="yodinha.jpg";
  }
else
  {
  element.src="gaules.jpg";
  }
}