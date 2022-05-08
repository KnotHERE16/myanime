import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

interface starRate {
  rate: number;
}

function wholeStar(rate: number) {
  return Array.from(Array(Math.floor(rate)).keys());
}
const Rating = (props: starRate) => {
  return (
    <fieldset>
      <div className="inline-flex">
        { wholeStar(props.rate).map(() =>
        <label className=" text-2xl " title="1 star">
          <FontAwesomeIcon className=" text-orange-300 " icon={faStar} />
        </label>
       
        )}

        {props.rate % 1 > 0 && (
          <label className=" z-20 text-2xl " htmlFor="rating1">
            <FontAwesomeIcon
              className=" flex- text-orange-300"
              icon={faStarHalf}
            />
          </label>
        )}    
      </div>
      <label className="float-right text-white text-sm pt-2">{props.rate?props.rate:""}</label>
    </fieldset>
  );
};

export default Rating;
