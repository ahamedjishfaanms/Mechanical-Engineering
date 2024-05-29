document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});
function openPopup(blogId) {
    document.getElementById('popup').style.display = 'flex';
    // Set the content of the popup based on the clicked blog post
    let title, text, imgSrc;
    switch (blogId) {
        case 'blog1':
            title = 'Blog Post Title 1';
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque nec justo bibendum fringilla. Proin volutpat nisi id sapien gravida, at consequat tortor gravida. Vivamus quis metus tincidunt, bibendum quam a, fringilla purus.';
            imgSrc = 'button-image.png';
            break;
        case 'blog2':
            title = 'Blog Post Title 2';
            text = 'Phasellus interdum nisl at lacus egestas, nec interdum lacus fermentum. Quisque ut eros magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
            imgSrc = 'button-image.png';
            break;
        case 'blog3':
            title = 'Blog Post Title 3';
            text = 'Sed ac lorem nec ligula commodo suscipit. Nulla facilisi. Suspendisse potenti. Proin vitae urna quis ligula sollicitudin scelerisque. Ut scelerisque risus nec risus tincidunt viverra.';
            imgSrc = 'button-image.png';
            break;
    }
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-text').innerText = text;
    document.querySelector('.popup-btn img').src = imgSrc;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Ensure the popup can be closed by clicking the close button
document.querySelector('.close-btn').addEventListener('click', closePopup);

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
