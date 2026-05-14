import { useParams } from "react-router-dom";

const AreaListing = () => {
  const { areaName } = useParams();

  return (
    <div>
      <h1>Area Listing Page</h1>
      <p>Area: {areaName}</p>
    </div>
  );
};

export default AreaListing;