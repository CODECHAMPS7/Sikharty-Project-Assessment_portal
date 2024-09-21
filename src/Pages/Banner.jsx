import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import image5 from "../Assets/pic1.png";
import image6 from "../Assets/img3.png";
import image7 from "../Assets/img5.png";
import image8 from "../Assets/pic3.png";
/*const Banner = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '60vh',
        color: 'white'
      }}
    >
      <div
        style={{
          flex: 1,
          background: '#FFA500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Welcome to the Central Government Portal
          </h1>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: '#008000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Providing services and information to all citizens.
          </h1>
        </div>
      </div>
    </div>*/
    
    const CentralGovernmentPortal = () => {
      // Define an array with both headings, subtext, and images corresponding to each slide
      const slides = [
        {
          heading: "Welcome to the Central Government Portal",
          subtext: "A gateway to all the services and information provided by the government to empower and assist citizens. Build trust and connect with billions of users seamlessly.",
          image: image5,
        },
        {
          heading: "Government Services at Your Fingertips",
          subtext: "Access critical services like education, healthcare, and financial assistance with just a few clicks. Your convenience is our priority.",
          image: image6,
        },
        {
          heading: "Empowering Citizens Nationwide",
          subtext: "Our aim is to bridge the gap between the government and citizens by offering transparent, accessible, and efficient services.",
          image: image7,
        },
        {
          heading: "Transparency and Trust",
          subtext: "Your trust drives us to improve transparency and ensure that information is available whenever and wherever you need it.",
          image: image8,
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide
    
      const handleSlideChange = (index) => {
        setActiveIndex(index); // Update active index when slide changes
      };
    
      return (
        <section className="relative mt-12 rounded-lg shadow-md">
  <div className="absolute top-0 left-0 h-full w-1/3 bg-orange-500"></div>
  <div className="absolute top-0 left-1/3 h-full w-1/3 bg-white"></div>
  <div className="absolute top-0 left-2/3 h-full w-1/3 bg-green-600"></div>

  <div className="relative flex flex-col md:flex-row items-center justify-between p-8">
    <div className="flex-1 mb-6 md:mb-0 md:mr-8 z-10">
      <h1 className="text-5xl font-bold text-gray-800 leading-tight">
        {slides[activeIndex].heading}
      </h1>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        {slides[activeIndex].subtext}
      </p>
    </div>

    <div className="flex-1 w-full mt-8 md:mt-0 z-10">
      <Carousel
        className="w-full space-x-4"
        autoplay
        interval={3000}
        onChange={handleSlideChange}
        showThumbs={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-1">
            <img
              src={slide.image}
              alt={`Central Government Portal Slide ${index + 1}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
</section>
      );
    };
    
    export default CentralGovernmentPortal;