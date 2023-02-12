import React from "react";
import Image from "next/image";

import { Meal } from "@/app/types/[type]/page";

const RecipeList = (props: { recipes: Meal[]; type: string }) => {
    console.log(props.recipes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {props.recipes.map((recipe: Meal, idx: number) => {
            return <div className="rounded bg-slate-400" key={idx}>
                <Image src={recipe.strMealThumb} alt="Recipe Image" width={500} height={500} />
            </div>;
        })}
    </div>
  );
}

export default RecipeList;