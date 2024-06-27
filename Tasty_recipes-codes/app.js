let showFilter = false;
let filterIcon = document.querySelector('.filter-icon');
let savedIcon = document.querySelector('.saved-icon');
let filterMenu = document.querySelector('#filter-menu');
filterMenu.style.visibility = "hidden";
let showMenu = false;
let hamburgerIcon = document.querySelector('.hamburger-icon');
let mainMenu = document.getElementById('main-menu');
mainMenu.style.visibility ='hidden';
let ingrediantsDiv = document.querySelector("#ingrediants");
let cuisinesDiv = document.querySelector("#cuisines");
let prepTimesDiv = document.querySelector("#prep-times");
let dietaryRestDiv = document.querySelector("#dietary-restrictions");
let recipesDiv = document.querySelector("#recipes");
let submitBtn = document.querySelector("#submitBtn");


// list of filter iteams


const ingredients = ['Avocado','Tomato', 'Panner', 'Onion', 'Garlic', 'Ginger','Cheese', 'Chicken','Shrimp','Mayonnaise','Soy sauce','Lime juice','Turmeric'];
const cuisines = ['Chinese', 'Mexican', 'Japanese','Indian','Spanish'];
const prepTimes = ['10-20min', '30-40min', '40-55min','1-2hr'];
const dietryRes = ['Non Vegetarian', 'Vegetarian'];


// list of recipes

    const recipes = [
        {
            name: 'Tomato Soup',
            ingredients: [
                "olive oil",
                "Onion",
                "Garlic",
                "Tomatoes",
                "Vegetable",
                "Sugar",
                "Salt",
                "Black pepper"
            ],
            image: './Recipe image/tomato-8323289_640.jpg',
            procedure: 'To make tomato soup, heat 2 tablespoons of olive oil in a pot over medium heat. Sauté 1 chopped onion until soft, then add 2 minced garlic cloves and cook for a minute. Add 4 cups of chopped tomatoes (or 2 cans with juice) and 2 cups of broth. Season with 1 tablespoon sugar (optional), 1 teaspoon salt, and 1/2 teaspoon black pepper. Bring to a boil, then simmer for 20-30 minutes. Blend the soup until smooth. For a creamy version, stir in 1/2 cup of cream or milk. Serve hot, garnished with fresh basil if desired.',
            cuisine:'Spanish',
            Preparation_Time:'20-30mins',
            dietary_Restriction:'Vegetarian'
        },
        {
            name: 'Chicken Curry',
            ingredients: [
                "Chicken",
                "Vegetable",
                "Onion",
                "Garlic",
                "Ginger",
                "Tomatoes",
                "Turmeric",
                "Cumin powder",
                "Coriander powder",
                "Chili powder",
                "Garam masala",
                "Yogurt",
                "Salt"
            ],
            image: './Recipe image/Chicken curry.jpg',
            procedure: 'Heat vegetable oil in a large pan over medium heat. Sauté onions until golden brown, then add minced garlic and ginger, cooking for 1-2 minutes. Stir in turmeric, cumin, coriander, and chili powder for 1 minute. Add chopped tomatoes, cook until softened. Add chicken, coat in spices, cook for 5 minutes. Pour in coconut milk or yogurt, season with salt, bring to a boil, simmer for 20-25 minutes until chicken is cooked and sauce thickens. Stir in garam masala, cook for 2 minutes. Garnish with cilantro and serve hot with rice or naan.',
            cuisine:'Indian',
            Preparation_Time:'1-2hr',
            dietary_Restriction:'Non Vegetarian'

        },
        {
            name: 'Shrimp And Avocado Salad',
            ingredients:[
                "Avocado",
                "yogurt",
                "Lime juice",
                "Garlic",
                "Salt",
                "Garlic",
                "Shrimp",
                "Butter",
                "Chili Powder",
                "Cayenne",
                "Cucumber",
                "Spinach",
                "Cilantro",
                "Peanuts"
            ],
            image: './Recipe image/shrimp-and-avocado-salad.jpg',
            procedure: 'Heat butter, add garlic and shrimp, season with chili and cayenne, sauté until golden. Fry wonton strips in oil, drain, and salt. Mix avocados, cucumber, spinach, and shrimp in a bowl. Puree avocado, yogurt, lime juice, garlic powder, and salt. Pour dressing over salad, top with cilantro and peanuts. Serve.',
            cuisine:'Mexican',
            Preparation_Time:'30-40mins',
            dietary_Restriction:'Non Vegetarian'
        },
        {
            name: 'Chicken Bhuna',
            ingredients:[
                "Vegetable oil",
                "Onions",
                "Salt",
                "Garlic",
                "Ginger",
                "Water",
                "Chili powder",
                "Coriander",
                "Cumin",
                "Turmeric",
                "Tomato",
                "Green chiles",
                "Chicken",
                "Curry paste, such as Patak's",
                "Cilantro leaves"
            ],
            image: './Recipe image/Chicken bhunna.jpeg',
            procedure: 'Heat oil in a pan over high heat. Cook onion and salt for 5 mins. Add garlic and ginger; cook until fragrant. Add hot water, cover, cook until water evaporates, about 5 mins. Add spices; toast for 5 mins. Stir in tomatoes and chiles, cover, cook 5 mins. Add chicken, cook until browned, 5-7 mins. Stir in curry paste, cover, cook until chicken is done, about 5 mins. Season and sprinkle with cilantro.',
            cuisine:'Indian',
            Preparation_Time:'1-2hr',
            dietary_Restriction:'Non Vegetarian'
        },
        {
            name: 'Authentic Saag Paneer',
            ingredients:[
                "Spinach",
                "Fenugreek leaves",
                "Canola oil",
                "Panner",
                "Cumin Seeds",
                "Onion",
                "Garlic",
                "Ginger",
                "Tamato",
                "Garam Masala",
                "Turmeric",
                "Cayenne Pepper",
                "Cream",
                "Salt"
            ],
            image: './Recipe image/saag panner.jpg',
            procedure: 'To make saag paneer, boil spinach and fenugreek, then blend until finely chopped. Fry paneer until browned; set aside. Fry cumin seeds, onion, garlic, ginger, tomato, spices. Add pureed spinach, paneer, cream; simmer covered for 15 mins.',
            cuisine:'Indian',
            Preparation_Time:'1-2hr',
            dietary_Restriction:'Vegetarian'
        },
        {
            name: 'Green Onion Cakes',
            ingredients: [
                "Bread Flour",
                "Boiling Water",
                "Vegetable oil",
                "Salt and Pepper",
                "Onions"
            ],
            image: './Recipe image/Green onion cake.jpg',
            procedure: 'Mix flour and boiling water, knead into a ball, and let rest for 30-60 minutes covered. Divide into 16 pieces, roll each into a 1/4 inch circle. Brush with oil, season with salt, pepper, and green onions. Roll up, coil into pancakes, pinch ends, flatten to 1/4 inch. Fry in oil until golden, 2 mins each side, adding more oil as needed.',
            cuisine:'Chinese',
            Preparation_Time:'30-40min',
            dietary_Restriction:'Vegetarian'
        },
        {
            name: 'Chicken Teriyaki',
            ingredients :[
                "Soy sauce",
                "Sake",
                "Rice vinegar",
                "Brown Sugar, or more to taste",
                "White sesame seeds",
                "Red Pepper",
                "Peanut oil",
                "Sesame oil",
                "Kosher salt",
                "Black Pepper",
                "Chicken",
                "Ginger",
                "Garlic",
                "Onion",
                "Rice"
            ],
            image: './Recipe image/Chicken teriyaki.jpeg',
            procedure: 'Mix soy sauce, sake, rice vinegar, and brown sugar in a bowl until sugar dissolves. Add sesame seeds and crushed red pepper; set aside. Heat oils in skillet over high heat. Season chicken with salt and pepper, cook until browned, 4-6 mins. Flip, cook 1 min, remove from pan. Reduce heat, add ginger, garlic, cook 1 min. Add green onions, cook 1 min. Pour in 1 cup soy sauce mixture, scrape browned bits. Boil, reduce until slightly thickened. Return chicken, cook until coated and done. Serve over rice, garnish with green onions.',
            cuisine:'Japanese',
            Preparation_Time:'30-40min',
            dietary_Restriction:'Non Vegetarian'
        },
        {
            name: 'Creamy Avocado Dip',
            ingredients:[
                "Avocado",
                "Greek yogurt",
                "lime",
                "Garlic",
                "Salt"
            ],
            image: './Recipe image/avacardo cream.jpg',
            procedure: 'Mash avocado,Mix in yogurt, lime juice, garlic powder, and salt. Adjust to taste. VOILA! Two minutes and done',
            cuisine:'Mexican',
            Preparation_Time:'10-20min',
            dietary_Restriction:'Vegetarian'
        },
        {
            name: 'California Roll',
            ingredients : [
                "Water",
                "White rice",
                "Rice vinegar",
                "Sugar",
                "Salt",
                "Crab meat",
                "Mayonnaise",
                "Nori",
                "Avocado",
                "Caviar",
                "English Cucumber",
                "Ginger",
                "Soy sauce",
                "Wasabi"
            ],
            image: './Recipe image/california roll.jpg',
            procedure: 'Cover a sushi rolling mat with plastic wrap. Cook rice, mix with vinegar, sugar, and salt; cool. Combine crab and mayo. Place rice on nori, add avocado, crab mixture, tobiko, and cucumber. Roll tightly with the mat, top with tobiko, press gently, and remove plastic. Cut into pieces with a wet knife. Serve with ginger, soy sauce, and wasabi.',
            cuisine:'Japanese',
            Preparation_Time:'40-55min',
            dietary_Restriction:'Vegetarian'
        },
        {
            name: 'Chicken Fajita Tacos',
            ingredients : [
                "Orange",
                "Taco seasoning",
                "Vegetable oil",
                "Chicken",
                "Onion",
                "Green bell pepper",
                "Red bell pepper",
                "Flour tortillas",
                "Avocado",
                "Cream",
                "Cheese"
            ],
            image: './Recipe image/taca.jpg',
            procedure: 'Marinate chicken in orange juice, taco seasoning, and oil overnight. Cook chicken in a hot skillet for 5 minutes, then add onions and bell peppers; cook until tender. Heat tortillas, fill with chicken, avocado, sour cream, and cotija cheese. Serve immediately.',
            cuisine:'Mexican',
            Preparation_Time:'30-40min',
            dietary_Restriction:'Non Vegetarian'
        }

    ];


//adding recipes to the site dynamically

    recipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        const contentDiv = document.createElement('div');
        contentDiv.classList.add("content-div");
        const imgDiv = document.createElement('div');
        imgDiv.classList.add("img-div");

         // Create heart-shaped checkbox
        const favDiv = document.createElement('div');
        favDiv.classList.add('heart-checkbox');
        const heartCheckbox = document.createElement('input');
        heartCheckbox.type = 'checkbox';
        heartCheckbox.id = `heart-${recipe.name.replace(/\s+/g, "-")}`;
        heartCheckbox.value = recipe.name;
        heartCheckbox.classList.add('heart');
        const heartLabel = document.createElement('label');
        heartLabel.setAttribute('for', heartCheckbox.id);
        favDiv.appendChild(heartCheckbox);
        favDiv.appendChild(heartLabel);

        const div = document.createElement('div');
        div.classList.add('tooltip');
        div.textContent = 'Save';
        


        const recipeImg = document.createElement('img');
        recipeImg.src = recipe.image;
        recipeImg.classList.add(recipe.name.replace(/\s+/g, "-"));
        recipeImg.classList.add('recipe-img');
        imgDiv.appendChild(recipeImg);
        imgDiv.appendChild(favDiv);
        imgDiv.appendChild(div)
        recipeDiv.appendChild(imgDiv);

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.name;
        recipeTitle.classList.add("recipeTitle");
        recipeDiv.appendChild(recipeTitle);

        recipeDiv.appendChild(contentDiv);

        const recipeIngrediants = document.createElement('p')
        recipeIngrediants.innerHTML = `<b>Ingredients</b>:${recipe.ingredients.join(', ')}`;
        recipeIngrediants.classList.add("allIngrediants");
        contentDiv.appendChild(recipeIngrediants);

        const recipeProcedure =document.createElement('p');
        recipeProcedure.innerHTML = `<b>Procedure</b>:${recipe.procedure}`;
        recipeProcedure.classList.add("procedure");
        contentDiv.appendChild(recipeProcedure);

        const recipeCuisine= document.createElement('p')
        recipeCuisine.innerHTML = `<b>Cuisine</b>:${recipe.cuisine}`;
        recipeCuisine.classList.add("cuisine");
        contentDiv.appendChild(recipeCuisine);

        const recipePrep= document.createElement('p')
        recipePrep.innerHTML = `<b>Preparation Time</b>:${recipe.Preparation_Time}`;
        recipeCuisine.classList.add("recipePrep");
        contentDiv.appendChild(recipePrep);

        const recipeDieRes= document.createElement('p')
        recipeDieRes.innerHTML = `<b>dietary Restriction</b>:${recipe.dietary_Restriction}`;
        recipeDieRes.classList.add("recipeDieRes");
        contentDiv.appendChild(recipeDieRes);

        recipesDiv.appendChild(recipeDiv);
    });


//  adding filter-option to site dynamically
ingredients.forEach((ingredient)=>{
    const lable = document.createElement("lable");
    const input = document.createElement("input");
    const para = document.createElement('p');
    para.classList.add("ingredient-name");
    para.innerText = ingredient;
    lable.classList.add('ingredient');
    input.type = "checkbox";
    input.classList.add('filter-input');
    input.value = ingredient;
    lable.appendChild(input);
    lable.appendChild(para);
    ingrediantsDiv.appendChild(lable);
});
cuisines.forEach((cuisine)=>{
    const lable = document.createElement("lable");
    const input = document.createElement("input");
    const para = document.createElement('p');
    para.classList.add("cuisine-name");
    para.innerText = cuisine;
    lable.classList.add('cuisine');
    input.type = "checkbox";
    input.value = cuisine;
    input.classList.add('filter-input');
    lable.appendChild(input);
    lable.appendChild(para);
    cuisinesDiv.appendChild(lable);
});
prepTimes.forEach((prepTime)=>{
    const lable = document.createElement("lable");
    const input = document.createElement("input");
    const para = document.createElement('p');
    para.classList.add("prepTime-name");
    para.innerText = prepTime;
    lable.classList.add('prepTime');
    input.type = "checkbox";
    input.value = prepTime;
    input.classList.add('filter-input');
    lable.appendChild(input);
    lable.appendChild(para);
    prepTimesDiv.appendChild(lable);
});
dietryRes.forEach((dietryRe)=>{
    const lable = document.createElement("lable");
    const input = document.createElement("input");
    const para = document.createElement('p');
    para.classList.add("dietryRe-name");
    para.innerText = dietryRe;
    lable.classList.add('dietryRe');
    input.type = "checkbox";
    input.value = dietryRe;
    input.classList.add('filter-input');
    lable.appendChild(input);
    lable.appendChild(para);
    dietaryRestDiv.appendChild(lable);
});

let heartIcons = document.querySelectorAll('.heart-checkbox input');
heartIcons.forEach((heartIcon)=>{
    localStorage.setItem(`${heartIcon.value}`, JSON.stringify(heartIcon.checked));
})

// Function to update heart checkboxes based on localStorage
function updateHeartCheckboxState() {
    const heartIcons = document.querySelectorAll('.heart-checkbox input');
    heartIcons.forEach((heartIcon) => {
        const storedValue = localStorage.getItem(heartIcon.value);
        if (storedValue === "true") {
            heartIcon.checked = true;
        } else {
            heartIcon.checked = false;
        }
    });
}

// Function to save liked recipes to localStorage
function saveLikedRecipes(heartIcon) {
    localStorage.setItem(heartIcon.value, heartIcon.checked.toString());
}

// Add event listener to heart checkboxes after clicking other buttons
function addHeartCheckboxListeners() {
    const heartIcons = document.querySelectorAll('.heart-checkbox input');
    heartIcons.forEach((heartIcon) => {
        heartIcon.addEventListener('click', () => {
            saveLikedRecipes(heartIcon);
        });
    });
}

//process after submit btn is clicked
submitBtn.addEventListener("click",()=>{
        let recipiesInfo = getAllLocalStorageItems();
        const allValues = recipiesInfo.map(item => item.key);
        const checkedIngredients = Array.from(document.querySelectorAll("#ingrediants input:checked")).map(input => input.value);
        const checkedCuisines = Array.from(document.querySelectorAll("#cuisines input:checked")).map(input => input.value);
        const checkedPrepTimes = Array.from(document.querySelectorAll("#prep-times input:checked")).map(input => input.value);
        const checkedDietaryRes = Array.from(document.querySelectorAll("#dietary-restrictions input:checked")).map(input => input.value);
        
        const matchedRecipes = recipes.filter(recipe => 
            (checkedIngredients.length === 0 || checkedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))) &&
            (checkedCuisines.length === 0 || checkedCuisines.includes(recipe.cuisine)) &&
            (checkedPrepTimes.length === 0 || checkedPrepTimes.includes(recipe.Preparation_Time)) &&
            (checkedDietaryRes.length === 0 || checkedDietaryRes.includes(recipe.dietary_Restriction))
        );

        recipesDiv.innerHTML = "";


        matchedRecipes.forEach((recipe) => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add("recipe");
                const contentDiv = document.createElement('div');
                contentDiv.classList.add("content-div");
                const imgDiv = document.createElement('div');
                imgDiv.classList.add("img-div");


                 // Create heart-shaped checkbox
                const favDiv = document.createElement('div');
                favDiv.classList.add('heart-checkbox');
                const heartCheckbox = document.createElement('input');
                heartCheckbox.type = 'checkbox';
                heartCheckbox.id = `heart-${recipe.name.replace(/\s+/g, "-")}`;
                heartCheckbox.value = recipe.name;
                heartCheckbox.classList.add('heart');
                const heartLabel = document.createElement('label');
                heartLabel.setAttribute('for', heartCheckbox.id);

                const div = document.createElement('div');
                div.classList.add('tooltip');
                
                
            
                let checkedValue;
                // setting attribute for checked and non checked
                for(let value of allValues){
                    if (value === recipe.name){
                        checkedValue= localStorage.getItem(value);
                        break;
                    }
                }
                if(checkedValue === "true"){
                    heartCheckbox.checked = true;
                    div.textContent = "Saved"

                }
                else{
                    heartCheckbox.checked = false;
                    div.textContent = 'Save';
                }
                

                favDiv.appendChild(heartCheckbox);
                favDiv.appendChild(heartLabel);

                
        
        
                const recipeImg = document.createElement('img');
                recipeImg.src = recipe.image;
                recipeImg.classList.add(recipe.name.replace(/\s+/g, "-"));
                recipeImg.classList.add('recipe-img');
                imgDiv.appendChild(recipeImg);
                imgDiv.appendChild(favDiv);
                imgDiv.appendChild(div);
                recipeDiv.appendChild(imgDiv);
    
                const recipeTitle = document.createElement('h2');
                recipeTitle.textContent = recipe.name;
                recipeTitle.classList.add("recipeTitle");
                recipeDiv.appendChild(recipeTitle);
        
                recipeDiv.appendChild(contentDiv);
        
                const recipeIngrediants = document.createElement('p')
                recipeIngrediants.innerHTML = `<b>Ingrediants</b>:${recipe.ingredients.join(', ')}`;
                recipeIngrediants.classList.add("allIngrediants");
                contentDiv.appendChild(recipeIngrediants);
        
                const recipeProcedure =document.createElement('p');
                recipeProcedure.innerHTML = `<b>Procedure</b>:${recipe.procedure}`;
                recipeProcedure.classList.add("procedure");
                contentDiv.appendChild(recipeProcedure);
        
                const recipeCuisine= document.createElement('p')
                recipeCuisine.innerHTML = `<b>Cuisine</b>:${recipe.cuisine}`;
                recipeCuisine.classList.add("cuisine");
                contentDiv.appendChild(recipeCuisine);
        
                const recipePrep= document.createElement('p')
                recipePrep.innerHTML = `<b>Preparation Time</b>:${recipe.Preparation_Time}`;
                recipeCuisine.classList.add("recipePrep");
                contentDiv.appendChild(recipePrep);
        
                const recipeDieRes= document.createElement('p')
                recipeDieRes.innerHTML = `<b>dietary Restriction</b>:${recipe.dietary_Restriction}`;
                recipeDieRes.classList.add("recipeDieRes");
                contentDiv.appendChild(recipeDieRes);
        
            recipesDiv.appendChild(recipeDiv);
        }); 
    // Update heart checkboxes and add listeners
    updateHeartCheckboxState();
    addHeartCheckboxListeners();
    // uncheckingFilter inputs
    unCheckingFilter();
});

//when hamburger-icon is clicked
hamburgerIcon.addEventListener('click',()=>{
    showMenu = (!showMenu)
    if(showMenu){
        mainMenu.style.visibility ='visible';
    }
    else{
        mainMenu.style.visibility ='hidden';
        if(showFilter){
            filterMenu.style.visibility ='hidden';
            showFilter = (!showFilter);
        }
    }
    // uncheckingFilter inputs
    unCheckingFilter();
});

//when filter buttom is clicked
filterIcon.addEventListener('click',()=>{
    showFilter = (!showFilter)
    if(showFilter){
        filterMenu.style.visibility ='visible';
    }
    else{
        filterMenu.style.visibility ='hidden';
    }
    // uncheckingFilter inputs
    unCheckingFilter();
});

//homeicon refresh functionality
let homeIcon = document.querySelector('.home-icon');
homeIcon.addEventListener('click',()=>{ 
    let recipiesInfo = getAllLocalStorageItems();
    const allValues = recipiesInfo.map(item => item.key);
    recipesDiv.innerHTML= "";
    recipes.forEach((recipe)=>{
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        const contentDiv = document.createElement('div');
        contentDiv.classList.add("content-div");
        const imgDiv = document.createElement('div');
        imgDiv.classList.add("img-div");


        // Create heart-shaped checkbox
        const favDiv = document.createElement('div');
        favDiv.classList.add('heart-checkbox');
        const heartCheckbox = document.createElement('input');
        heartCheckbox.type = 'checkbox';
        heartCheckbox.id = `heart-${recipe.name.replace(/\s+/g, "-")}`;
        heartCheckbox.value = recipe.name;
        heartCheckbox.classList.add('heart');
        const heartLabel = document.createElement('label');
        heartLabel.setAttribute('for', heartCheckbox.id);

        const div = document.createElement('div');
        div.classList.add('tooltip');
        
            
        let checkedValue;
        // setting attribute for checked and non checked
        for(let value of allValues){
            if (value === recipe.name){
                checkedValue= localStorage.getItem(value);
                break;
            }
        }
        if(checkedValue === "true"){
            heartCheckbox.checked = true;
            div.textContent = "Saved";
        }
        else{
            heartCheckbox.checked = false;
            div.textContent = 'Save';
        }
        favDiv.appendChild(heartCheckbox);
        favDiv.appendChild(heartLabel);
        

        
    
        const recipeImg = document.createElement('img');
        recipeImg.src = recipe.image;
        recipeImg.classList.add(recipe.name.replace(/\s+/g, "-"));
        recipeImg.classList.add('recipe-img');
        imgDiv.appendChild(recipeImg);
        imgDiv.appendChild(favDiv);
        imgDiv.appendChild(div);
        recipeDiv.appendChild(imgDiv);

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.name;
        recipeTitle.classList.add("recipeTitle");
        recipeDiv.appendChild(recipeTitle);
    
        recipeDiv.appendChild(contentDiv);
    
        const recipeIngrediants = document.createElement('p')
        recipeIngrediants.innerHTML = `<b>Ingrediants</b>:${recipe.ingredients.join(', ')}`;
        recipeIngrediants.classList.add("allIngrediants");
        contentDiv.appendChild(recipeIngrediants);
    
        const recipeProcedure =document.createElement('p');
        recipeProcedure.innerHTML = `<b>Procedure</b>:${recipe.procedure}`;
        recipeProcedure.classList.add("procedure");
        contentDiv.appendChild(recipeProcedure);
    
        const recipeCuisine= document.createElement('p')
        recipeCuisine.innerHTML = `<b>Cuisine</b>:${recipe.cuisine}`;
        recipeCuisine.classList.add("cuisine");
        contentDiv.appendChild(recipeCuisine);
    
        const recipePrep= document.createElement('p')
        recipePrep.innerHTML = `<b>Preparation Time</b>:${recipe.Preparation_Time}`;
        recipeCuisine.classList.add("recipePrep");
        contentDiv.appendChild(recipePrep);
    
        const recipeDieRes= document.createElement('p')
        recipeDieRes.innerHTML = `<b>dietary Restriction</b>:${recipe.
        dietary_Restriction}`;
        recipeDieRes.classList.add("recipeDieRes");
        contentDiv.appendChild(recipeDieRes);
    
        recipesDiv.appendChild(recipeDiv);

    })
    // Update heart checkboxes and add listeners
    updateHeartCheckboxState();
    addHeartCheckboxListeners();
    // uncheckingFilter inputs
    unCheckingFilter();
});

//savedIcon function 
savedIcon.addEventListener('click',()=>{
    let recipiesInfo = getAllLocalStorageItems();
    const allValues = recipiesInfo.map(item => item.key);

    recipesDiv.innerHTML= "";            
    recipes.forEach((recipe)=>{
        let checkedValue;
        // setting attribute for checked and non checked
        for(let value of allValues){
            if (value === recipe.name){
                checkedValue= localStorage.getItem(value);
                break;
            }
        }
        if(checkedValue === "true"){
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add("recipe");
            const contentDiv = document.createElement('div');
            contentDiv.classList.add("content-div");
            const imgDiv = document.createElement('div');
            imgDiv.classList.add("img-div");

            // Create heart-shaped checkbox
            const favDiv = document.createElement('div');
            favDiv.classList.add('heart-checkbox');
            const heartCheckbox = document.createElement('input');
            heartCheckbox.type = 'checkbox';
            heartCheckbox.id = `heart-${recipe.name.replace(/\s+/g, "-")}`;
            heartCheckbox.value = recipe.name;

            heartCheckbox.classList.add('heart');
            const heartLabel = document.createElement('label');
            heartLabel.setAttribute('for', heartCheckbox.id);
            heartCheckbox.checked = true;
            favDiv.appendChild(heartCheckbox);
            favDiv.appendChild(heartLabel);
            

            const div = document.createElement('div');
            div.classList.add('tooltip');
            div.textContent = 'Saved';


            const recipeImg = document.createElement('img');
            recipeImg.src = recipe.image;
            recipeImg.classList.add(recipe.name.replace(/\s+/g, "-"));
            recipeImg.classList.add('recipe-img');
            imgDiv.appendChild(recipeImg);
            imgDiv.appendChild(favDiv);
            imgDiv.appendChild(div);
            recipeDiv.appendChild(imgDiv);

            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.name;
            recipeTitle.classList.add("recipeTitle");
            recipeDiv.appendChild(recipeTitle);

            recipeDiv.appendChild(contentDiv);

            const recipeIngrediants = document.createElement('p')
            recipeIngrediants.innerHTML = `<b>Ingrediants</b>:${recipe.ingredients.join(', ')}`;
            recipeIngrediants.classList.add("allIngrediants");
            contentDiv.appendChild(recipeIngrediants);

            const recipeProcedure =document.createElement('p');
            recipeProcedure.innerHTML = `<b>Procedure</b>:${recipe.procedure}`;
            recipeProcedure.classList.add("procedure");
            contentDiv.appendChild(recipeProcedure);

            const recipeCuisine= document.createElement('p')
            recipeCuisine.innerHTML = `<b>Cuisine</b>:${recipe.cuisine}`;
            recipeCuisine.classList.add("cuisine");
            contentDiv.appendChild(recipeCuisine);

            const recipePrep= document.createElement('p')
            recipePrep.innerHTML = `<b>Preparation Time</b>:${recipe.Preparation_Time}`;
            recipeCuisine.classList.add("recipePrep");
            contentDiv.appendChild(recipePrep);

            const recipeDieRes= document.createElement('p')
            recipeDieRes.innerHTML = `<b>dietary Restriction</b>:${recipe.dietary_Restriction}`;
            recipeDieRes.classList.add("recipeDieRes");
            contentDiv.appendChild(recipeDieRes);

            recipesDiv.appendChild(recipeDiv);
        }    
    })
    // Update heart checkboxes and add listeners
    updateHeartCheckboxState();
    addHeartCheckboxListeners();

    // uncheckingFilter inputs
    unCheckingFilter();
});

// Function to save liked recipes to localStorage
function saveLikedRecipes(heartIcon) {
    localStorage.setItem(`${heartIcon.value}`, JSON.stringify(heartIcon.checked));
}

// Add event listener to heart checkboxes
heartIcons.forEach((heartIcon)=>{
    
    heartIcon.addEventListener('click',()=>{
        saveLikedRecipes(heartIcon);
    })
})
// getting all the key and valuse
function getAllLocalStorageItems() {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        items.push({ key: key, value: value });
    }
    return items;
}


const filterInputs = document.querySelectorAll('.filter-input');
// unchecking the checked box of filter-menu
function unCheckingFilter(){
    filterInputs.forEach((filterInput) =>{
        filterInput.checked = false;
    })
};