import PropTypes from "prop-types";

function Button({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    rounded,
                    outline,
                }) {
    return(
        <button className="px-3 py-1.5 m-1 border border-blue-600 bg-blue-400 text-white">{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)
        ;

        if(count > 1) {
            return new Error(`Invalid props: Only one of primary, secondary, success, warning, or danger can be true`);
        }
    },
};

export default Button;