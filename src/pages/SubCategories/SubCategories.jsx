import { useSelector } from 'react-redux';
import subcategories from '../../async/subcategories';
import './subCategories.css';

function SubCategories() {
  // const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.reducer.subCategories.data);
  console.log(subcategories);
  const mapSubCategories =
    subCategories &&
    subCategories.map((subCategory) => {
      <img src={subCategory.images.downsized.url} alt={subCategory.title} />;
    });
  return <div>{mapSubCategories}</div>;
}

export default SubCategories;
