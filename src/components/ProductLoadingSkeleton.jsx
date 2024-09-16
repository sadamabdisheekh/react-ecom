import React from 'react'

export const ProductLoadingSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Repeat this block for the skeleton of each product */}
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 h-48 w-full mb-4 rounded-md"></div>
              <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      );
}
