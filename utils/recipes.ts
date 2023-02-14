interface Meal {
    strArea: string;
}

export const fetchRecipesAreas = async (): Promise<string[]> => {
    // await new Promise((res) => setTimeout(res, 5000));
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const response = await res.json();
    return response.meals.map((a: Meal) => a.strArea);
}