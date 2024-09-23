import { useParams } from "react-router-dom";
import useDataFetch from "../hooks/useDataFetch";
import { CgCheck } from "react-icons/cg";

const Details = () => {
  const { id } = useParams();
  const { data } = useDataFetch();
  const pizza = data.find((pizza) => pizza.id === parseInt(id || "0"));
  console.log(pizza);
  return (
    <div className="details">
      <div className="info">
        <div className="top_info">
          <h2 className="pizza_title">{pizza?.name}</h2>
          {pizza?.instructions?.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </div>
        <div className="bottom_info">
          <h3 className="ingred">ingridients</h3>
          <hr className="detail_line" />
          <ul className="ingred_list">
            {pizza?.ingredients?.map((ingred) => (
              <li className="">
                <div className="circle_icon">
                  <CgCheck />
                </div>
                <h5>{ingred}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pizza_div">
        <img className="pizza_image" src={pizza?.image} alt="pizza" />
      </div>
    </div>
  );
};

export default Details;
