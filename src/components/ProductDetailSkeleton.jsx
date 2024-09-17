import React from "react";

export const ProductDetailSkeleton = () => {
  return (
    <div className="p4 md:p-8 animate-pulse">
      <div className="w-1/2 h-10 bg-gradient-to-r from-gray-200 to-gray-300 mb-6"></div>
      <div className="md:flex">
        <div className="w-1/2 pr-4 mb-6 md:mb-4">
          <div className="w-full h-96 bg-gradient-to-t from-gray-200 to-gray-300 rounded-lg"></div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
          </div>
        </div>
        <div className="w-1/2 pl-4 space-y-4">
          <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="flex justify-between items-center mb-4">
            <div className="w-1/4 h-8 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-1/4 h-8 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          </div>
          <div className="w-1/2 h-10 bg-gradient-to-r from-gray-200 to-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
