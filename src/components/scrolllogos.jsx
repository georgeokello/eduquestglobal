
const universities = [
    { name: "University of Alabama at Birmingham", logo: "/logos/uab.png" },
    { name: "Webster University", logo: "/logos/webster.png" },
    { name: "Schiller International University", logo: "/logos/schiller.png" },
    { name: "Alfred State College", logo: "/logos/alfred.png" },
    { name: "University of Wisconsin-Stout", logo: "/logos/wisconsin.png" },
    { name: "James Madison University", logo: "/logos/jmu.png" },
    { name: "University of Central Florida", logo: "/logos/ucf.png" },
    { name: "Fairleigh Dickinson University", logo: "/logos/fdu.png" },
    { name: "Lewis University", logo: "/logos/lewis.png" },
    { name: "Missouri University of Science and Technology", logo: "/logos/missouri.png" },
  ];
  
  export default function ScrollingUniversities() {
    return (
      <div className="w-full overflow-hidden backdrop-blur-md mt-20">

        <div className="relative overflow-hidden">
  
          <div className="flex gap-12 whitespace-nowrap animate-scroll">
            
            {[...universities, ...universities].map((uni, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[140px] opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  loading="lazy"
                  className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
  
          </div>
  
        </div>
      </div>
    );
  }