import React, { useState } from 'react'

export default function Mobilecontactform() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        companyName: "",
        industry: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };

  return (
    <div>
      <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "344px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Arrange Discovery</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>First name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Last name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Contact Number*</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                padding: "10px",
                borderRadius: "5px 0 0 5px",
                backgroundColor: "#444",
                color: "#fff",
                border: "1px solid #444",
              }}
            >
              +91
            </span>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "0 5px 5px 0",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "#fff",
              }}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Industry*</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
            }}
            required
          >
            <option value="" disabled>
              Select an industry
            </option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            background:
              "linear-gradient(to right, #f5af19, #f12711)", // Yellow to Purple gradient
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}
