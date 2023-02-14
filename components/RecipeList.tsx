import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Meal } from "@/app/types/[type]/page";

const RecipeList = (props: { recipes: Meal[]; type: string }) => {
  if (!props.recipes) {
    return <div>No recipes found</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {props.recipes.map((recipe: Meal, idx: number) => {
            return <div className="rounded overflow-hidden bg-slate-300" key={idx}>
                <Image src={recipe.strMealThumb} alt="Recipe Image" width={500} height={500} />
                <div className="p-5">
                    <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
                    <Link className="text-white bg-blue-500 rounded py-1 px-3 block mt-5 hover:bg-blue-600 text-center" href={`/types/${props.type}/${recipe.idMeal}`}>
                        Get Recipe Details
                    </Link>
                </div>
            </div>;
        })}
    </div>
  );
}

export default RecipeList;