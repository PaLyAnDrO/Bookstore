export function renderProductsGrid(books) {

    let productsHTML = '';

    books.forEach((book) => {
        productsHTML += `
        <div class="product-container">
			<div class="product-image-container">
				<a href="">
					<img class="product-image"
					     src="/data/book_images/${book.image_url}">
				</a>
			</div>

			<a href="">
				<div class="product-name">
					${book.title}
				</div>
			</a>

			<div class="author-name limit-text-to-2-lines">
			    ${book.author}
			</div>


			<div class="product-rating-container">
				<img src="/images/icons/star-rating.svg" alt="" class="rating-icon">
				<div class="product-rating-count">
					${book.rating}
				</div>
			</div>

			<div class="product-price">
				$${book.price}
			</div>

			<div class="product-spacer"></div>

			<button class="add-to-cart-button button-primary js-add-to-cart"
			        data-product-id="${book.id}">
				Add to Cart
			</button>
		</div>
        `;
    });
    return productsHTML;
}
