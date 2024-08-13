function TestimonialCard({ customerName, description, rating }) {
    return (
      <div className="border p-4 rounded-2xl shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2">{customerName}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">
            {'🍋'.repeat(rating)}
          </span>
        </div>
      </div>
    );
  }
  
  export default TestimonialCard;