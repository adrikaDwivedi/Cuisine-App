import spoonacular from "./api";

export const searchRecipes = (query , cuisine = "" , diet = "", number=10) => {
    return spoonacular.get("/recipes/complexSearch", {
        params: {
            query , cuisine, diet , number
        },
    });
}

export const searchByIngredients = (ingredients,number=10)=>{
    return spoonacular.get("/recipes/findByIngredients", {
        params:{
            ingredients , number
        },
    })
}

export const getRecipesByCategory = async (query, type) =>{
    return spoonacular.get("/recipes/complexSearch", {
        params: {
            query, type,
        },
    })
}