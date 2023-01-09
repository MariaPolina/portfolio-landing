// video

const playVideoButton = document.querySelector('.video__icon');
const mainVideo = document.getElementById('mainVideo');

playVideoButton.addEventListener("click", function () {
    mainVideo.play();
    document.querySelector('.video__start').style.display = "none";
    mainVideo.setAttribute("controls", true);
});

mainVideo.addEventListener('ended', function () {
    mainVideo.load();
    document.querySelector('.video__start').style.display = "flex";
    mainVideo.removeAttribute("controls");
}, false);


// animation

const animatedItems = document.querySelectorAll('.moove');

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function animateOnScroll() {
    for (let index = 0; index < animatedItems.length; index++) {
        const animatedItem = animatedItems[index];
        const animatedItemHeight = animatedItem.offsetHeight;
        const animatedItemOffset = offset(animatedItem).top;
        const animationStart = 2;

        let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

        if (animatedItemHeight > window.innerHeight) {
            animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
        }

        if ((scrollY > animatedItemOffset - animatedItemPoint) && scrollY < (animatedItemOffset + animatedItemHeight)) {
            animatedItem.classList.add('active');
        } else {
            if (!animatedItem.classList.contains('no-hide')) {
                //animatedItem.classList.remove('active');
            }
        }
    }
}

if (animatedItems.length > 0) {
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(() => {
        animateOnScroll();
    }, 300);

}