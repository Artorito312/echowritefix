fetch('stories.json')
    .then(res => res.json())
    .then(stories => {
        const carousel = document.getElementById('carouselContent');

        stories.forEach((story, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carousel.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <a href="${story.content}">
                        <img src="${story.image}" class="d-block w-100" alt="${story.title}">
                        <div class="story-card">
                            <h3>${story.title}</h3>
                            <p>By ${story.author}</p>
                        </div>
                    </a>
                </div>
            `;
        });
    })
    .catch(err => console.error('Failed to load stories:', err));