import React from "react";

const Dashboard = ({ product }) => {
  console.log(product);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        {product.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-800 font-bold mt-4">Rp {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
