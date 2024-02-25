const articles = document.querySelectorAll("article");

let observer = new IntersectionObserver((e) => {
    console.log(e)
    e.forEach((article) => {
        if (article.isIntersecting) {
            article.target.style.opacity = 1;
        } else {
            article.target.style.opacity = 0;
        }
    });
});
Array.from(articles).map((a) => {
    observer.observe(a);
});