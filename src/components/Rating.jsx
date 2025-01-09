import StarSvg from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(StarSvg);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={StarSvg} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
