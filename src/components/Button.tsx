import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: "primary" | "secondary" | "danger" | "success";
    onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
    return (
        <>
            <button className={"btn btn-" + color} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default Button;
