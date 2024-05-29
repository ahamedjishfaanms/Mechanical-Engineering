document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});
function openPopup(blogId) {
    document.getElementById('popup').style.display = 'flex';
    // Set the content of the popup based on the clicked blog post
    let title, text;
    switch (blogId) {
        case 'blog1':
            title = 'Blog Post Title 1';
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque nec justo bibendum fringilla.';
            break;
        case 'blog2':
            title = 'Blog Post Title 2';
            text = 'Phasellus interdum nisl at lacus egestas, nec interdum lacus fermentum. Quisque ut eros magna.';
            break;
        case 'blog3':
            title = 'Blog Post Title 3';
            text = 'Sed ac lorem nec ligula commodo suscipit. Nulla facilisi. Suspendisse potenti. Proin vitae urna quis ligula.';
            break;
    }
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-text').innerText = text;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
