import React from "react";
import Link from "next/link";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="py-5 bg-slate-300">
        <div>
            <Link href="/">
                <h1 className="text-blue-700 font-bold text-5xl text-center">Recipal</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header;