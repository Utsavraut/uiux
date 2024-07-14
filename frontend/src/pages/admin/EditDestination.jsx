import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleDestinationApi, updateDestinationApi } from "../../apis/Api";

const EditDestination = () => {
  // Receive id from URL
  const { id } = useParams();
  const navigate = useNavigate();

  const [destinationName, setDestinationName] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState("");
  const [destinationImageUrl, setDestinationImageUrl] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State to hold the image preview URL
  const [oldImagePreview, setOldImagePreview] = useState(null); // State to hold the image preview URL

//   useEffect(() => {
//     getSingleDestinationApi(id).then((res) => {
//       setDestinationName(res.data.destination.destinationName);
//       setDistrict(res.data.destination.district);
//       setPrice(res.data.destination.price);
//       setOldImagePreview(res.data.destination.imageUrl);
//     });
//   }, [id]);

//   const editDestination = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("destinationName", destinationName);
//     formData.append("district", district);
//     formData.append("price", price);
//     formData.append("destinationImage", destinationImageUrl);

//     updateDestinationApi(id, formData)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           navigate("/admin-country");
//         }
//       })
//       .catch((e) => {
//         toast.error(e.message);
//         console.log(e);
//       });
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setDestinationImageUrl(selectedImage);
//     if (selectedImage) {
//       setImagePreview(URL.createObjectURL(selectedImage));
//     }
//   };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <Link
            to={"/admin-country"}
            className="text-black bg-gray-200 hover:bg-gray-300 rounded-lg text-sm p-1.5"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Link>
        </div>

        <form className="space-y-6">
          <h3 className="leading-6 text-gray-900 text-center font-semibold text-2xl">
            Edit Destination
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="destinationName"
                className="block text-sm font-medium text-gray-900"
              >
                Destination Name
              </label>
              <input
                value={destinationName}
                onChange={(e) => setDestinationName(e.target.value)}
                type="text"
                className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-900"
              >
                District
              </label>
              <input
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                type="text"
                className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                required
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-900"
              >
                Price (NRS)
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="destinationImage"
                className="block text-sm font-medium text-gray-900"
              >
                Destination Image
              </label>
              <input
                type="file"
             
                accept="image/*"
                className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                required
              />
            </div>
            <div className="flex">
              {oldImagePreview && (
                <img
                  src={oldImagePreview}
                  alt="Destination Preview"
                  className="mt-2 w-32 h-32 p-4 object-cover"
                />
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Destination Preview"
                  className="mt-2 w-32 h-32 p-4 object-cover"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
          
            className="w-full bg-[#54A15D] hover:bg-[#54A15D] focus:ring-4 focus:outline-none focus:ring-[#54A15D] rounded-lg text-sm px-5 py-2.5 text-center text-black font-semibold"
          >
            Edit Destination
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDestination;
