import { useEffect, useState } from "react";

const Carousel = (props) => {
  const [active, setActive] = useState(0);

  const setActivePet = (index) => {
    setActive(index);
  };

  return (
    <div className="carousel">
      <img src={props.images[active]} alt="animal" />
      <div className="carousel-smaller">
        {props.images.map((photo, index) => {
          return (
            <img
              key={photo}
              src={photo}
              onClick={() => setActivePet(index)}
              data-index={index}
              className={active === index ? "active" : ""}
              alt="animal thumbnail"
            />
          );
        })}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
};

export default Carousel;
