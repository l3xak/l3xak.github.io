document.querySelectorAll('.item--card').forEach(card =>
    card.addEventListener('click', () => {
        window.location.href = card.dataset.url;
    })
);