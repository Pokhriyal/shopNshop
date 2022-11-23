import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MultipleCarouselComponent from '../MultipleCarouselComponent';
import HeroBannerComponent from './HeroBannerComponent';
import getAllProducts from '../../redux/actions/productAction';

export default function LanddingPageComponent() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProductReducer);
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <HeroBannerComponent />
      <div
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        {product.products.length ? (
          <MultipleCarouselComponent show={4}>
            {product.products.map((item) => (
              <div>
                <Link to={`/product/${item.id}`}>
                  <div style={{ padding: 3 }}>
                    <img
                      src={item?.images?.[0]?.url}
                      alt="placeholder"
                      style={{ width: '100%' }}
                    />
                    {/* {item.name} */}
                  </div>
                </Link>
              </div>
            ))}
          </MultipleCarouselComponent>
        ) : null}
      </div>
    </>
  );
}
