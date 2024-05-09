import express from 'express';
const router =express.Router();
import { addCategories } from '../Controllers/admin.js';

router.post('/addCategories',addCategories) //MANUALY CREATING CATEGORIES BY CALLING THIS URL BY POSTMAN TO ADD CATEGORIES

export default router