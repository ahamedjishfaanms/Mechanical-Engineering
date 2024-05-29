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
            title = 'The Rise of Robots: Exploring Future Job Trends';
            text = 'In the realm of technological advancements, the rise of robots is revolutionizing the way we work and shaping the future landscape of employment. Fueled by advancements in robotics and artificial intelligence (AI), automation is driving significant changes in various industries, from manufacturing and logistics to healthcare and customer service. As robots become more sophisticated and capable of performing a wider range of tasks, the nature of work is evolving. While automation eliminates certain jobs, it also creates new opportunities for employment in areas like robotics engineering, AI development, and cybersecurity. Certain industries are experiencing significant transformations due to the integration of robotics, with robots revolutionizing production processes in manufacturing, assisting surgeons in complex procedures in healthcare, and enhancing customer experiences in retail and hospitality. While the rise of robots offers numerous benefits, it also presents challenges that must be addressed, such as concerns about job displacement, the widening skills gap, ethical considerations surrounding privacy and algorithmic bias, and the impact on human relationships. Despite the challenges, the rise of robots presents an opportunity for innovation and growth. By embracing technological advancements and adapting to changing job dynamics, individuals and organizations can harness the potential of robots to drive economic prosperity and societal progress. Collaboration between humans and robots, known as cobot collaboration, is emerging as a promising approach to enhance productivity and creativity in the workplace. The rise of robots is reshaping the future of work, presenting both opportunities and challenges for individuals, industries, and societies. By understanding the evolving job market and proactively preparing for the changes brought about by automation, we can navigate the transition towards a future where humans and robots collaborate harmoniously to achieve shared goals. As we embrace innovation and adapt to the changing landscape, we can harness the transformative power of robots to create a brighter and more prosperous future for all. ';
            imgSrc = 'whatsapp.png';
            break;
        case 'blog2':
            title = 'Introduction to AI, Machine Learning, Robotics, and AI Tools for Students';
            text = 'This course equips students aged 10 to 17 with a foundational understanding of Artificial Intelligence (AI), Machine Learning (ML), and Robotics, with no prior experience necessary. Through a four-week program with sessions held three days a week (Monday, Wednesday, Friday) for one month on Google Meet, students will explore the historical evolution and everyday applications of AI, delve into the basics of ML with supervised, unsupervised, and reinforcement learning concepts, participate in hands-on activities to build a simple ML model, understand the components and types of robots in their real-world applications, and finally, explore AI tools designed to enhance academic performance and assignment efficiency by utilizing AI-based learning platforms, research and writing tools, and collaborative project management features.';
            imgSrc = 'whatsapp.png';
            break;
        case 'blog3':
            title = 'Unlocking Potential: The Journey with KidAI';
            text = 'In the realm of technological advancements, the rise of robots is revolutionizing the way we work and shaping the future landscape of employment. Fueled by advancements in robotics and artificial intelligence (AI), automation is driving significant changes in various industries, from manufacturing and logistics to healthcare and customer service. As robots become more sophisticated and capable of performing a wider range of tasks, the nature of work is evolving. While automation eliminates certain jobs, it also creates new opportunities for employment in areas like robotics engineering, AI development, and cybersecurity. Certain industries are experiencing significant transformations due to the integration of robotics, with robots revolutionizing production processes in manufacturing, assisting surgeons in complex procedures in healthcare, and enhancing customer experiences in retail and hospitality. While the rise of robots offers numerous benefits, it also presents challenges that must be addressed, such as concerns about job displacement, the widening skills gap, ethical considerations surrounding privacy and algorithmic bias, and the impact on human relationships. Despite the challenges, the rise of robots presents an opportunity for innovation and growth. By embracing technological advancements and adapting to changing job dynamics, individuals and organizations can harness the potential of robots to drive economic prosperity and societal progress. Collaboration between humans and robots, known as cobot collaboration, is emerging as a promising approach to enhance productivity and creativity in the workplace. The rise of robots is reshaping the future of work, presenting both opportunities and challenges for individuals, industries, and societies. By understanding the evolving job market and proactively preparing for the changes brought about by automation, we can navigate the transition towards a future where humans and robots collaborate harmoniously to achieve shared goals. As we embrace innovation and adapt to the changing landscape, we can harness the transformative power of robots to create a brighter and more prosperous future for all.';
            imgSrc = 'whatsapp.png';
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

