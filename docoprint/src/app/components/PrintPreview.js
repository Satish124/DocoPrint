"use client";
import { useState } from 'react';

export default function PrintPreview() {
  const [printColor, setPrintColor] = useState('color');
  const [printSize, setPrintSize] = useState('A4');
  const [spiralBinding, setSpiralBinding] = useState(false);

  // Calculate total price
  const pageCount = 5;
  const colorPrice = 10;
  const bwPrice = 3;
  const bindingPrice = 30;
  
  const totalPrice = printColor === 'color' 
    ? pageCount * colorPrice + (spiralBinding ? bindingPrice : 0)
    : pageCount * bwPrice + (spiralBinding ? bindingPrice : 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Printout Preview</h1>
      
      <div className="mb-6">
        <button className="flex items-center text-blue-600 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Files
        </button>
        <div className="border-t border-gray-200 my-4"></div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Number of copies</h2>
        <p className="text-gray-600 mb-4">File 1 (5 pages)</p>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Choose print color</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => setPrintColor('color')}
              className={`px-4 py-2 rounded ${printColor === 'color' ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100'}`}
            >
              Color [Rs.10/page]
            </button>
            <button 
              onClick={() => setPrintColor('bw')}
              className={`px-4 py-2 rounded ${printColor === 'bw' ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100'}`}
            >
              B & W [Rs.3/page]
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Choose print size</h3>
          <div className="flex space-x-4">
            {['A4', 'A3', 'A2'].map((size) => (
              <button
                key={size}
                onClick={() => setPrintSize(size)}
                className={`px-4 py-2 rounded ${printSize === size ? 'bg-blue-100 text-blue-800 border border-blue-300' : 'bg-gray-100'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={spiralBinding}
            onChange={(e) => setSpiralBinding(e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded"
          />
          <span className="ml-2">Spiral Binding : Rs. 30</span>
        </label>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-between items-center mb-6">
        <p>Total pages: {pageCount}</p>
        <p className="text-lg font-bold">Rs. {totalPrice}</p>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Add to cart
      </button>
    </div>
  );
}