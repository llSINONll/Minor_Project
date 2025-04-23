import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample success stories
const successStories = [
  {
    id: 1,
    name: "Sahil Ahirwar",
    title: "AI Game Developer at Nintendo",
    description:
      "Sahil's journey from a B.Tech student to achieving his dream of working at Nintendo showcases his dedication to AI-driven game development.",
    image: "https://via.placeholder.com/300", // Replace with real images
  },
  {
    id: 2,
    name: "Yash Chourasia",
    title: "Data Scientist at Google",
    description:
      "Yash's innovative approach to machine learning has made his a standout data scientist at Google.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Sahil Singh Thakur",
    title: "Entrepreneur and Founder of TechWave",
    description:
      "Sahil launched TechWave, a platform connecting innovators with investors, transforming the tech startup ecosystem.",
    image: "https://via.placeholder.com/300",
  },
];

const SuccessStoryTracking = () => {
  const [selectedStory, setSelectedStory] = useState(successStories[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Success Story Tracking
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Carousel Section */}
        <div style={{ flex: 1, maxWidth: "500px" }}>
          <Slider {...settings}>
            {successStories.map((story) => (
              <div
                key={story.id}
                onClick={() => handleStoryClick(story)}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                <img
                  src={story.image}
                  alt={story.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <h3 style={{ margin: "10px 0", color: "cyan" }}>
                  {story.name}
                </h3>
              </div>
            ))}
          </Slider>
        </div>

        {/* Story Details Section */}
        <div
          style={{
            flex: 1,
            maxWidth: "400px",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "10px" }}>
            {selectedStory.title}
          </h2>
          <p style={{ fontStyle: "italic", color: "#666", marginBottom: "20px" }}>
            by {selectedStory.name}
          </p>
          <p style={{ color: "#444" }}>{selectedStory.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryTracking;
