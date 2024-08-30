export default function startCounter(voteAverage){
    const fullStars = Math.floor(voteAverage / 2);
    const hasHalfStar = voteAverage % 2 >= 1;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starsHtml = '★'.repeat(fullStars)
        .split('')
        .map(star => '<span class="star full-star">' + star + '</span>')
        .join('');

    const halfStarHtml = hasHalfStar ? '<span class="star half-star">★</span>' : '';

    const emptyStarsHtml = '☆'.repeat(emptyStars)
        .split('')
        .map(star => '<span class="star empty-star">' + star + '</span>')
        .join('');

    return starsHtml + halfStarHtml + emptyStarsHtml;
}