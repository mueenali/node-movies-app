const express = require('express');
const router = express.Router();
const csurf = require('csurf');
const csrfProtection = csurf();
const authController = require('../controllers/authController');
const successRedirect = require('../middlewares/successRedirect');
/* GET users listing. */
const notLoggedIn = require('../middlewares/notLoggedIn');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/logout',isLoggedIn,authController.logout);
router.use(csrfProtection);
router.get('/verify/:token',authController.verifyEmail);
router.get('/forgetPassword',authController.forgetPasswordIndex);
router.post('/forgetPassword',authController.forgetPassword);
router.get('/resetPassword/:token',authController.resetPasswordIndex);
router.put('/resetPassword/:token',authController.resetPassword);
router.use(notLoggedIn);
router.get('/login',authController.loginIndex);
router.post('/login',authController.login,successRedirect);

router.get('/signup',authController.signUpIndex);
router.post('/signup',authController.signUp,successRedirect);


module.exports = router;
