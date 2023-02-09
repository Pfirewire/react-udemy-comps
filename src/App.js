import Button from "./components/Button";

function App() {
    return(
        <div>
            <div>
                <Button success rounded outline>One</Button>
            </div>
            <div>
                <Button danger outline>Two</Button>
            </div>
            <div>
                <Button warning>Three</Button>
            </div>
            <div>
                <Button secondary outline>Four</Button>
            </div>
            <div>
                <Button secondary rounded>Five</Button>
            </div>
        </div>
    );
}

export default App;