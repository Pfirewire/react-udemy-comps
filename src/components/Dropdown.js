import { useState } from "react";

function Dropdown({ options, selected, handleSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen((current) => !current);
    };

    const renderedOptions = options.map((option) => {
        return(
            <div key={option.value}>{option.label}</div>
        );
    });

    return(
        <div>
            <div onClick={handleMenuToggle}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;