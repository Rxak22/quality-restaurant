const menu = {
    breakfasts: [
        { id: "1", name: "Scrambled Eggs with Avocado Toast", description: "Creamy scrambled eggs served with toast topped with mashed avocado, garnished with chili flakes and parsley.", price: "$8.99", img: "" },
        { id: "2", name: "Pancakes with Maple Syrup and Berries", description: "Fluffy pancakes stacked high, topped with fresh berries, whipped cream, and a drizzle of maple syrup.", price: "$7.49", img: "" },
        { id: "3", name: "Classic French Toast with Powdered Sugar", description: "Golden, crispy French toast dusted with powdered sugar and served with syrup and a side of fresh fruit.", price: "$6.50", img: "" },
        { id: "4", name: "Oatmeal with Honey, Nuts, and Berries", description: "Warm oatmeal topped with honey, crunchy nuts, and fresh berries for a healthy, filling breakfast.", price: "$5.99", img: "" },
        { id: "5", name: "Eggs Benedict", description: "Poached eggs on an English muffin with Canadian bacon, smothered in hollandaise sauce.", price: "$12.00", img: "" },
        { id: "6", name: "Smoothie Bowl with Granola", description: "A thick smoothie bowl topped with granola, fresh fruit, and a drizzle of honey or peanut butter.", price: "$9.00", img: "" },
        { id: "7", name: "Breakfast Burrito", description: "A tortilla filled with scrambled eggs, cheese, avocado, and salsa, perfect for a quick breakfast on the go.", price: "$7.49", img: "" },
        { id: "8", name: "Chia Pudding with Almonds and Coconut", description: "Creamy chia pudding topped with toasted almonds, shredded coconut, and fresh berries.", price: "$6.00", img: "" },
        { id: "9", name: "Bagel with Cream Cheese and Smoked Salmon", description: "A toasted bagel with creamy cheese and topped with smoked salmon, capers, and onions.", price: "$10.00", img: "" },
        { id: "10", name: "Acai Bowl", description: "A frozen acai berry smoothie bowl topped with granola, fresh fruits, and coconut flakes.", price: "$8.50", img: "" },
        { id: "11", name: "Cinnamon Roll with Icing", description: "Warm, gooey cinnamon rolls drizzled with sweet icing and served fresh from the oven.", price: "$4.99", img: "" }
    ],
    lunchs: [
        { id: "1", name: "Grilled Chicken Caesar Salad", description: "Crisp romaine lettuce, grilled chicken breast, parmesan cheese, croutons, and Caesar dressing.", price: "$12.50", img: "" },
        { id: "2", name: "Veggie and Hummus Wrap", description: "A whole-wheat tortilla filled with fresh veggies like lettuce, cucumber, tomatoes, carrots, and hummus.", price: "$9.00", img: "" },
        { id: "3", name: "Quinoa Salad with Roasted Vegetables", description: "A healthy salad with quinoa, roasted veggies, and a lemon vinaigrette dressing.", price: "$10.00", img: "" },
        { id: "4", name: "Turkey Club Sandwich", description: "A triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo, served on toasted bread.", price: "$11.50", img: "" },
        { id: "5", name: "Veggie Burger with Sweet Potato Fries", description: "A hearty plant-based veggie patty with lettuce, tomato, and pickles on a toasted bun, served with crispy sweet potato fries.", price: "$13.00", img: "" },
        { id: "6", name: "Spaghetti Carbonara", description: "A creamy pasta with crispy pancetta, eggs, parmesan, and black pepper.", price: "$14.00", img: "" },
        { id: "7", name: "Tuna Salad Sandwich", description: "A classic tuna salad on whole grain bread with lettuce and tomato.", price: "$8.50", img: "" },
        { id: "8", name: "Chicken Wrap with Avocado", description: "A grilled chicken wrap with fresh avocado, lettuce, tomatoes, and a creamy dressing.", price: "$9.50", img: "" },
        { id: "9", name: "Caprese Salad with Mozzarella and Balsamic", description: "Fresh mozzarella, tomatoes, basil, drizzled with balsamic glaze and olive oil.", price: "$7.99", img: "" },
        { id: "10", name: "Chicken and Rice Burrito", description: "A burrito filled with grilled chicken, seasoned rice, beans, and salsa, wrapped in a flour tortilla.", price: "$8.00", img: "" },
        { id: "11", name: "Minestrone Soup with Garlic Bread", description: "A hearty vegetable soup with pasta and beans, served with warm garlic bread.", price: "$6.99", img: "" }
    ],
    dinners: [
        { id: "1", name: "Grilled Salmon with Asparagus", description: "Fresh salmon fillet grilled and served with sautéed asparagus and a squeeze of lemon.", price: "$18.00", img: "" },
        { id: "2", name: "Spaghetti Aglio e Olio", description: "Simple pasta with garlic, olive oil, chili flakes, and a sprinkle of parsley.", price: "$14.99", img: "" },
        { id: "3", name: "Beef Stir Fry with Veggies", description: "Tender strips of beef stir-fried with bell peppers, broccoli, and onions, served with rice.", price: "$15.50", img: "" },
        { id: "4", name: "Vegetable Lasagna", description: "Layers of pasta, ricotta cheese, spinach, zucchini, and marinara sauce, baked to perfection.", price: "$14.00", img: "" },
        { id: "5", name: "Chicken Parmesan", description: "Breaded chicken breasts topped with marinara sauce and melted mozzarella, served with pasta.", price: "$16.50", img: "" },
        { id: "6", name: "Grilled Vegetable Skewers with Rice", description: "A mix of zucchini, mushrooms, bell peppers, and onions grilled and served with jasmine rice.", price: "$12.00", img: "" },
        { id: "7", name: "Pork Tenderloin with Mashed Potatoes", description: "Tender pork roast served with creamy mashed potatoes and steamed green beans.", price: "$18.50", img: "" },
        { id: "8", name: "Chicken Stir-Fry with Cashews", description: "Chicken stir-fried with vegetables and cashew nuts in a savory sauce, served with rice.", price: "$15.00", img: "" },
        { id: "9", name: "Vegetarian Tacos", description: "Soft tortillas filled with seasoned beans, guacamole, lettuce, and salsa.", price: "$10.00", img: "" },
        { id: "10", name: "Shrimp Scampi", description: "Shrimp sautéed in garlic butter sauce, served over pasta with a sprinkle of parmesan.", price: "$17.00", img: "" },
        { id: "11", name: "Beef Tacos with Sour Cream", description: "Ground beef seasoned with taco spices, served in soft tortillas with sour cream, cheese, and lettuce.", price: "$12.00", img: "" }
    ],
    desserts: [
        { id: "1", name: "Chocolate Lava Cake", description: "A rich chocolate cake with a molten center, served with vanilla ice cream.", price: "$6.99", img: "" },
        { id: "2", name: "Fruit Tart with Custard Filling", description: "A buttery tart shell filled with smooth vanilla custard and topped with fresh fruit.", price: "$5.50", img: "" },
        { id: "3", name: "Cheesecake with Raspberry Sauce", description: "Creamy cheesecake on a graham cracker crust, topped with a tangy raspberry sauce.", price: "$7.99", img: "" },
        { id: "4", name: "Tiramisu", description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.", price: "$6.00", img: "" },
        { id: "5", name: "Apple Pie with Vanilla Ice Cream", description: "Classic apple pie with a flaky crust, served with a scoop of vanilla ice cream.", price: "$5.00", img: "" },
        { id: "6", name: "Lemon Meringue Pie", description: "A tart lemon filling topped with fluffy meringue, served in a flaky pie crust.", price: "$6.50", img: "" },
        { id: "7", name: "Chocolate Mousse", description: "Rich, creamy chocolate mousse served with a dollop of whipped cream.", price: "$5.50", img: "" },
        { id: "8", name: "Brownies with Walnuts", description: "Decadent chocolate brownies with crunchy walnuts, served warm.", price: "$4.99", img: "" },
        { id: "9", name: "Banana Split", description: "Three scoops of ice cream topped with bananas, whipped cream, chocolate syrup, and a cherry.", price: "$7.50", img: "" },
        { id: "10", name: "Crepes with Nutella", description: "Thin crepes filled with Nutella, served with fresh strawberries and powdered sugar.", price: "$6.50", img: "" },
        { id: "11", name: "Vanilla Panna Cotta", description: "Creamy Italian dessert served with a berry coulis and fresh mint.", price: "$6.99", img: "" }
    ],
    drinks: [
        { id: "1", name: "Americano", description: "Espresso diluted with hot water for a smooth coffee flavor.", price: "$3.00", img: "" },
        { id: "2", name: "Cappuccino", description: "Espresso topped with steamed milk and foam.", price: "$4.00", img: "" },
        { id: "3", name: "Latte", description: "Creamy espresso drink with steamed milk and a light foam topping.", price: "$4.50", img: "" },
        { id: "4", name: "Green Tea Matcha", description: "Powdered green tea whisked with steamed milk.", price: "$5.00", img: "" },
        { id: "5", name: "Hot Chocolate", description: "Rich chocolate drink topped with whipped cream.", price: "$3.50", img: "" },
        { id: "6", name: "Iced Coffee", description: "Chilled brewed coffee served over ice.", price: "$3.00", img: "" },
        { id: "7", name: "Freshly Squeezed Orange Juice", description: "Freshly squeezed orange juice served cold.", price: "$3.99", img: "" },
        { id: "8", name: "Lemonade", description: "Refreshing lemonade made with fresh lemons.", price: "$2.99", img: "" },
        { id: "9", name: "Smoothie", description: "Fruit smoothie made with yogurt and a blend of fresh fruits.", price: "$4.99", img: "" },
        { id: "10", name: "Iced Tea", description: "Chilled tea served with a slice of lemon.", price: "$2.50", img: "" },
        { id: "11", name: "Espresso Shot", description: "A single shot of rich, strong espresso.", price: "$2.00", img: "" }
    ]
};
$('document').ready( () => {
    $(".breakfast").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
        }
    })
    $(".lunch").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.lunchs[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.lunchs[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.lunchs[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.lunchs[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.lunchs[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.lunchs[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.lunchs[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.lunchs[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.lunchs[i].description}</p>
                    </a>
                 `);
            }
        }
    })
    $(".dinner").click(() => {
        $(".empty").empty();

        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.dinners[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.dinners[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.dinners[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.dinners[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.dinners[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.dinners[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.dinners[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.dinners[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.dinners[i].description}</p>
                    </a>
                 `);
            }
        }
    })
    $(".dessert").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.desserts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.desserts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.desserts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.desserts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.desserts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.desserts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.desserts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.desserts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.desserts[i].description}</p>
                    </a>
                 `);
            }
        }
    })
    $(".drink").click(() => {
        $(".empty").empty();
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                console.log("kcuishcuiwhwu", i);
                
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.drinks[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.drinks[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.drinks[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.drinks[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.drinks[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.drinks[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.drinks[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.drinks[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.drinks[i].description}</p>
                    </a>
                 `);
            }
        }
    })

    if ($(".breakfast.active")) {
        for (var i = 0; i < menu.breakfasts.length; i++) {
            if (i >= 0 && i <=2){
                $(".menu-wrapper1").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 3 && i <=6){
                $(".menu-wrapper2").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
            else if (i >= 7 && i <=10){
                $(".menu-wrapper3").append(`
                    <a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                        <div class="row no-gutters">
                             <div class="col d-flex justify-content-between">
                                <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">${menu.breakfasts[i].name}</h6>
                                <p class="text-danger font-weight-bold mb-0">${menu.breakfasts[i].price}</p>
                             </div>
                        </div>
                        <p class="w-xl-75 text-600 mb-4">${menu.breakfasts[i].description}</p>
                    </a>
                 `);
            }
        }
    }
})