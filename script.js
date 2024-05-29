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
            title = 'Unlocking Potential: The Journey with KidAI';
            text = 'Welcome to KidAI, where we're dedicated to nurturing the future innovators of tomorrow. 🚀 Our mission is simple: to provide accessible and engaging educational resources in emerging technologies, empowering young minds to unlock their potential and become the innovators and problem solvers the world needs. Join us on a journey where creativity meets technology, and possibilities are endless. 🌟

Discovering the World of AI, ML, and Robotics:
In today's digital age, understanding emerging technologies like Artificial Intelligence (AI), Machine Learning (ML), and Robotics is essential. Our comprehensive curriculum introduces students aged 10 to 17 to the fascinating world of AI, ML, and Robotics. Through interactive modules and hands-on projects, students explore concepts such as predictive analytics, deep learning, and robot programming, gaining valuable insights into these transformative fields. 💡

Empowering Creativity and Innovation:
At KidAI, we understand that innovation thrives in environments where creativity is nurtured. That's why our curriculum encourages creative exploration and problem-solving. From designing AI algorithms to building and programming robots, students are empowered to think critically and develop a passion for innovation. Through project-based learning and collaborative activities, students unleash their creativity and transform ideas into reality. 🎨

Expert Guidance and Support:
Our team of experienced instructors is dedicated to providing expert guidance and support to students throughout their learning journey. Whether it's troubleshooting a coding challenge or offering mentorship on a robotics project, our instructors are committed to helping students succeed. With personalized feedback and encouragement, students gain confidence and develop essential skills for future success. 👩‍🏫

Preparing for the Future:
In today's rapidly evolving technological landscape, preparing students for the future is more important than ever. At KidAI, we go beyond traditional education by equipping students with the skills and knowledge they need to thrive in tomorrow's world. Our curriculum not only prepares students for future job opportunities but also cultivates critical thinking, problem-solving, and entrepreneurial skills essential for success in any field. 🌐

Join the KidAI Community:
Embark on a journey of discovery and innovation with KidAI. Join our vibrant community of learners and educators and unlock your potential to shape the future of technology. Whether you're a student eager to explore AI, ML, and Robotics or an educator passionate about empowering the next generation, there's a place for you at KidAI. Together, let's inspire creativity, foster innovation, and change the world, one idea at a time. 🤝

Conclusion:
At KidAI, we believe that every young mind has the potential to make a difference. By providing accessible and engaging educational resources in AI, ML, and Robotics, we empower students to unlock their potential and become the innovators and leaders of tomorrow. Join us on this exciting journey and discover the endless possibilities with KidAI. 🚀';
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
