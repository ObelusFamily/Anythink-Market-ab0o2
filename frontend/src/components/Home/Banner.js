import logo from "../../imgs/logo.png";

const Banner = ({ inputValue, onInputChange }) => (
  <div className="banner text-white">
    <div className="container p-4 text-center">
      <img src={logo} alt="banner" />
      <div className="form-inline">
        <span id="get-part">A place to get</span>
        <input
          className="form-control flex-grow-1 m-4"
          id="search-box"
          type="search"
          placeholder="What is it that you truly desire?"
          value={inputValue}
          onChange={onInputChange}
        />
        <span> the cool stuff.</span>
      </div>
    </div>
  </div>
);

export default Banner;
