import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setIsModalOpen(true);
    setSelectedId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  // Mock data for demonstration purposes
  const [allMessages, setAllMessages] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', phoneNum: '1234567890', country: 'USA', address: '1234 Street', message: 'This is a sample message.' },
    { id: 2, fullName: 'Jane Doe', email: 'jane@example.com', phoneNum: '0987654321', country: 'Canada', address: '5678 Avenue', message: 'This is another sample message.' },
  ]);

  // Simulate deletion action
  const deleteMessage = (id) => {
    setAllMessages(allMessages.filter(message => message.id !== id));
    closeModal();
  };

  return (
    <AdminSidebar>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Bookings
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-medium text-left pl-4">Full Name</th>
                <th className="font-medium text-left pl-12">Email</th>
                <th className="font-medium text-left pl-12">Phone Number</th>
                <th className="font-medium text-left pl-12">Country</th>
                <th className="font-medium text-left pl-12">Address</th>
                <th className="font-medium text-left pl-12">Message</th>
                <th className="font-medium text-center pl-12">Action</th>
              </tr>
            </thead>
            <tbody>
              {allMessages.map((eachData) => (
                <tr key={eachData.id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-12">{eachData.fullName}</td>
                  <td className="pl-12">{eachData.email}</td>
                  <td className="pl-20">{eachData.phoneNum}</td>
                  <td className="pl-20">{eachData.country}</td>
                  <td className="pl-20">{eachData.address}</td>
                  <td className="pl-20">{eachData.message}</td>
                  <td className="px-7 2xl:px-0 text-center">
                    <button
                      onClick={() => openModal(eachData.id)}
                      className="bg-[#e92939] py-2 px-3 text-white rounded m-1 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h2 className="mb-4">Are you sure you want to delete this message?</h2>
              <button onClick={() => deleteMessage(selectedId)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Confirm
              </button>
              <button onClick={closeModal} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminSidebar>
  );
};

export default AdminMessage;
