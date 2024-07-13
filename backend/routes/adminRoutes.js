const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { authGuardAdmin } = require('../middleware/authGuard');

// Create product API
router.post('/createDestination',adminController.createDestination)

// // Get all products API
router.get("/getDestination", adminController.getAllDestination)

// // get single product api
// router.get("/get_futsals/:id", futsalController.getSingleFutsal)

// router.get("/getfutsalbyUser/:id", futsalController.getAllFutsalsbyUserId)

// // update product api
// router.put("/update_futsal/:id",authGuardAdmin,futsalController.updateFutsal)

// // delete product api
// router.delete("/delete_futsal/:id",authGuardAdmin, futsalController.deleteFutsal)


module.exports = router;