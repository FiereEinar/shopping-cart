import { Outlet, useParams, useNavigate } from 'react-router-dom';
import ComboBox from '../components/ComboBox.jsx';
import NavBar from '../components/NavBar.jsx';
import DefaultPage from './DefaultPage.jsx';
import LoadingPage from '../pages/LoadingPage.jsx';
import { useFetchData } from '../hooks/useFetchData.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function Shop() {
  const [shoppingItems, shoppingCategories, isLoading, error] = useFetchData();
  const { category } = useParams();
  const navigate = useNavigate();

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
          <div className="w-full flex items-center gap-2">
            <ComboBox
              categories={shoppingCategories}
              categoryValue={category}
            />
          </div>
          {category !== undefined ? (
            <Button
              className="w-fit"
              onClick={() => navigate('/shop')}
              size="sm"
              variant="outline"
            >
              Home
            </Button>
          ) : null}
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
