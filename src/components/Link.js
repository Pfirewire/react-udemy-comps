import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (e) => {
        e.preventDefault();

        navigate(to);
    };

    return <a onClick={handleClick} href={to}>{children}</a>
}

export default Link;