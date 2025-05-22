let index = 0;
const regex = new RegExp(`[^/]*\.jpg`);
function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length){
        index = 0;
    }
    if (n < 0){
        index = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
    document.getElementById("source").innerHTML = slides[index].src.match(regex);
}
function nextSlide() {
    showSlide(++index);
}
function prevSlide() {
    showSlide(--index);
}
showSlide(0);