import React, { useState } from "react";

// Sample alumni data
const alumniData = [
  {
    id: 1,
    name: "Sahil Ahirwar",
    profession: "Software Developer",
    photo: "https://via.placeholder.com/100", // Replace with real image URLs
  },
  {
    id: 2,
    name: "Yash Chourasia",
    profession: "Data Scientist",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Sahil Singh Thakur",
    profession: "AI Engineer",
    photo: "https://via.placeholder.com/100",
  },
];

const NetworkingAndConnection = () => {
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSelectAlumnus = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setMessages([]); // Reset messages when selecting a new alumnus
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Networking & Connection
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Alumni Directory */}
        <div
          style={{
            flex: "1",
            maxWidth: "300px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
            Alumni Directory
          </h3>
          {alumniData.map((alumnus) => (
            <div
              key={alumnus.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #eee",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  selectedAlumnus?.id === alumnus.id
                    ? "0px 0px 5px 2px #007bff"
                    : "none",
              }}
              onClick={() => handleSelectAlumnus(alumnus)}
            >
              <img
                src={alumnus.photo}
                alt={alumnus.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{alumnus.name}</h4>
                <p style={{ margin: 0, color: "#666" }}>{alumnus.profession}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Messaging Section */}
        {selectedAlumnus ? (
          <div
            style={{
              flex: "2",
              maxWidth: "600px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
              Chat with {selectedAlumnus.name}
            </h3>
            <div
              style={{
                border: "1px solid #eee",
                padding: "10px",
                height: "300px",
                overflowY: "auto",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
                marginBottom: "10px",
              }}
            >
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: message.sender === "You" ? "right" : "left",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        backgroundColor:
                          message.sender === "You" ? "#007bff" : "#eee",
                        color: message.sender === "You" ? "#fff" : "#000",
                      }}
                    >
                      {message.text}
                    </span>
                  </div>
                ))
              ) : (
                <p style={{ color: "#888", textAlign: "center" }}>
                  No messages yet. Start the conversation!
                </p>
              )}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: "1",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              flex: "2",
              maxWidth: "600px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              color: "#888",
            }}
          >
            Select an alumnus to start chatting!
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkingAndConnection;
