import { useLoaderData, Link } from 'react-router-dom';

const BrandsOnSale = () => {
  const data = useLoaderData(); 
  const brandsOnSale = data.filter(brand => brand.isSaleOn);

  return (
    <div className="my-12 lg:my-16">
      <h2 className="text-2xl font-bold  md:text-5xl text-center my-12 text-blue-950">Brands on Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {brandsOnSale.map((brand) => (
          <div key={brand._id} className="bg-[#bbedff6c] flex flex-col p-4 lg:py-8 border-none rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link to={`/brand-details/${brand._id}`} className="flex flex-col items-center">
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-32 h-32 object-contain mb-2"
              />
              <h3 className="text-xl font-semibold mb-3 md:text-2xl lg:text-3xl text-[#22085e]">{brand.brand_name}</h3>
              <p className="text-sm text-gray-500 md:text-base">Category: {brand.category}</p>
              <p className="text-sm text-gray-500 mt-1 md:text-base mb-4">Total Coupons: {brand.coupons.length}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSale;
