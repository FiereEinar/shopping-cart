import { Outlet, useParams } from 'react-router-dom';
import ComboBox from '../components/ComboBox.jsx';
import NavBar from '../components/NavBar.jsx';
import DefaultPage from './DefaultPage.jsx';
import LoadingPage from '../pages/LoadingPage.jsx';
import { useFetchData } from '../hooks/useFetchData.jsx';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [shoppingItems, shoppingCategories, isLoading, error] = useFetchData();
  const { category } = useParams();

  if (error)
    return (
      <h4 className="text-2xl">
        There was an error that occured. Please restart the page.
      </h4>
    );

  return (
    <div className="">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col gap-2 p-2 bg-gray-100">
          <NavBar shoppingItems={shoppingItems} />
          <div className="w-screen flex items-center gap-5">
            <ComboBox
              categories={shoppingCategories}
              categoryValue={category}
            />
            {category !== undefined ? (
              <div>
                <Link to="/shop">
                  <span className="hover:text-blue-300 transition-all">
                    Home
                  </span>
                </Link>
                {' > '}
                {category}
              </div>
            ) : null}
          </div>
          {category === undefined ? (
            <DefaultPage shopItems={shoppingItems} />
          ) : (
            <Outlet />
          )}
        </div>
      )}
    </div>
  );
}
