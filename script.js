document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    let eyes = document.getElementById('neuil');
    var rect = document.getElementById('section1').getBoundingClientRect();
    eyes.style.top = event.clientY * 100 / rect.height + "px";
    eyes.style.left = Math.max(event.clientX * 100 / rect.width - 0.05 * rect.width, -25) + "px";
}