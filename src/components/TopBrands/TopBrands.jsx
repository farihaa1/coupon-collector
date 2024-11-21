import Marquee from "react-fast-marquee";
import { useLoaderData, Link } from "react-router-dom";

const TopBrands = () => {
  const data = useLoaderData();

  return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="400"
    data-aos-offset="0" className="flex flex-col gap-2 mt-12 py-14">
      <h2 className="text-2xl font-bold md:text-5xl text-blue-950 mb-8 md:mb-12">
        Top Brands
      </h2>

      <div className="">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {data.map((brand) => (
            <div key={brand._id} className="flex flex-col gap-2 justify-center items-center border rounded-lg p-4 ml-6 ">
              <div>
                <Link
                  key={brand._id}
                  to={`/brands/${brand._id}`}
                  className="brand-logo"
                >
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="w-32 h-32 object-contain mx-4"
                  />
                </Link>
              </div>

              <h4 className="text-lg text-blue-950 font-semibold">{brand.brand_name}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
