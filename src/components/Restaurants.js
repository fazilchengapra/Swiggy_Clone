import Card from "./Card";
import { useEffect, useState } from "react";

const Restaurant = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props]);

  return (
    <div>
      <div className="ml-52 mr-48 mt-10 ">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            Restaurants with online food delivery in Kochi
          </h2>
        </div>
      </div>
      <div className="ml-[190px] mr-20 flex mt-5 flex-wrap">
        {data?.map((d, index) => (
          <div className="pr-2">
            <Card key={d.id} data={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
