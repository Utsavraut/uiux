import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    depDate: '',
    returnDate: '',
    address: '',
    contactNo: ''
  });

  const [title, setTitle] = useState('Loading...'); // Default title

  useEffect(() => {
    // Simulate fetching the title from a backend API
    const fetchTitle = async () => {
      // Simulated API call
      const response = await new Promise(resolve => setTimeout(() => resolve({ title: "ANNAPURNA BASE CAMP" }), 1000));
      setTitle(response.title);
    };

    fetchTitle();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    alert('Booking Details Submitted!');
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <div className="text-right">
          <button onClick={() => console.log('Modal closed')}>&times;</button>
        </div>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="mb-4">FILL THE DETAILS BELOW TO BOOK</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between gap-4">
            <input
              type="date"
              name="depDate"
              value={formData.depDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Contact No:"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
            ADVANCE
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
