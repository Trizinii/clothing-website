// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
const body = document.body;
const themeButtons = document.querySelectorAll('.theme-btn');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartModal = document.getElementById('cartModal');
const authModal = document.getElementById('authModal');
const reviewModal = document.getElementById('reviewModal');
const deliveryModal = document.getElementById('deliveryModal');
const sizeChartModal = document.getElementById('sizeChartModal');
const sizeModal = document.getElementById('sizeModal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const backToTop = document.getElementById('backToTop');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const authButtons = document.getElementById('authButtons');
const clearCartBtn = document.getElementById('clearCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const addReviewBtn = document.getElementById('addReviewBtn');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const reviewForm = document.getElementById('reviewForm');
const deliveryInfo = document.getElementById('deliveryInfo');
const sizeChartBtn = document.getElementById('sizeChartBtn');
const sizeTabs = document.querySelectorAll('.size-tab');
const confirmSizeBtn = document.getElementById('confirmSize');
const sizeProductName = document.getElementById('sizeProductName');
const sizeOptionsContainer = document.getElementById('sizeOptions');
const cancelReviewBtn = document.getElementById('cancelReview');
const openSizeChartFromModal = document.getElementById('openSizeChartFromModal');

// Переменные для системы отзывов
let currentRating = 0;
let isHovering = false;
let hoverRating = 0;

// ===== ДАННЫЕ ТОВАРОВ =====
// ВАЖНО: Вставьте свои ссылки на изображения вместо image1.jpg, image2.jpg и т.д.
const products = {
    new: [
        { 
            id: 1, 
            name: "Кожаная куртка премиум", 
            price: 34990, 
            category: "new", 
            image: "https://i.pinimg.com/736x/4d/a6/52/4da652d13051c3ea1d48da5266357828.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Премиальная кожаная куртка ручной работы", 
            badge: "new",
            sizes: ["XS", "S", "M", "L", "XL"]
        },
        { 
            id: 2, 
            name: "Свитер", 
            price: 18990, 
            category: "new", 
            image: "https://i.pinimg.com/originals/2a/a1/e5/2aa1e52af8ccc417e2b44ce84f1d28f5.png", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кашемировый свитер из 100% кашемира", 
            badge: "new",
            sizes: ["S", "M", "L", "XL"]
        },
        { 
            id: 3, 
            name: "Платье", 
            price: 22990, 
            category: "new", 
            image: "https://avatars.mds.yandex.net/get-mpic/7937668/2a0000019192788aae6e2fc473b49b06b4fe/orig", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Шелковое платье с авторским принтом", 
            badge: "new",
            sizes: ["XS", "S", "M", "L"]
        },
        { 
            id: 4, 
            name: "Кожаные кроссовки", 
            price: 14990, 
            category: "new", 
            image: "https://iy.kommersant.ru/Issues.photo/LifeStyle_News/2017/09/05/KLS_000001_06471_1_t218_190637.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кожаные кроссовки премиум класса", 
            badge: "new",
            sizes: ["38", "39", "40", "41", "42", "43"]
        }
    ],
    men: [
        { 
            id: 5, 
            name: "Пиджак", 
            price: 45990, 
            category: "men", 
            image: "https://i.pinimg.com/736x/03/81/02/03810213550b9946dadb4577da636160.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Классический костюм тройка из итальянской шерсти",
            sizes: ["46", "48", "50", "52", "54"]
        },
        { 
            id: 6, 
            name: "Кожаные ботинки", 
            price: 28990, 
            category: "men", 
            image: "https://avatars.mds.yandex.net/i?id=4ba6c79c2518d1607cfe1827c009524c_l-5297839-images-thumbs&n=13", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кожаные ботинки Goodyear Welted",
            sizes: ["40", "41", "42", "43", "44", "45"]
        },
        { 
            id: 7, 
            name: "Пальто", 
            price: 38990, 
            category: "men", 
            image: "https://avatars.mds.yandex.net/get-mpic/3934197/img_id582041487342550660.jpeg/orig", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Шерстяное пальто двойного переплетения",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        { 
            id: 8, 
            name: "Рубашка", 
            price: 12990, 
            category: "men", 
            image: "https://i.pinimg.com/originals/b9/72/56/b972563f4d8cf38ad2a4be69d931b243.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Рубашка из 200s египетского хлопка",
            sizes: ["S", "M", "L", "XL"]
        }
    ],
    women: [
        { 
            id: 9, 
            name: "Платье", 
            price: 32990, 
            category: "women", 
            image: "https://i.pinimg.com/736x/07/76/9f/07769fd3f39d5caca25e8ce847ddcc57.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Вечернее платье с ручной вышивкой",
            sizes: ["XS", "S", "M", "L"]
        },
        { 
            id: 10, 
            name: "Кардиган", 
            price: 21990, 
            category: "women", 
            image: "https://avatars.mds.yandex.net/get-mpic/12491287/2a0000019744e155ab06ad9d3b20d4fc508f/orig", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кашемировый кардиган oversize",
            sizes: ["XS", "S", "M", "L", "XL"]
        },
        { 
            id: 11, 
            name: "Кожаная юбка", 
            price: 18990, 
            category: "women", 
            image: "https://n.cdn.cdek.shopping/images/shopping/gesjtEanri011NJ6.jpg?v=1", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кожаная юбка миди длины",
            sizes: ["XS", "S", "M", "L"]
        },
        { 
            id: 12, 
            name: "Блузка", 
            price: 16990, 
            category: "women", 
            image: "https://www.yoox.com/images/items/38/38870038QW_14_f.jpg?impolicy=crop&width=720&height=917&gravity=Center", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Шелковый блузон с авторским принтом",
            sizes: ["XS", "S", "M", "L"]
        }
    ],
    sale: [
        { 
            id: 13, 
            name: "Кожаная куртка", 
            price: 24990, 
            oldPrice: 34990, 
            category: "sale", 
            image: "https://server.spin4spin.com/images/2000000229775/2000000229775-b350aa9475c3c8bcdefc0d1a5c4af9a5.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кожаная куртка премиум класса", 
            badge: "sale",
            sizes: ["XS", "S", "M", "L", "XL"]
        },
        { 
            id: 14, 
            name: "Джинсы", 
            price: 11990, 
            oldPrice: 18990, 
            category: "sale", 
            image: "https://i.pinimg.com/736x/05/42/d8/0542d8b2280bccb6647bb84c765d66da.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Джинсы из японского сырого денима", 
            badge: "sale",
            sizes: ["28", "30", "32", "34", "36"]
        },
        { 
            id: 15, 
            name: "Шерстяной свитер", 
            price: 13990, 
            oldPrice: 21990, 
            category: "sale", 
            image: "https://i.pinimg.com/originals/9a/d8/32/9ad8324073e8f67c8bbc7df61e5be27b.png", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Шерстяной свитер из мериносовой шерсти", 
            badge: "sale",
            sizes: ["S", "M", "L", "XL"]
        },
        { 
            id: 16, 
            name: "Кожаные лоферы", 
            price: 17990, 
            oldPrice: 26990, 
            category: "sale", 
            image: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/75/P00482230.jpg", // ВСТАВЬТЕ СВОЮ ССЫЛКУ
            description: "Кожаные лоферы ручной сборки", 
            badge: "sale",
            sizes: ["39", "40", "41", "42", "43"]
        }
    ]
};

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Пользователи
let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, name: "Демо Пользователь", email: "demo@example.com", password: "demo123" }
];

// Текущий пользователь
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Отзывы
let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    {
        id: 1,
        userId: 1,
        userName: "Анна Петрова",
        productId: 2,
        productName: "Кашемировый свитер",
        rating: 5,
        text: "Качество превосходит все ожидания! Свитер из 100% кашемира, очень мягкий и теплый.",
        date: "15.03.2024"
    },
    {
        id: 2,
        userId: 1,
        userName: "Максим Иванов",
        productId: 1,
        productName: "Кожаная куртка премиум",
        rating: 4,
        text: "Куртка отличного качества, но размер пришел немного маловат. В целом очень доволен.",
        date: "10.03.2024"
    },
    {
        id: 3,
        userId: 1,
        userName: "Елена Смирнова",
        productId: 3,
        productName: "Шелковое платье",
        rating: 5,
        text: "Платье просто шикарное! Все подруги спрашивают, где купила. Качество ткани на высоте.",
        date: "05.03.2024"
    }
];

// Переменные для выбора размера
let selectedProductForSize = null;
let selectedSize = null;

// Стоимость доставки
const DELIVERY_COSTS = {
    FREE_THRESHOLD: 10000,
    MEDIUM_COST: 300,
    SMALL_COST: 500
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadProducts();
    loadReviews();
    updateCartUI();
    checkAuth();
    initEventListeners();
    initSmoothScroll();
    initScrollToTop();
    populateProductSelect();
    initStarRating();
    initTextareaCounter();
    initSizeChartTabs();
});

// ===== ТЕМА =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setTheme(theme) {
    body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
}

// ===== АВТОРИЗАЦИЯ =====
function checkAuth() {
    if (currentUser) {
        showUserInfo();
    }
}

function showUserInfo() {
    userInfo.style.display = 'flex';
    authButtons.style.display = 'none';
    document.getElementById('userName').textContent = currentUser.name;
}

function hideUserInfo() {
    userInfo.style.display = 'none';
    authButtons.style.display = 'flex';
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showNotification('Вход выполнен успешно', 'success');
        authModal.classList.remove('active');
        showUserInfo();
        return true;
    } else {
        showNotification('Неверный email или пароль', 'error');
        return false;
    }
}

function registerUser(name, email, password) {
    if (users.some(u => u.email === email)) {
        showNotification('Пользователь с таким email уже существует', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('Пароль должен содержать минимум 6 символов', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showNotification('Регистрация выполнена успешно', 'success');
    authModal.classList.remove('active');
    showUserInfo();
    return true;
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    hideUserInfo();
    showNotification('Вы вышли из аккаунта', 'info');
}

// ===== ТОВАРЫ =====
function loadProducts() {
    const newProductsGrid = document.getElementById('newProducts');
    newProductsGrid.innerHTML = products.new.map(createProductCard).join('');
    
    const menGrid = document.getElementById('menProducts');
    menGrid.innerHTML = products.men.map(createProductCard).join('');
    
    const womenGrid = document.getElementById('womenProducts');
    womenGrid.innerHTML = products.women.map(createProductCard).join('');
    
    const saleGrid = document.getElementById('saleProducts');
    saleGrid.innerHTML = products.sale.map(createProductCard).join('');
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCartHandler);
    });
    
    document.querySelectorAll('.view-category').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = button.dataset.category;
            const section = document.getElementById(category);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function createProductCard(product) {
    const discount = product.oldPrice ? 
        Math.round((1 - product.price / product.oldPrice) * 100) : null;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <!-- ВАЖНО: Замените image.jpg на свою ссылку -->
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'sale' ? `-${discount}%` : 'NEW'}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)} ₽</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)} ₽</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i> В корзину
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== КОРЗИНА =====
function addToCartHandler(e) {
    const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
    const allProducts = [...products.new, ...products.men, ...products.women, ...products.sale];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        if (product.sizes && product.sizes.length > 0) {
            selectedProductForSize = product;
            selectedSize = null;
            showSizeModal(product);
        } else {
            addToCart(product, null);
            showNotification(`${product.name} добавлен в корзину`, 'success');
        }
    }
}

function showSizeModal(product) {
    sizeProductName.textContent = product.name;
    sizeOptionsContainer.innerHTML = '';
    
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.dataset.size = size;
        
        sizeOption.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            sizeOption.classList.add('selected');
            selectedSize = size;
        });
        
        sizeOptionsContainer.appendChild(sizeOption);
    });
    
    sizeModal.classList.add('active');
}

function addToCart(product, size) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
        }
    }
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Корзина очищена', 'info');
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateShipping(subtotal) {
    if (subtotal >= DELIVERY_COSTS.FREE_THRESHOLD) {
        return 0;
    } else if (subtotal >= 5000) {
        return DELIVERY_COSTS.MEDIUM_COST;
    } else {
        return DELIVERY_COSTS.SMALL_COST;
    }
}

function updateCartUI() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const total = subtotal + shipping;
    
    if (itemCount > 0) {
        cartTotal.textContent = `${formatPrice(total)} ₽`;
    } else {
        cartTotal.textContent = '0 ₽';
    }
    
    renderCartItems();
    
    const cartSummary = document.getElementById('cartSummary');
    if (cart.length === 0) {
        cartSummary.style.display = 'none';
    } else {
        cartSummary.style.display = 'block';
        
        document.getElementById('cartItemsCount').textContent = `${itemCount} шт.`;
        document.getElementById('cartSubtotal').textContent = `${formatPrice(subtotal)} ₽`;
        document.getElementById('cartShipping').textContent = shipping === 0 ? 'Бесплатно' : `${formatPrice(shipping)} ₽`;
        document.getElementById('cartTotalAmount').textContent = `${formatPrice(total)} ₽`;
    }
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <h3>Корзина пуста</h3>
                <p>Добавьте товары из каталога</p>
                <button class="btn btn-outline" id="continueShopping">Продолжить покупки</button>
            </div>
        `;
        
        const continueBtn = document.getElementById('continueShopping');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
        }
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}" data-size="${item.size || ''}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                ${item.size ? `<div class="cart-item-size">Размер: ${item.size}</div>` : ''}
                <div class="cart-item-price">${formatPrice(item.price)} ₽</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                    <button class="remove-item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.cart-item .minus').forEach(button => {
        button.addEventListener('click', e => {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.dataset.id);
            const size = cartItem.dataset.size || null;
            const item = cart.find(item => item.id === productId && item.size === size);
            if (item) {
                updateCartQuantity(productId, size, item.quantity - 1);
            }
        });
    });
    
    document.querySelectorAll('.cart-item .plus').forEach(button => {
        button.addEventListener('click', e => {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.dataset.id);
            const size = cartItem.dataset.size || null;
            const item = cart.find(item => item.id === productId && item.size === size);
            if (item) {
                updateCartQuantity(productId, size, item.quantity + 1);
            }
        });
    });
    
    document.querySelectorAll('.cart-item .remove-item').forEach(button => {
        button.addEventListener('click', e => {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.dataset.id);
            const size = cartItem.dataset.size || null;
            removeFromCart(productId, size);
        });
    });
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Добавьте товары в корзину', 'warning');
        return;
    }
    
    if (!currentUser) {
        showNotification('Для оформления заказа необходимо авторизоваться', 'warning');
        authModal.classList.add('active');
        return;
    }
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const total = subtotal + shipping;
    
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        subtotal,
        shipping,
        total,
        date: new Date().toLocaleDateString('ru-RU'),
        status: 'новый'
    };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    cart = [];
    saveCart();
    updateCartUI();
    
    cartModal.classList.remove('active');
    
    showNotification(`Заказ №${order.id} оформлен успешно! Сумма: ${formatPrice(total)} ₽`, 'success');
}

// ===== СИСТЕМА ОТЗЫВОВ =====
function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = `
            <div class="no-reviews">
                <div class="no-reviews-icon">
                    <i class="fas fa-comment"></i>
                </div>
                <h3>Пока нет отзывов</h3>
                <p>Будьте первым, кто поделится своим мнением о наших товарах!</p>
                <button id="addFirstReviewBtn" class="btn btn-primary">
                    <i class="fas fa-plus"></i> Написать отзыв
                </button>
            </div>
        `;
        
        document.getElementById('addFirstReviewBtn').addEventListener('click', () => {
            if (!currentUser) {
                showNotification('Для добавления отзыва необходимо авторизоваться', 'warning');
                authModal.classList.add('active');
                return;
            }
            reviewModal.classList.add('active');
        });
        return;
    }
    
    reviewsList.innerHTML = reviews.map(createReviewCard).join('');
}

function createReviewCard(review) {
    const starsHTML = Array(5).fill().map((_, i) => 
        `<i class="fas fa-star${i < review.rating ? '' : '-regular'}"></i>`
    ).join('');
    
    const ratingDescriptions = [
        "Ужасно",
        "Плохо",
        "Нормально",
        "Хорошо",
        "Отлично"
    ];
    
    return `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">${review.userName.charAt(0)}</div>
                    <div class="reviewer-details">
                        <div class="reviewer-name">${review.userName}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-rating-display">
                    <div class="review-stars">
                        ${starsHTML}
                    </div>
                    <span>${ratingDescriptions[review.rating - 1]}</span>
                </div>
            </div>
            
            <div class="review-product-info">
                <strong>Товар:</strong> ${review.productName}
            </div>
            
            <div class="review-text">${review.text}</div>
            
            <div class="review-meta">
                <div class="review-actions">
                    <button class="like-review" data-id="${review.id}">
                        <i class="fas fa-thumbs-up"></i> Полезно
                    </button>
                </div>
            </div>
        </div>
    `;
}

function populateProductSelect() {
    const select = document.getElementById('reviewProduct');
    const allProducts = [...products.new, ...products.men, ...products.women, ...products.sale];
    
    allProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// ===== СИСТЕМА ЗВЕЗДНОГО РЕЙТИНГА =====
function initStarRating() {
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingText = document.getElementById('ratingText');
    const ratingInput = document.getElementById('reviewRating');
    
    const ratingDescriptions = [
        "Не оценено",
        "Ужасно",
        "Плохо",
        "Нормально",
        "Хорошо",
        "Отлично"
    ];
    
    function updateStars(rating, isHover = false) {
        stars.forEach((star, index) => {
            const starValue = parseInt(star.getAttribute('data-rating'));
            
            if (isHover) {
                if (starValue <= rating) {
                    star.classList.add('hover');
                    star.classList.remove('active');
                } else {
                    star.classList.remove('hover', 'active');
                }
            } else {
                if (starValue <= rating) {
                    star.classList.add('active');
                    star.classList.remove('hover');
                } else {
                    star.classList.remove('active', 'hover');
                }
            }
        });
        
        ratingText.textContent = ratingDescriptions[rating];
        ratingInput.value = rating;
    }
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            currentRating = rating;
            updateStars(rating);
        });
        
        star.addEventListener('mouseenter', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            isHovering = true;
            hoverRating = rating;
            updateStars(rating, true);
        });
        
        star.addEventListener('mouseleave', () => {
            isHovering = false;
            updateStars(currentRating);
        });
    });
    
    // Сброс рейтинга при открытии модального окна
    reviewModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            setTimeout(() => {
                currentRating = 0;
                updateStars(0);
            }, 300);
        }
    });
}

function initTextareaCounter() {
    const reviewText = document.getElementById('reviewText');
    const charCount = document.getElementById('charCount');
    const maxLength = 500;
    
    reviewText.addEventListener('input', () => {
        const length = reviewText.value.length;
        charCount.textContent = length;
        
        if (length > maxLength) {
            charCount.style.color = '#e74c3c';
            reviewText.style.borderColor = '#e74c3c';
        } else if (length > maxLength * 0.9) {
            charCount.style.color = '#f39c12';
            reviewText.style.borderColor = '#f39c12';
        } else {
            charCount.style.color = '';
            reviewText.style.borderColor = '';
        }
    });
}

function submitReview(e) {
    e.preventDefault();
    
    if (!currentUser) {
        showNotification('Для добавления отзыва необходимо авторизоваться', 'warning');
        authModal.classList.add('active');
        return;
    }
    
    const productId = parseInt(document.getElementById('reviewProduct').value);
    const rating = parseInt(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value.trim();
    
    if (!productId) {
        showNotification('Выберите товар', 'error');
        return;
    }
    
    if (rating === 0) {
        showNotification('Поставьте оценку', 'error');
        return;
    }
    
    if (!text) {
        showNotification('Введите текст отзыва', 'error');
        return;
    }
    
    if (text.length > 500) {
        showNotification('Отзыв не должен превышать 500 символов', 'error');
        return;
    }
    
    const allProducts = [...products.new, ...products.men, ...products.women, ...products.sale];
    const product = allProducts.find(p => p.id === productId);
    
    const newReview = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        productId,
        productName: product.name,
        rating,
        text,
        date: new Date().toLocaleDateString('ru-RU'),
        likes: 0,
        helpful: false
    };
    
    reviews.unshift(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Сброс формы
    reviewForm.reset();
    document.getElementById('reviewRating').value = '0';
    document.getElementById('ratingText').textContent = 'Не оценено';
    document.getElementById('charCount').textContent = '0';
    
    // Сброс звезд
    const stars = document.querySelectorAll('.rating-stars i');
    stars.forEach(star => {
        star.classList.remove('active', 'hover');
    });
    
    // Обновление списка отзывов
    loadReviews();
    
    reviewModal.classList.remove('active');
    showNotification('Отзыв успешно добавлен! Спасибо за ваше мнение.', 'success');
}

// ===== РАЗМЕРНАЯ СЕТКА =====
function initSizeChartTabs() {
    sizeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            sizeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.chart-table').forEach(table => {
                table.classList.remove('active');
            });
            document.getElementById(`${tabName}Chart`).classList.add('active');
        });
    });
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('active');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('active');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'error': return 'times-circle';
        default: return 'info-circle';
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function initEventListeners() {
    cartButton.addEventListener('click', () => {
        cartModal.classList.add('active');
    });
    
    loginBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        document.querySelector('.auth-tab[data-tab="login"]').click();
    });
    
    registerBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        document.querySelector('.auth-tab[data-tab="register"]').click();
    });
    
    logoutBtn.addEventListener('click', logoutUser);
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').classList.remove('active');
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                if (confirm('Вы уверены, что хотите очистить корзину?')) {
                    clearCart();
                }
            }
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('Для добавления отзыва необходимо авторизоваться', 'warning');
                authModal.classList.add('active');
                return;
            }
            reviewModal.classList.add('active');
        });
    }
    
    if (cancelReviewBtn) {
        cancelReviewBtn.addEventListener('click', () => {
            reviewModal.classList.remove('active');
            reviewForm.reset();
            currentRating = 0;
            document.getElementById('reviewRating').value = '0';
            document.getElementById('ratingText').textContent = 'Не оценено';
            document.getElementById('charCount').textContent = '0';
            
            const stars = document.querySelectorAll('.rating-stars i');
            stars.forEach(star => {
                star.classList.remove('active', 'hover');
            });
        });
    }
    
    if (deliveryInfo) {
        deliveryInfo.addEventListener('click', (e) => {
            e.preventDefault();
            deliveryModal.classList.add('active');
        });
    }
    
    if (sizeChartBtn) {
        sizeChartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sizeChartModal.classList.add('active');
        });
    }
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.getElementById('authTitle').textContent = 
                tabName === 'login' ? 'Вход в аккаунт' : 'Регистрация';
            
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(tabName === 'login' ? 'loginForm' : 'registerForm').classList.add('active');
        });
    });
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginUser(email, password);
    });
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        registerUser(name, email, password);
    });
    
    reviewForm.addEventListener('submit', submitReview);
    
    if (confirmSizeBtn) {
        confirmSizeBtn.addEventListener('click', () => {
            if (!selectedSize && selectedProductForSize.sizes && selectedProductForSize.sizes.length > 0) {
                showNotification('Пожалуйста, выберите размер', 'warning');
                return;
            }
            
            addToCart(selectedProductForSize, selectedSize);
            showNotification(`${selectedProductForSize.name} добавлен в корзину`, 'success');
            sizeModal.classList.remove('active');
        });
    }
    
    if (openSizeChartFromModal) {
        openSizeChartFromModal.addEventListener('click', (e) => {
            e.preventDefault();
            sizeModal.classList.remove('active');
            sizeChartModal.classList.add('active');
        });
    }
    
    // Обработчик для кнопок "Полезно" в отзывах
    document.addEventListener('click', (e) => {
        if (e.target.closest('.like-review')) {
            const button = e.target.closest('.like-review');
            const reviewId = parseInt(button.dataset.id);
            
            if (!currentUser) {
                showNotification('Чтобы оценить отзыв, необходимо авторизоваться', 'warning');
                authModal.classList.add('active');
                return;
            }
            
            button.innerHTML = '<i class="fas fa-thumbs-up"></i> Спасибо!';
            button.disabled = true;
            button.style.opacity = '0.7';
            
            showNotification('Спасибо за вашу оценку!', 'success');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}