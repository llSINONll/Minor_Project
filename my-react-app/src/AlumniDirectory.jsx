import React, { useState } from "react";

const alumniData = [
  {
    id: 1,
    name: "Sahil Ahirwar",
    year: "2022",
    profession: "Software Developer",
    photo: "https://via.placeholder.com/100", // Replace with real images
  },
  {
    id: 2,
    name: "Yash Chourasia",
    year: "2022",
    profession: "Data Scientist",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Sahil Singh Thakur",
    year: "2022",
    profession: "AI Engineer",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Amit Verma",
    year: "2019",
    profession: "UI/UX Engineer",
    photo: "https://via.placeholder.com/100",
  },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredAlumni = alumniData.filter(
    (alumnus) =>
      alumnus.name.toLowerCase().includes(search) ||
      alumnus.profession.toLowerCase().includes(search)
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Alumni Directory
      </h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search by name or profession..."
          value={search}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Alumni List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={alumnus.photo}
                alt={alumnus.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ margin: "10px 0" }}>{alumnus.name}</h3>
              <p>Graduation Year: {alumnus.year}</p>
              <p>Profession: {alumnus.profession}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>
            No alumni found for "{search}".
          </p>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;
