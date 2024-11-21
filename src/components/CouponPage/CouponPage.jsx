import { useLoaderData, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const handleCopy = (couponCode) => {
  toast.success(`Coupon code "${couponCode}" copied successfully!`);
};

const CouponPage = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const brand = data.find((item) => parseInt(item._id) === parseInt(id));

  return (
    <div style={{ animationDuration: "3s" }} className="w-10/12 mx-auto px-4 my-12 lg:my-12 animate__animated animate__fadeInUp">
      <div className="text-center flex flex-col gap-4 max-w-4xl mx-auto my-12">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-52 mx-auto mb-4 py-12"
        />
        <div className="">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-950">
            {brand.brand_name}
          </h1>
          <p className="text-yellow-500 mt-2">Rating: {brand.rating}</p>
          <p className="text-gray-600 my-4">{brand.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {brand.coupons.map((coupon, index) => (
          <div
            key={index}
            className="border p-4 md:p-8 lg:p-12 rounded-2xl flex flex-col gap-2"
          >
            <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
              {coupon.coupon_code}
            </h2>
            <p className="text-gray-500 md:text-lg ">{coupon.description}</p>
            <p className="text-md text-gray-500 ">
              Expires on: {coupon.expiry_date}
            </p>
            <p className="text-md text-gray-500">{coupon.condition}</p>
            <div className="flex justify-between mt-4 ">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <button className="btn btn-primary text-white">Copy Code</button>
              </CopyToClipboard>
              <button
                className="btn btn-secondary text-white"
                onClick={() => window.open(brand.shop_link, "_blank")}
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
