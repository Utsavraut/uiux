const Bookings = require("../model/bookingModel");
const cloudinary = require("cloudinary");

const createBooking = async (req, res) => {
  const { userId, destinationId, datefrom, dateto, address, contact } = req.body;

  if (!userId || !destinationId || !datefrom || !dateto || !address || !contact) {
    return res.json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const existingBookings = await Bookings.find({
      userId: userId,
      destinationId:destinationId,
      address:address,
      contact:contact,
      datefrom: datefrom,
      dateto: dateto,
      
    });

    if (existingBookings.length > 0) {
      return res.json({
        success: false,
        message:
          "You have already booked a destination for the specified time and date",
      });
    }
    const newBooking = new Bookings({
      userId: userId,
      destinationId: destinationId,
      datefrom: datefrom,
      dateto: dateto,
      address:address,
      contact:contact,

    });

    await newBooking.save();

    // Send the response
    res.status(201).json({
      success: true,
      message: "Request Submitted Soon You will Be Notified",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getBookingsByUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.json({
      success: false,
      message: "Booking ID is required",
    });
  }

  try {
    const userBooking = await Bookings.find({
      userId : userId
  }).populate('destinationId','destinationName datefrom dateto')
  res.json({
      success : true,
      message : "Bookings Fetched successfully",
      bookings : userBooking
  })
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};

const getAllBooking = async (req, res) => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  console.log(dateTime);
  try {
    const listOfBookings = await Bookings.find({})
      .populate("userId")
      .populate("destinationId", "destinationName datefrom dateto price");
    res.json({
      success: true,
      bookings: listOfBookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// const getBookingByUserid = async (req, res) => {
//   const userId = req.params.userId;
//   console.log(req.params);

//   try {
//     const bookingData = await Bookings.find({ user: userId })
//       .populate("user")
//       .populate("futsal");
      

//     if (!bookingData || bookingData.length === 0) {
//       return res.json({
//         success: false,
//         message: "No Bookings made yet",
//       });
//     }

//     return res.status(201).json({
//       success: true,
//       bookings: bookingData,
//       message: " Bookings Made",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// const getBookingByFutsalid = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const adminFutsals = await Futsals.find({ user: userId });
//     const adminFutsalIds = adminFutsals.map((futsal) => futsal._id);
//     console.log(adminFutsalIds);

//     const bookings = await Bookings.find({ futsal: { $in: adminFutsalIds } })
//       .populate("user")
//       .populate("futsal");

//     return res.json({ success: true, bookings });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// const updateBooking = async (req, res) => {
//   const { date,  from } = req.body;
//   const bookingId = req.params.id;
//   console.log(req.body);
//   if (!date || !from) {
//     return res.json({
//       success: false,
//       message: "All fields are required",
//     });
//   }

//   try {
//     let fromArray;
//     if (typeof from === "string") {
//       fromArray = JSON.parse(from);
//     } else {
//       fromArray = from;
//     }
    
//     const existingBookings = await Bookings.find({
//       _id: { $ne: bookingId },
//       date: date,
//       from: { $in: fromArray },
//     });

//     if (existingBookings.length > 0) {
//       return res.json({
//         success: false,
//         message: "Futsal already booked for the specified time and date",
//       });
//     }

//     // Update the booking
//     const updatedBooking = {
//       date: date,
//       from: fromArray,
//     };

//     await Bookings.findByIdAndUpdate(bookingId, updatedBooking);
//     res.status(201).json({
//       success: true,
//       message: "Booking Updated Successfully",
//       booking: updatedBooking,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

// const deleteBooking = async (req, res) => {
//   try {
//     const deletedbooking = await Bookings.findByIdAndDelete(req.params.id);
//     if (!deletedbooking) {
//       res.json({
//         success: false,
//         message: "Booking Not Found",
//       });
//     }
//     res.status(201).json({
//       success: true,
//       message: "Booking Deleted Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

// const approveBooking = async (req, res) => {
//   const bookingId = req.params.id;

//   if (!bookingId) {
//     return res.json({
//       success: false,
//       message: "Booking ID is required",
//     });
//   }

//   try {
//     const updatedBooking = await Bookings.findByIdAndUpdate(
//       bookingId,
//       { approvalStatus: "approved" },
//       { new: true }
//     );

//     if (!updatedBooking) {
//       return res.status(404).json({
//         success: false,
//         message: "Booking not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Booking approved successfully",
//       booking: updatedBooking,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// const rejectBooking = async (req, res) => {
//   const bookingId = req.params.id;

//   if (!bookingId) {
//     return res.json({
//       success: false,
//       message: "Booking ID is required",
//     });
//   }

//   try {
//     const updatedBooking = await Bookings.findByIdAndUpdate(
//       bookingId,
//       { approvalStatus: "rejected" },
//       { new: true }
//     );

//     if (!updatedBooking) {
//       return res.status(404).json({
//         success: false,
//         message: "Booking not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Booking rejected successfully",
//       booking: updatedBooking,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };
// const getBookedTimeSlots = async (req, res) => {
//   const { id, date } = req.params;

//   try {
//     const bookedTimeSlots = await Bookings.find({
//       futsal: id,
//       date: date,
//     }).distinct("from");

//     res.json({
//       success: true,
//       bookedTimeSlots: bookedTimeSlots,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

module.exports = {
  createBooking,
  getAllBooking,
  // getBookingByUserid,
  // updateBooking,
  getBookingsByUser,
  // deleteBooking,
  // rejectBooking,
  // approveBooking,
  // getBookingByFutsalid,
  // getBookedTimeSlots,
};
