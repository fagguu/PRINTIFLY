<script>
    // Scroll-triggered animation for image boxes
    window.addEventListener('scroll', function () {
        const images = document.querySelectorAll('.image-box');
        images.forEach(image => {
            const position = image.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                image.classList.add('active');
            }
        });
    });

    // Customer review carousel
    const reviews = [
        {
            quote: '"This product exceeded all my expectations! The quality is outstanding and the customer service was top-notch."',
            author: "- John Doe"
        },
        {
            quote: '"I have been using this product for over a year, and it has never let me down. Highly recommended!"',
            author: "- Jane Smith"
        },
        {
            quote: '"Excellent product! Great value for money and the delivery was super fast!"',
            author: "- Mark Johnson"
        }
    ];

    let currentReview = 0; // Keep track of the current review

    function updateReview() {
        const reviewQuote = document.getElementById("review-quote");
        const reviewAuthor = document.getElementById("review-author");

        // Fade out current review
        reviewQuote.style.opacity = 0;
        reviewAuthor.style.opacity = 0;

        // Update review content after the fade-out transition
        setTimeout(() => {
            currentReview = (currentReview + 1) % reviews.length; // Cycle through reviews
            reviewQuote.textContent = reviews[currentReview].quote;
            reviewAuthor.textContent = reviews[currentReview].author;

            // Fade in new review
            reviewQuote.style.opacity = 1;
            reviewAuthor.style.opacity = 1;
        }, 500); // 500ms matches the CSS fade-out duration
    }

    // Change review every 3 seconds
    setInterval(updateReview, 3000);

</script>
