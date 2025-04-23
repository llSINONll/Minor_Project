import React from "react";

const EventManagement = () => {
  // Mock data for events
  const events = [
    {
      id: 1,
      name: "Alumni Meetup 2024",
      date: "2024-12-30",
      location: "Main Auditorium, XYZ Jabalpur",
      description: "A meetup for alumni to reconnect and share their experiences.",
    },
    {
      id: 2,
      name: "Tech Talk: Future of AI",
      date: "2025-01-15",
      location: "Room 101, XYZ Jabalpur",
      description: "A seminar on the advancements in AI and its applications.",
    },
    {
      id: 3,
      name: "Annual Sports Day",
      date: "2025-02-10",
      location: "Sports Complex, XYZ Jabalpur",
      description: "Join us for a day full of fun and sports activities.",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Event Management</h1>
      <div>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              marginBottom: "15px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`You have RSVP'd for ${event.name}!`)}
            >
              RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
