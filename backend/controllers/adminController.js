const Destinations = require('../model/destinationModel');
const cloudinary = require('cloudinary');


const createDestination = async (req, res) => {
    // step 1 : Check incomming data
    console.log(req.body);
    console.log(req.files);

    // step:2 destructuring
    const { destinationName, price, district, description, map } = req.body;

    const { destinationImage } = req.files;

    // step 3 : validate the data
    if (!destinationImage || !destinationName || !price || !district || !description || !map) {
        return res.json({
            success: false,
            message: "Please fill all the fields."
        })
    }

    // step 4 : try catch block
    try {
        // step 5 : upload image to cloudinary
        const uploadedImage = await cloudinary.v2.uploader.upload(
            destinationImage.path,
            {
                folder: "destinations",
                crop: "scale"
            }
        )

        // save the products
        const newDestination = new Destinations({
            destinationName: destinationName,
            price: price,
            district: district,
            description: description,
            destinationImageUrl: uploadedImage.secure_url,
            map: map
        })
        await newDestination.save();
        res.status(200).json({
            success: true,
            message: "Destination created successfully",
            data: newDestination
        })


    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")
    }

}


// // const getAllFutsalsbyUserId = async (req,res) => {
// //     const id = req.params.id;
// //     if(!id){
// //         return res.json({
// //             success: false,
// //             message: "Futsal ID is required"
// //         })
// //     }

// //     try {
// //         const listOfFutsals = await Futsals.find({user:id});
// //         return res.json({
// //             success : true,
// //             message : "Futsal fetched successfully",
// //             futsals : listOfFutsals
// //         })

// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json("Server Error")
// //     }   
// // }


// // // function for getting all products
const getAllDestination = async (req, res) => {
    try {
        const page = parseInt(req.query._page, 10);
        const limit = parseInt(req.query._limit, 10);
        if (page !== undefined && limit !== undefined) {
            const skip = (page - 1) * limit;
            const listOfDestinations = await Destinations.find().skip(skip).limit(limit);
            const recentDestination = await Destinations.find().limit(3)

            return res.status(200).json({
                success: true,
                futsals: listOfDestinations,
                recent: recentDestination,
                message: "Fetched destinations successfully",
            })
        }
        const listOfDestinations = await Destinations.find();
        const recentDestination = await Destinations.find().sort({ _id: -1 }).limit(3)
        return res.status(200).json({
            success: true,
            message: "Destinations fetched successfully",
            futsals: listOfDestinations,
            recent: recentDestination
        })

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")
    }
}

const getDestinationById = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const destinationData = await Destinations.findById(id)
        res.status(200).json({
            success: true,
            message: 'Single Destination fetched successfully',
            destination: destinationData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Check log there is a problem',
        })
    }
}

const youMayLike = async (req, res) => {
    const id = req.params.id;
    try {
        const destinationData = await Destinations.find({ _id: { $ne: id } }).sort({ _id: -1 }).limit(3);
        res.status(200).json({
            success: true,
            message: 'You may like data fetched!',
            likeData: destinationData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Check log for error.'
        })
    }
}

// // //  get product by id

// // const getSingleFutsal = async(req,res)=>{
// //     const id = req.params.id;
// //     if(!id){
// //         return res.json({
// //             success: false,
// //             message: "Futsal ID is required"
// //         })
// //     }

// //     try{
// //         const singleFutsal = await Futsals.findById(id);
// //        return res.json({
// //             success: true,
// //             message: "Futsal fetched Successfully",
// //             futsal: singleFutsal
// //         })

// //     }
// //     catch(error){
// //         console.log(error);
// //         res.status(500).json("Server Error")

// //     }

// // }

// // // update product
// // const updateFutsal = async(req,res)=>{
// //     // console.log(req.body);
// //     // console.log(req.files);

// //     const{
// //         futsalName,
// //         futsalPrice,
// //         futsalCategory,
// //         futsalDescription,
// //         futsalLocation,
// //         futsalContact,
// //         latitude,
// //         longitude,
// //     } = req.body;

// //     const {futsalImage} = req.files;

// //     // destructure id from URL
// //      const id = req.params.id

// //     if(!futsalName || !futsalPrice ||!futsalCategory||!futsalDescription || !futsalLocation ||!futsalContact){
// //         res.json({
// //             success: false,
// //             message: "All fields are required"
// //         })
// //     }
// //     try{
// //         if(futsalImage){
// //             const uploadedImage = await cloudinary.v2.uploader.upload(
// //                 futsalImage.path,
// //                 {
// //                     folder: "futsals",
// //                     crop: "scale"
// //                 }
// //             )

// //             // update the product
// //             const updatedFutsal = {
// //                 futsalName: futsalName,
// //                 futsalPrice : futsalPrice,
// //                 futsalContact:futsalContact,
// //                 futsalDescription: futsalDescription,
// //                 futsalCategory: futsalCategory,
// //                 futsalLocation : futsalLocation,
// //                 futsalImageUrl: uploadedImage.secure_url,
// //                 latitude: latitude,
// //                 longitude: longitude,
// //             }
// //             await Futsals.findByIdAndUpdate(id, updatedFutsal);
// //             res.json({
// //                 success: true,
// //                 message: "Futsal Updated Successfully",
// //                 futsal: updatedFutsal
// //             })
// //         }
// //         else{
// //             // update the futsal
// //             const updatedFutsal = {
// //               futsalName: futsalName,
// //               futsalPrice : futsalPrice,
// //               futsalContact:futsalContact,
// //               futsalDescription: futsalDescription,
// //               futsalCategory: futsalCategory,
// //               futsalLocation : futsalLocation,
// //               latitude: latitude,
// //               longitude: longitude,
// //             }
// //             await Futsals.findByIdAndUpdate(id, updatedFutsal);
// //             res.json({
// //                 success: true,
// //                 message: "Futsal Updated Successfully without Image",
// //                 futsal: updatedFutsal
// //             })
// //         }

// //     }
// //     catch(error){
// //         console.log(error);
// //         res.status(500).json({
// //             success: false,
// //             message: "Server Error"
// //         })
// //     }
// // }
// // // delete product  
// // const deleteFutsal = async (req,res)=>{
// //     try{
// //         const deletedfutsal = await Futsals.findByIdAndDelete(req.params.id);
// //         if(!deletedfutsal){
// //             res.json({
// //                 success: false,
// //                 message: "Futsal Not Found"
// //             })
// //         }
// //         res.json({
// //             success: true,
// //             message:"Futsal Deleted Successfully"
// //         })

// //     }
// //     catch(error){
// //         console.log(error);
// //         res.status(500).json({
// //             success: false,
// //             message: "Server Error"
// //         })

// //     }
// }
module.exports = {
    createDestination, getAllDestination, getDestinationById, youMayLike

}