let FoodArray = [];
let totalCalories = 0;

let Food = function(pFoodName, pCalories){
    this.FoodName = pFoodName;
    this.Calories = parseInt(pCalories);
}

document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("submit").addEventListener("click", function() {

        let nFoodName = document.getElementById("foodName").value;
        let nCaloriesValue = document.getElementById("caloriesValue").value;
        let foodCalories = new Food(nFoodName, nCaloriesValue);
        FoodArray.push(foodCalories)
        
        totalCalories += foodCalories.Calories; 
        document.getElementById("total").value = totalCalories;
        console.log(FoodArray);
    });

});
