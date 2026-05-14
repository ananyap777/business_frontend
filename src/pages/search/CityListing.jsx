import { useParams } from "react-router-dom";

const CityListing = () => {
  const { cityName } = useParams();

  return (
    <div>
      <h1>City Listing Page</h1>
      <p>City: {cityName}</p>
    </div>
  );
};

export default CityListing;