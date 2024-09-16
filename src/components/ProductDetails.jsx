import React from 'react'

export const ProductDetails = () => {
  const product = {
    "id": 6,
    "title": "Calvin Klein CK One",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "category": "fragrances",
    "price": 49.99,
    "discountPercentage": 0.32,
    "rating": 4.85,
    "stock": 17,
    "tags": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Calvin Klein",
    "sku": "DZM2JQZE",
    "weight": 5,
    "dimensions": {
      "width": 11.53,
      "height": 14.44,
      "depth": 6.81
    },
    "warrantyInformation": "5 year warranty",
    "shippingInformation": "Ships overnight",
    "availabilityStatus": "In Stock",
    "reviews": [
      {
        "rating": 5,
        "comment": "Great value for money!",
        "date": "2024-05-23T08:56:21.619Z",
        "reviewerName": "Sophia Brown",
        "reviewerEmail": "sophia.brown@x.dummyjson.com"
      },
      {
        "rating": 3,
        "comment": "Very disappointed!",
        "date": "2024-05-23T08:56:21.619Z",
        "reviewerName": "Madison Collins",
        "reviewerEmail": "madison.collins@x.dummyjson.com"
      },
      {
        "rating": 1,
        "comment": "Poor quality!",
        "date": "2024-05-23T08:56:21.619Z",
        "reviewerName": "Maya Reed",
        "reviewerEmail": "maya.reed@x.dummyjson.com"
      }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 20,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.619Z",
      "updatedAt": "2024-05-23T08:56:21.619Z",
      "barcode": "2210136215089",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
  };
  return (
    <div className="p-4 md:p-8">
      <button className='bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200'>← Go Back
      </button>
      <h1 className='text-3xl font-bold mb-6'>
        {product.title}
      </h1>
      <div className='md:flex'>
        <div className='md:w-1/2 pr-4 mb-6 md:mb-0'>
        <img className='w-full h-96 object-cover rounded-lg shadow-md' src={product.thumbnail} alt={product.title} />
        <div className='flex mt-4 space-x-2 overflow-x-auto'>
        {product.images.map((img,index) => (
          <img className='w-24 object-cover h-24 rounded-lg shadow cursor-pointer' key={index} src={img} alt={product.title}/>
        ))}
        </div>
        </div>
        <div className='md:w-1/2 pl-4'>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-pink-600 font-semibold text-2xl'>${product.price}</span>
          <span className='text-sm text-gray-500'>${product.stock > 0 ? `${product.stock} in Stock` : 'Out of stock'}</span>
        </div>
        <div className='mb-4'>
            <span className='text-yellow-500'>
                {'★'.repeat(Math.round(product.rating))}
            </span>
            <span className='text-gray-500'>
                {'★'.repeat(Math.round(5 - product.rating))}
            </span>
        </div>
        </div>
      </div>
    
    </div>
  )
}
