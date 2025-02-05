document.addEventListener("DOMContentLoaded", function () {
    const closetItems = document.querySelectorAll(".closet1, .closet2, .closet3, .closet4, .closet5");
    const noneSection = document.getElementById("none-section");
    
    let newContentDiv = document.createElement("div");
    newContentDiv.classList.add("new-content");

    const contentMap = {
        "closet1": `
            <div class="new-content" id="new-closet1">
                <div class="new-title">
                    <div class="new-title-image"><img src="img/shopping/keychain-detail.png"></div>
                    <div class="new-title-heading"><h3>SMIELY  KEYCHAIN</h3></div>
                </div>
                <div class="new-details">
                    <h4>$ 13.99</h4>
                    <img src="img/shopping/star.png" id="star">
                    <p>Carry the magic everywhere—take home a piece of the happy!</p>
                </div>
                <div class="new-cart">
                    <img src="img/shopping/addcart.png" class="addcart">
                </div>
            </div>`,
        "closet2": `
            <div class="new-content" id="new-closet2">
                <div class="new-title">
                    <div class="new-title-image"><img src="img/shopping/tshirt-detail2.png"></div>
                    <div class="new-title-heading"><h3>SMIELY  T-SHIRT</h3></div>
                </div>
                <div class="new-details">
                    <h4>$ 69.99</h4>
                    <img src="img/shopping/star.png" id="star">
                    <p>Wear the magic—show your happy style today!</p>
                </div>
                <div class="new-cart">
                    <img src="img/shopping/addcart.png" class="addcart">
                </div>
            </div>`,
        "closet3": `
            <div class="new-content" id="new-closet3">
                <div class="new-title">
                    <div class="new-title-image"><img src="img/shopping/globe-detail.png"></div>
                    <div class="new-title-heading"><h3>HAPPY  LAND  GLOBE</h3></div>
                </div>
                <div class="new-details">
                    <h4>$ 34.99</h4>
                    <img src="img/shopping/star.png" id="star">
                    <p>Explore a world where every adventure leads to a gift shop.</p>
                </div>
                <div class="new-cart">
                    <img src="img/shopping/addcart.png" class="addcart">
                </div>
            </div>`,
        "closet4": `
            <div class="new-content" id="new-closet4">
                <div class="new-title">
                    <div class="new-title-image"><img src="img/shopping/cup-detail2.png"></div>
                    <div class="new-title-heading"><h3>SMILEY  CUP</h3></div>
                </div>
                <div class="new-details">
                    <h4>$ 17.99</h4>
                    <img src="img/shopping/star.png" id="star">
                    <p>Start your day with a touch of happy in every sip!</p>
                </div>
                <div class="new-cart">
                    <img src="img/shopping/addcart.png" class="addcart">
                </div>
            </div>`,
        "closet5": `
            <div class="new-content" id="new-closet5">
                <div class="new-title">
                    <div class="new-title-image"><img src="img/shopping/backpack-detail.png"></div>
                    <div class="new-title-heading"><h3>SMILEY  BACKPACK</h3></div>
                </div>
                <div class="new-details">
                    <h4>$ 49.99</h4>
                    <img src="img/shopping/star.png" id="star">
                    <p>Carry the happy wherever you go with this enchanted backpack!</p>
                </div>
                <div class="new-cart">
                    <img src="img/shopping/addcart.png" class="addcart">
                </div>
            </div>`
    };

    closetItems.forEach(item => {
        item.addEventListener("click", function () {
            noneSection.style.display = "none";
            newContentDiv.innerHTML = contentMap[this.classList[0]];
            newContentDiv.style.gridColumn = "10 / span 3";
            if (!document.body.contains(newContentDiv)) {
                noneSection.parentNode.insertBefore(newContentDiv, noneSection);
            }
        });
    });

    // cart
    const cartPanel = document.getElementById("cart-panel");
    const closeCartBtn = document.getElementById("close-cart");
    const cartButton = document.querySelector(".right");
    const cartItemsContainer = document.getElementById("cart-items");

    function openCart() {
        cartPanel.classList.add("active");
    }

    function closeCart() {
        cartPanel.classList.remove("active");
    }

    cartButton.addEventListener("click", openCart);
    closeCartBtn.addEventListener("click", closeCart);

    // addcart
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("addcart")) {
            const productDiv = event.target.closest(".new-content");
            if (productDiv) {
                const productTitleDiv = productDiv.querySelector(".new-title");

                if (productTitleDiv) {
                    // add cart items
                    const clonedTitle = productTitleDiv.cloneNode(true);
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                    cartItem.appendChild(clonedTitle);

                    cartItemsContainer.appendChild(cartItem);
                    openCart();
                }
            }
        }
    });
});

