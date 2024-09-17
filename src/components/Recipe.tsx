import { CiClock2 } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IDummyData } from "../typings/data";

interface RecipeProps {
  pizza: IDummyData;
}

const Recipe = ({ pizza }: RecipeProps) => {
  const navigate = useNavigate();
  const handleRecipeClick = (id: number) => {
    navigate(`/recipes/${id}`);
  };
  return (
    <div onClick={() => handleRecipeClick(pizza.id)} className="recipe">
      <div className="recipe_div">
        <img src={pizza.image} className="recipe_image" />
      </div>
      <div className="recipe_info">
        <div className="pizza_info">
          <h5>{pizza.name}</h5>
          <div className="pizza_ready">
            <CiClock2 />
            <p>{pizza.cookTimeMinutes}</p>
          </div>
        </div>
        <div className="review">
          <h5>Reviews {pizza.rating}</h5>
          <div>
            <div className="meal">
              {pizza.mealType.map((meal, index) => (
                <h5 key={index}>{meal}</h5>
              ))}
            </div>
            <MdStarRate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
