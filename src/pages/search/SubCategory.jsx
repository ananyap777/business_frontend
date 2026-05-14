import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h1>Sub Category Page</h1>
      <p>Category: {categoryName}</p>
    </div>
  );
};

export default SubCategory;