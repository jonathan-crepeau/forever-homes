import express from 'express';
const router = express.Router();
import * as viewsControllers from '../controllers/Views';

router.get('/', viewsControllers.root);
router.get('/test', viewsControllers.test);
router.get('/login', viewsControllers.login);
router.get('/profile', viewsControllers.profile);
router.get('/search', viewsControllers.search);
router.get('/signup', viewsControllers.signup);

export {router}