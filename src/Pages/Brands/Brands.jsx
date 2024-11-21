import { useState } from "react";
import { useLoaderData, Link, useNavigate, NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const BrandsPage = ({ user }) => {
  const brands = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

 
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div  style={{ animationDuration: "3s" }}   className="container mx-auto my-8 px-4 lg:my-12 animate__fadeIn">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-950">
        All Brands
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a brand..."
          className="w-full p-3 border rounded-lg my-4 lg:my-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="brands-list flex flex-col gap-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="border p-4 lg:p-8 rounded-lg  flex items-center gap-4"
          >
           <div>
           <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-36 h-36 mr-12 object-contain"
            />
           </div>

            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-yellow-500">
                <span className="flex items-center text-yellow-500">
                  <FaRegStar />
                </span>
                {brand.rating}
              </div>
              <h2 className="text-xl font-bold lg:text-2xl text-blue-950">
                {brand.brand_name}
              </h2>
              <p className="text-sm text-gray-600 lg:text-base">
                {brand.description.slice(0,107)} . . . . . 
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              {brand.isSaleOn && (
                <div className="text-red-500 animate-bounce">Sale is on!</div>
              )}
              <NavLink to={`/brands/${brand._id}`}>
                <button
                  className=" text-white px-4 py-2 rounded-lg btn btn-primary"
                >
                  View Coupons
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
