import React from "react";

import RecipeList from "@/components/RecipeList";

export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface MealList {
    meals: Meal[]
}

const getMeals = async (type: string): Promise<MealList> => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
    const response = await res.json();
    return response;
}

interface Props {
    params: {
        type: string;
    };
}

const page = async (props: Props) => {
    const meals = await getMeals(props.params.type);
    return <RecipeList recipes={meals.meals} type={props.params.type} />;
}

export default page;