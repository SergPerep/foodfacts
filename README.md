# FoodFacts
The app calculates nutrition values (calories, proteins, fats and carbohydrates) of the meal using [Open Food Facts API](https://openfoodfacts.github.io/api-documentation/).

**Basic flow:**
1. User searches for food items via search input
2. User adds food items to the list (the meal)
3. User specifies the amount (grams) of a food item
4. Application calculates total nutrition value of the meal
## Features
**Must have**
- Search available food items
- Add food item to the meal list
- Specify the amount of a chosen food item
- Delete food item from the meal list
- Calculate the nutrition value of the whole meal

**Soon**
- Edit food item in the meal list (change the amount of food item)
- Add different meals: breakfast, lunch, dinner
- Save data to the local storage

## How to use
After cloning the repo install dependencies

```bash
$ npm install
```

To watch and compile scss files use
```bash
$ npm sass
```
