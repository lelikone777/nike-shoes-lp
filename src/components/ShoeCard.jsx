import PropTypes from "prop-types";

const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgURL.thumbnail}
          alt={imgURL.thumbnail}
          className="object-contain"
        />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  bigShoeImg: PropTypes.string.isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
};

export default ShoeCard;
