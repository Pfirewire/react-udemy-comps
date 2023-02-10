import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    return(
        <div>
            <div>
                <Button success rounded outline>
                    <GoBell />
                    Button One
                </Button>
            </div>
            <div>
                <Button danger outline>Button Two</Button>
            </div>
            <div>
                <Button className="text-slate-500" warning>Button Three</Button>
            </div>
            <div>
                <Button secondary outline>Button Four</Button>
            </div>
            <div>
                <Button primary rounded>Button Five</Button>
            </div>
        </div>
    );
}

export default ButtonPage;