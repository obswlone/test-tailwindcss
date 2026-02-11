import { ReactNode } from "react";

export function Container({children}:{children:ReactNode}){
    return <div className="mt-15 mb-15">{children}</div>
}