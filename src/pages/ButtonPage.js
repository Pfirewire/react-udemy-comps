import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    return(
        <div>
            <div>
                <Button success rounded outline>
                    <GoBell />
                    One
                </Button>
            </div>
            <div>
                <Button danger outline>Two</Button>
            </div>
            <div>
                <Button className="text-black" warning>Three</Button>
            </div>
            <div>
                <Button secondary outline>Four</Button>
            </div>
            <div>
                <Button primary rounded>Five</Button>
            </div>
        </div>
    );
}

export default ButtonPage;