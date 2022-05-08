import Rating from "./Rating";

interface AnimeCard {
    name: string,
    status: string,
    rating: number,
    imageSrc: string,
    imageAlt: string,
}

const Card = ( props : AnimeCard ) => {
    return (
      <div>
        <div className="w-full h-60 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <Rating rate={props.rating} />
        <h2 className=" font-bold text-sm text-white">{props.name}</h2>
       </div>
    );
}

export default Card;