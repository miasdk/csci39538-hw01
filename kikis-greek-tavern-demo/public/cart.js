document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage or create empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count in navbar
    updateCartCount();
    
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            
            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(item => item.name === name);
            
            if (existingItemIndex !== -1) {
                // Item exists, increment quantity
                cart[existingItemIndex].quantity += 1;
            } else {
                // Item doesn't exist, add new item
                cart.push({
                    name: name,
                    price: price,
                    image: image,
                    quantity: 1
                });
            }
            
            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show quick notification
            showNotification(`${name} added to cart!`);
        });
    });
    
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = itemCount.toString();
            cartCountElement.style.display = itemCount > 0 ? 'flex' : 'none';
        }
    }
    
    function showNotification(message) {
        // Create notification element if it doesn't exist
        let notification = document.getElementById('cart-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'cart-notification';
            notification.className = 'fixed top-20 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300 opacity-0';
            document.body.appendChild(notification);
        }
        
        // Set message and show notification
        notification.textContent = message;
        notification.classList.remove('opacity-0');
        notification.classList.add('opacity-100');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('opacity-100');
            notification.classList.add('opacity-0');
        }, 3000);
    }
});