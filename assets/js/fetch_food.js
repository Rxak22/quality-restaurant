const menu = {
    breakfasts: [
        { id: "1", name: "Scrambled Eggs with Avocado Toast", description: "Creamy scrambled eggs served with toast topped with mashed avocado, garnished with chili flakes and parsley.", price: "8.99", img: "assets/img/food/breakfast/1.jpg" },
        { id: "2", name: "Pancakes with Maple Syrup and Berries", description: "Fluffy pancakes stacked high, topped with fresh berries, whipped cream, and a drizzle of maple syrup.", price: "7.49", img: "assets/img/food/breakfast/2.jpg" },
        { id: "3", name: "Classic French Toast with Powdered Sugar", description: "Golden, crispy French toast dusted with powdered sugar and served with syrup and a side of fresh fruit.", price: "6.50", img: "assets/img/food/breakfast/3.jpg" },
        { id: "4", name: "Oatmeal with Honey, Nuts, and Berries", description: "Warm oatmeal topped with honey, crunchy nuts, and fresh berries for a healthy, filling breakfast.", price: "5.99", img: "assets/img/food/breakfast/4.jpg" },
        { id: "5", name: "Eggs Benedict", description: "Poached eggs on an English muffin with Canadian bacon, smothered in hollandaise sauce.", price: "12.00", img: "assets/img/food/breakfast/5.jpg" },
        { id: "6", name: "Smoothie Bowl with Granola", description: "A thick smoothie bowl topped with granola, fresh fruit, and a drizzle of honey or peanut butter.", price: "9.00", img: "assets/img/food/breakfast/6.jpg" },
        { id: "7", name: "Breakfast Burrito", description: "A tortilla filled with scrambled eggs, cheese, avocado, and salsa, perfect for a quick breakfast on the go.", price: "7.49", img: "assets/img/food/breakfast/7.jpg" },
        { id: "8", name: "Chia Pudding with Almonds and Coconut", description: "Creamy chia pudding topped with toasted almonds, shredded coconut, and fresh berries.", price: "6.00", img: "assets/img/food/breakfast/8.jpg" },
        { id: "9", name: "Bagel with Cream Cheese and Smoked Salmon", description: "A toasted bagel with creamy cheese and topped with smoked salmon, capers, and onions.", price: "10.00", img: "assets/img/food/breakfast/9.jpg" },
        { id: "10", name: "Acai Bowl", description: "A frozen acai berry smoothie bowl topped with granola, fresh fruits, and coconut flakes.", price: "8.50", img: "assets/img/food/breakfast/10.jpg" },
        { id: "11", name: "Cinnamon Roll with Icing", description: "Warm, gooey cinnamon rolls drizzled with sweet icing and served fresh from the oven.", price: "4.99", img: "assets/img/food/breakfast/11.jpg" }
    ],
    lunchs: [
        { id: "1", name: "Grilled Chicken Caesar Salad", description: "Crisp romaine lettuce, grilled chicken breast, parmesan cheese, croutons, and Caesar dressing.", price: "12.50", img: "assets/img/food/lunch/1.jpg" },
        { id: "2", name: "Veggie and Hummus Wrap", description: "A whole-wheat tortilla filled with fresh veggies like lettuce, cucumber, tomatoes, carrots, and hummus.", price: "9.00", img: "assets/img/food/lunch/2.jpg" },
        { id: "3", name: "Quinoa Salad with Roasted Vegetables", description: "A healthy salad with quinoa, roasted veggies, and a lemon vinaigrette dressing.", price: "10.00", img: "assets/img/food/lunch/3.jpg" },
        { id: "4", name: "Turkey Club Sandwich", description: "A triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo, served on toasted bread.", price: "11.50", img: "assets/img/food/lunch/4.jpg" },
        { id: "5", name: "Veggie Burger with Sweet Potato Fries", description: "A hearty plant-based veggie patty with lettuce, tomato, and pickles on a toasted bun, served with crispy sweet potato fries.", price: "13.00", img: "assets/img/food/lunch/5.jpg" },
        { id: "6", name: "Spaghetti Carbonara", description: "A creamy pasta with crispy pancetta, eggs, parmesan, and black pepper.", price: "14.00", img: "assets/img/food/lunch/6.jpg" },
        { id: "7", name: "Tuna Salad Sandwich", description: "A classic tuna salad on whole grain bread with lettuce and tomato.", price: "8.50", img: "assets/img/food/lunch/7.jpg" },
        { id: "8", name: "Chicken Wrap with Avocado", description: "A grilled chicken wrap with fresh avocado, lettuce, tomatoes, and a creamy dressing.", price: "9.50", img: "assets/img/food/lunch/8.jpg" },
        { id: "9", name: "Caprese Salad with Mozzarella and Balsamic", description: "Fresh mozzarella, tomatoes, basil, drizzled with balsamic glaze and olive oil.", price: "7.99", img: "assets/img/food/lunch/9.jpg" },
        { id: "10", name: "Chicken and Rice Burrito", description: "A burrito filled with grilled chicken, seasoned rice, beans, and salsa, wrapped in a flour tortilla.", price: "8.00", img: "assets/img/food/lunch/10.jpg" },
        { id: "11", name: "Minestrone Soup with Garlic Bread", description: "A hearty vegetable soup with pasta and beans, served with warm garlic bread.", price: "6.99", img: "assets/img/food/lunch/11.jpg" }
    ],
    dinners: [
        { id: "1", name: "Grilled Salmon with Asparagus", description: "Fresh salmon fillet grilled and served with sautéed asparagus and a squeeze of lemon.", price: "18.00", img: "assets/img/food/dinner/1.jpg" },
        { id: "2", name: "Spaghetti Aglio e Olio", description: "Simple pasta with garlic, olive oil, chili flakes, and a sprinkle of parsley.", price: "14.99", img: "assets/img/food/dinner/2.jpg" },
        { id: "3", name: "Beef Stir Fry with Veggies", description: "Tender strips of beef stir-fried with bell peppers, broccoli, and onions, served with rice.", price: "15.50", img: "assets/img/food/dinner/3.jpg" },
        { id: "4", name: "Vegetable Lasagna", description: "Layers of pasta, ricotta cheese, spinach, zucchini, and marinara sauce, baked to perfection.", price: "14.00", img: "assets/img/food/dinner/4.jpg" },
        { id: "5", name: "Chicken Parmesan", description: "Breaded chicken breasts topped with marinara sauce and melted mozzarella, served with pasta.", price: "16.50", img: "assets/img/food/dinner/5.jpg" },
        { id: "6", name: "Grilled Vegetable Skewers with Rice", description: "A mix of zucchini, mushrooms, bell peppers, and onions grilled and served with jasmine rice.", price: "12.00", img: "assets/img/food/dinner/6.jpg" },
        { id: "7", name: "Pork Tenderloin with Mashed Potatoes", description: "Tender pork roast served with creamy mashed potatoes and steamed green beans.", price: "18.50", img: "assets/img/food/dinner/7.jpg" },
        { id: "8", name: "Chicken Stir-Fry with Cashews", description: "Chicken stir-fried with vegetables and cashew nuts in a savory sauce, served with rice.", price: "15.00", img: "assets/img/food/dinner/8.jpg" },
        { id: "9", name: "Vegetarian Tacos", description: "Soft tortillas filled with seasoned beans, guacamole, lettuce, and salsa.", price: "10.00", img: "assets/img/food/dinner/9.jpg" },
        { id: "10", name: "Shrimp Scampi", description: "Shrimp sautéed in garlic butter sauce, served over pasta with a sprinkle of parmesan.", price: "17.00", img: "assets/img/food/dinner/10.jpg" },
        { id: "11", name: "Beef Tacos with Sour Cream", description: "Ground beef seasoned with taco spices, served in soft tortillas with sour cream, cheese, and lettuce.", price: "12.00", img: "assets/img/food/dinner/11.jpg" }
    ],
    desserts: [
        { id: "1", name: "Chocolate Lava Cake", description: "A rich chocolate cake with a molten center, served with vanilla ice cream.", price: "6.99", img: "assets/img/food/dessert/1.jpg" },
        { id: "2", name: "Fruit Tart with Custard Filling", description: "A buttery tart shell filled with smooth vanilla custard and topped with fresh fruit.", price: "5.50", img: "assets/img/food/dessert/2.jpg" },
        { id: "3", name: "Cheesecake with Raspberry Sauce", description: "Creamy cheesecake on a graham cracker crust, topped with a tangy raspberry sauce.", price: "7.99", img: "assets/img/food/dessert/3.jpg" },
        { id: "4", name: "Tiramisu", description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.", price: "6.00", img: "assets/img/food/dessert/4.jpg" },
        { id: "5", name: "Apple Pie with Vanilla Ice Cream", description: "Classic apple pie with a flaky crust, served with a scoop of vanilla ice cream.", price: "5.00", img: "assets/img/food/dessert/5.jpg" },
        { id: "6", name: "Lemon Meringue Pie", description: "A tart lemon filling topped with fluffy meringue, served in a flaky pie crust.", price: "6.50", img: "assets/img/food/dessert/6.jpg" },
        { id: "7", name: "Chocolate Mousse", description: "Rich, creamy chocolate mousse served with a dollop of whipped cream.", price: "5.50", img: "assets/img/food/dessert/7.jpg" },
        { id: "8", name: "Brownies with Walnuts", description: "Decadent chocolate brownies with crunchy walnuts, served warm.", price: "4.99", img: "assets/img/food/dessert/8.jpg" },
        { id: "9", name: "Banana Split", description: "Three scoops of ice cream topped with bananas, whipped cream, chocolate syrup, and a cherry.", price: "7.50", img: "assets/img/food/dessert/9.jpg" },
        { id: "10", name: "Crepes with Nutella", description: "Thin crepes filled with Nutella, served with fresh strawberries and powdered sugar.", price: "6.50", img: "assets/img/food/dessert/10.jpg" },
        { id: "11", name: "Vanilla Panna Cotta", description: "Creamy Italian dessert served with a berry coulis and fresh mint.", price: "6.99", img: "assets/img/food/dessert/11.jpg" }
    ],
    drinks: [
        { id: "1", name: "Americano", description: "Espresso diluted with hot water for a smooth coffee flavor.", price: "3.00", img: "assets/img/food/drink/1.jpg" },
        { id: "2", name: "Cappuccino", description: "Espresso topped with steamed milk and foam.", price: "4.00", img: "assets/img/food/drink/2.jpg" },
        { id: "3", name: "Latte", description: "Creamy espresso drink with steamed milk and a light foam topping.", price: "4.50", img: "assets/img/food/drink/3.jpg" },
        { id: "4", name: "Green Tea Matcha", description: "Powdered green tea whisked with steamed milk.", price: "5.00", img: "assets/img/food/drink/4.jpg" },
        { id: "5", name: "Hot Chocolate", description: "Rich chocolate drink topped with whipped cream.", price: "3.50", img: "assets/img/food/drink/5.jpg" },
        { id: "6", name: "Iced Coffee", description: "Chilled brewed coffee served over ice.", price: "3.00", img: "assets/img/food/drink/6.jpg" },
        { id: "7", name: "Freshly Squeezed Orange Juice", description: "Freshly squeezed orange juice served cold.", price: "3.99", img: "assets/img/food/drink/7.jpg" },
        { id: "8", name: "Lemonade", description: "Refreshing lemonade made with fresh lemons.", price: "2.99", img: "assets/img/food/drink/8.jpg" },
        { id: "9", name: "Smoothie", description: "Fruit smoothie made with yogurt and a blend of fresh fruits.", price: "4.99", img: "assets/img/food/drink/9.jpg" },
        { id: "10", name: "Iced Tea", description: "Chilled tea served with a slice of lemon.", price: "2.50", img: "assets/img/food/drink/10.jpg" },
        { id: "11", name: "Espresso Shot", description: "A single shot of rich, strong espresso.", price: "2.00", img: "assets/img/food/drink/11.jpg" }
    ]
};

function appendChild(name, price, description, img){
    var child = `
        <a data-name="${name}" data-price="${price}" data-desc="${description}" data-img="${img}" class="text-decoration-none child" href="#" data-toggle="modal" data-target="#foodItemModel">
            <div class="row no-gutters">
                <div class="col d-flex justify-content-between">
                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${name}</h6>
                    <p class="text-danger font-weight-bold mb-0">$${price}</p>
                </div>
            </div>
            <p class="w-xl-75 text-600 mb-4">${description}</p>
        </a>
    `;
    return child;
}

function appenddModalChild(name, description, img, price) {
    let title = splitText(name);
    
    
    var child = `
        <div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">×</span></button>
            <div class="row">
              <div class="border border-primary border-2x ml-5 rounded-soft"></div>
              <div class="col-10">
                <p class="fs-2 font-weight-bold text-uppercase lh-3 mt-3">${title["0"]}<br />${(title["1"] ? title["1"] : "")}</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-8 col-7 pl-0"><img class="img-fluid" src="${img}" alt=""
                  style="margin-left: -1px" /></div>
              <div class="col-md-4 col-5 border-left border-200 border-2x h-50">
                <ul class="list-unstyled text-500">
                  <li>${title["0"]}</li>
                  <li>${title["1"]}</li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center bg-light">
              <div class="col-10 pt-3">
                <p>${description}</p>
              </div>
            </div>
            <div class="modal-footer justify-content-center"><button class="btn btn-primary btn-block text-center btn-order"
                type="button" data-name="${name}" data-price="${price}">order online</button></div>
          </div>
    `;
    return child;
}

function appendOrderModalChild(name, price){
    var child = `
        <div class="row mt-4 ml-3 form-group">
                    <div class="col-lg-6 mb-3 mb-lg-0">
                      <h6>${name}</h6>
                    </div>
                    <div class="col-lg-6 mb-3 mb-lg-0 d-flex justify-content-between">
                      <div>
                        <strong class="cursor-pointer increase">+</strong>
                        <span class="px-2">x<span class="count">1</span></span>
                        <strong class="ms-5 cursor-pointer decrease">-</strong>
                      </div>
                      <p class="text-danger font-weight-bold">$${price}</p>
                    </div>
              </div>
    `;
    return child;
}

function splitText(text) {
    let words = text.split(" ");
    if (words.length > 1){
        return [
            words.slice(0, 2).join(" "),
            words.slice(2).join(" ")
        ]
    }
    else 
        return [words];
}

$('document').ready( () => {

    $(".breakfast").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
        }
    })
    $(".lunch").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.lunchs.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.lunchs[i].name, menu.lunchs[i].price, menu.lunchs[i].description, menu.lunchs[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.lunchs[i].name, menu.lunchs[i].price, menu.lunchs[i].description, menu.lunchs[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.lunchs[i].name, menu.lunchs[i].price, menu.lunchs[i].description, menu.lunchs[i].img));
            }
        }
    })
    $(".dinner").click(() => {
        $(".empty").empty();

        for (var i = 0; i < menu.dinners.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.dinners[i].name, menu.dinners[i].price, menu.dinners[i].description, menu.dinners[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.dinners[i].name, menu.dinners[i].price, menu.dinners[i].description, menu.dinners[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.dinners[i].name, menu.dinners[i].price, menu.dinners[i].description, menu.dinners[i].img));
            }
        }
    })
    $(".dessert").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.desserts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.desserts[i].name, menu.desserts[i].price, menu.desserts[i].description, menu.desserts[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.desserts[i].name, menu.desserts[i].price, menu.desserts[i].description, menu.desserts[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.desserts[i].name, menu.desserts[i].price, menu.desserts[i].description, menu.desserts[i].img));
            }
        }
    })
    $(".drink").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.drinks.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.drinks[i].name, menu.drinks[i].price, menu.drinks[i].description, menu.drinks[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.drinks[i].name, menu.drinks[i].price, menu.drinks[i].description, menu.drinks[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.drinks[i].name, menu.drinks[i].price, menu.drinks[i].description, menu.drinks[i].img));
            }
        }
    })

    if ($(".breakfast.active")) {
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(appendChild(menu.breakfasts[i].name, menu.breakfasts[i].price, menu.breakfasts[i].description, menu.breakfasts[i].img));
            }
        }
    }


    $(".menu-wrapper1").on('click', '.child', function () {
        let name = $(this).data('name');
        let desc = $(this).data('desc');
        let img = $(this).data('img');
        let price = $(this).data('price');

        $('.modal-content-menu').html(appenddModalChild(name, desc, img, price));
    
    })
    $(".menu-wrapper2").on('click', '.child', function () {
        let name = $(this).data('name');
        let desc = $(this).data('desc');
        let img = $(this).data('img');
        let price = $(this).data('price');

        $('.modal-content-menu').html(appenddModalChild(name, desc, img, price));
    
    })
    $(".menu-wrapper3").on('click', '.child', function () {
        let name = $(this).data('name');
        let desc = $(this).data('desc');
        let img = $(this).data('img');
        let price = $(this).data('price');

        $('.modal-content-menu').html(appenddModalChild(name, desc, img, price));
    
    })

    $('.modal-content-menu').on('click', '.btn-order', function () {
        $('#foodItemModel').modal('hide');
        $('#orderOnline').modal('show');

        let name = $(this).data('name');
        let price = parseFloat($(this).data('price'));
        
        $('.totalPrice').text(price.toFixed(2));
        $('.item-wrapper').html(appendOrderModalChild(name, price));

    })

    const calculateTotalPrice = (qty, price) => qty * price;

    function updateTotalPrice (totalPrice) {
        $('.totalPrice').text(totalPrice.toFixed(2));
    }

    $('.item-wrapper').on('click', '.increase', function () {
        const count = $(this).siblings('span').find('.count');
        let currentCount = parseFloat(count.text());

        count.text(currentCount + 1);

        const price = parseFloat($('.totalPrice').text()) / currentCount;
        updateTotalPrice(calculateTotalPrice(currentCount + 1,  price));
    })    
    $('.item-wrapper').on('click', '.decrease', function () {
        const count = $(this).siblings('span').find('.count');
        let currentCount = parseFloat(count.text());

        if (currentCount > 1) {
            count.text(currentCount - 1);

            const price = parseFloat($('.totalPrice').text()) / currentCount;
        updateTotalPrice(calculateTotalPrice(currentCount - 1,  price));
        }
    })    
// handle add menu item
    $('.more-food').click(function () {
            $(this).css('display', 'none');
            $('.add-select').css('display', 'flex');
            $('.select-menu').next('.select2-container').show();
    });

    $('.add-select').on('click', function () {
        $(this).css('display', 'none');
        $('.more-food').css('display', 'flex');
        $('.select-menu').next('.select2-container').hide();

        let selected = $('.select-menu').val(); 
        $.map(selected, function (value) {
            let lastCommaIndnex = value.lastIndexOf(','); 
            
            let name = value.substring(0, lastCommaIndnex).trim();
            let price = parseFloat(value.substring(lastCommaIndnex +1)); 
            $('.item-wrapper').append(appendOrderModalChild(name, price));

            let totalPrice = parseFloat($('.totalPrice').text()) + price;
            updateTotalPrice(totalPrice);
        });
    });

    function appendSelectMenu(menu, target) {
        $.each(menu, function (key, value) { 
            
            $(`.${target}`).append(
                `
                      <option value="${[value.name, value.price]}">${value.name}</option>
                `
            )
        });
    }
    $('.select-menu').select2();
    $('.select-menu').next('.select2-container').hide()

    appendSelectMenu(menu.breakfasts, "breakfast-group");
    appendSelectMenu(menu.lunchs, "lunch-group");
    appendSelectMenu(menu.dinners, "dinner-group");
    appendSelectMenu(menu.desserts, "dessert-group");
    appendSelectMenu(menu.drinks, "drink-group");
})