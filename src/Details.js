import { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import Carousel from "./Carousel";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [pet, setPet] = useState({});
  const { id } = useParams();

  async function loadPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setLoading(false);
    setPet(json.pets[0]);
  }

  useEffect(() => {
    loadPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading && <h2>loading … </h2>}

      {!loading && (
        <div className="details">
          <Carousel images={pet.images} />
          <div>
            <h1>{pet.name}</h1>
            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
            <button>Adopt {pet.name}</button>
            <p>{pet.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Details);
