import Link from 'next/link';
import React from 'react';

import { fetchRecipesAreas } from '@/utils/recipes';

type Props = {}

const page = async (props: Props) => {
    const areas = await fetchRecipesAreas();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {areas.map((a: string, idx: number) => (
                <Link className="shadow-gray-500 bg-gray-300 rounded text-2xl text-center py-10 font-bold hover:bg-blue-500 hover:text-white" key={idx} href={`/types/${a}`}>
                    <p>{a}</p>
                </Link>
            ))}
        </div>
    )
}

export default page