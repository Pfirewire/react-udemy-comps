import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
    const [selected, setSelected] = useState(null);

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    const handleSelect = () => {

    };

    return(
        <div>
            <Dropdown options={options} selected={selected} handleSelect={handleSelect} />
        </div>
    );
}

export default App;