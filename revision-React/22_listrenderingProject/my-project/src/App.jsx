import "./App.css";
import data from "./data.json";
function App() {
  console.log(data);
  return (
    <>
      <div className=" w-full flex flex-col gap-5 p-6">
        {data.map(function (phoneDetails, idx) {
          return (
            <div key={idx} className="flex bg-[#282828] p-3 rounded-lg ">
              {/* image */}
              <div className="w-1/4 flex justify-center items-center">
                <img
                  src={phoneDetails.image}
                  className="w-[250px] h-[300px] "
                  alt={phoneDetails.name}
                />
              </div>
              {/* details */}
              <div className="flex-1 ">
                <h1>{phoneDetails.name}</h1>
                <p className="my-2">
                  ✨ {phoneDetails.rating} | {phoneDetails.ratingsCount} Ratings
                  & {phoneDetails.reviewsCount}
                </p>
                <ul className="my-3">
                  {phoneDetails.details.map((item, idx) => (
                    <li className="list-disc ml-6">{item}</li>
                  ))}
                </ul>

                <p className="text-green-400">{phoneDetails.exchangeOffer}</p>
                <p className="text-green-300 mt-1">{phoneDetails.bankOffer}</p>
              </div>
              {/* price */}
              <div className="flex flex-col items-end">
                <h1 className="text-2xl font-bold">
                  ₹ {phoneDetails.originalPrice}
                </h1>
                <p className="line-through">{phoneDetails.discountedPrice}</p>
                <p className="text-green-400 text-lg">{phoneDetails.discountPercent}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
