const TestimonialCard = ({ name, country, message, image }) => {
    return (
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition max-w-sm">
  
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{country}</p>
          </div>
        </div>
  
        {/* Message */}
        <p className="text-gray-600 leading-relaxed">
          “{message}”
        </p>
  
        {/* Optional Rating */}
        <div className="flex mt-4 text-yellow-400">
          ★★★★★
        </div>
  
      </div>
    );
  };
  
  export default TestimonialCard;