import express from 'express';
import { getData } from '../controllers/datacontroller.js'; // Import the controller function
// import { createData } from '../controllers/datacontroller.js'; // Import the controller function

const router = express.Router();
router.get('/', getData);

// router.post('/',);


export default router;