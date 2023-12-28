import PropTypes from "prop-types";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full bg-white"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
