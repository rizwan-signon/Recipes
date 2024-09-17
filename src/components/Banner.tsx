import banner from "../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_div">
        <img src={banner} className="banner_image" />
      </div>
      <h1 className="banner_title">Food Dairy</h1>
    </div>
  );
};

export default Banner;
