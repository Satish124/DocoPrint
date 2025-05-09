export default function BottomNav() {
    const icons = {
      home: "🏠",
      rupee: "💰",
      upload: "📤",
      user: "👤",
    };
  
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between shadow-md rounded-t-2xl">
        {Object.entries(icons).map(([key, icon]) => (
          <div key={key} className="text-2xl">
            {icon}
          </div>
        ))}
      </div>
    );
  }
  