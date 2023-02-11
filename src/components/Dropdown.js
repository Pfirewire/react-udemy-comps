import { useState } from "react";

function Dropdown({ options, selected, handleSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen((current) => !current);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);

    };

    const renderedOptions = options.map((option) => {
        return(
            <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
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