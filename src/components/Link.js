

function Link({ to }) {
    const handleClick = (e) => {
        e.preventDefault();

    };

    return <a onClick={handleClick} href={to}></a>
}