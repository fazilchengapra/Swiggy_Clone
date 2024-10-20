import { Link } from "react-router-dom";
import RateStar from "../assets/RateStar";
import constant from "../util/constant";
import truncate from "truncate";

const Card = (props) => {
  const data = props?.data?.info;

  console.log(data);

  return (
    <div className="">
      <Link to={`/resto/${data?.id}`}>
        <div className="w-72 cursor-pointer hover:scale-95 transition ease-in-out delay-150 p-4">
          <div className="mt-4 relative w-full h-44 rounded-xl overflow-hidden shadow-lg">
            <img
              className="object-cover w-full h-full"
              src={constant.IMG + data?.cloudinaryImageId}
              alt=""
            />
            <div className="absolute bottom-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="p-2 px-3">
                <p className="text-white text-xl font-extrabold">
                  {data?.aggregatedDiscountInfoV3?.header && data?.aggregatedDiscountInfoV3?.header +
                    " " +
                    data?.aggregatedDiscountInfoV3?.subHeader}
                </p>
              </div>
            </div>
          </div>

          <div className="pl-2 mt-2 overflow-hidden">
            <h3 className="font-bold text-lg">{truncate(data?.name, 25)}</h3>
            <div className="flex">
              <span className="inline-block mr-1 pt-[2px]">
                <RateStar />
              </span>
              <span className="inline-block font-md font-semibold">
                {data?.avgRatingString} •{" "}
              </span>
              <span className="inline-block font-md font-semibold mx-1">
                {data?.sla?.slaString}
              </span>
            </div>
          </div>
          <div className="pl-2">
            <div className="font-md">
              {truncate(data?.cuisines?.join(", "), 33)}
            </div>
            <div className="font-md">{truncate(data?.areaName, 33)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
