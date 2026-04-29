
const universities = [
    { name: "University of Alabama at Birmingham", logo: "/images/logo/university_of_alabama.png" },
    { name: "Webster University", logo: "/images/logo/Webster_University_seal.svg" },
    { name: "Schiller International University", logo: "/images/logo/Schiller_International_University.jpg" },
    { name: "Alfred State College", logo: "/images/logo/Alfred_State_College.png" },
    { name: "University of Wisconsin-Stout", logo: "/images/logo/UW-Stout-Formal-WPU-Logo_Full-Color_Flat_RGB.png" },
    { name: "James Madison University", logo: "/images/logo/James_Madison_University.png" },
    { name: "University of Central Florida", logo: "/images/logo/University_of_Central_Florida.png" },
    { name: "University of Alabama at Birmingham", logo: "/images/logo/university_of_alabama.png" },
    { name: "Webster University", logo: "/images/logo/Webster_University_seal.svg" },
  ];
  
  export default function ScrollingUniversities() {
    return (
      <div className="w-full overflow-hidden backdrop-blur-md mt-20">

        <div className="relative overflow-hidden">
  
          <div className="flex gap-12 whitespace-nowrap animate-scroll">
            
            {[...universities, ...universities].map((uni, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[60px] opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  loading="lazy"
                  className="h-12 object-contain hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
  
          </div>
  
        </div>
      </div>
    );
  }