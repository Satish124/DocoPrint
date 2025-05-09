export default function Card({ title, price, quality, size, imgSrc }) {
    return (
      <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <ul className="text-sm text-gray-600 mt-1 space-y-1">
            <li>Price starting at {price}</li>
            <li>Paper Quality: {quality}</li>
            <li>Size: {size}</li>
          </ul>
          <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm">
            Upload Files
          </button>
        </div>
        <img src={imgSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
    );
  }
  