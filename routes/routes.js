const express = require('express');
const router = express.Router();

// Route to render the home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Top Business Logo Maker & Branding Agency In New York' });
});
router.get('/about-us', (req, res) => {
    res.render('about-us', { title: 'About Us' });
});
router.get('/price-plans', (req, res) => {
    res.render('price-plans', { title: 'Affordable Branding & Logo Design Packages NY, US' });
});
router.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Our Portfolio' });
});
router.get('/custom-logo-branding-services', (req, res) => {
    res.render('custom-logo-branding-services', { title: 'Custom Business Logo Design & Branding Services NY' });
});
router.get('/book-publications', (req, res) => {
    res.render('book-publications', { title: 'Buy Professional Web Design Services In New York' });
});
router.get('/mobile-application', (req, res) => {
    res.render('mobile-application', { title: 'Mobile Application' });
});
router.get('/professional-web-design-services', (req, res) => {
    res.render('professional-web-design-services', { title: 'Buy Professional Web Design Services In New York' });
});
router.get('/explainer-video-animations', (req, res) => {
    res.render('explainer-video-animations', { title: 'Animated Explainer Video Animation Services In US' });
});
router.get('/amazon-marketing', (req, res) => {
    res.render('amazon-marketing', { title: 'Amazon Marketing' });
});
router.get('/step-2', (req, res) => {
    res.render('brief', { title: 'Logura' });
});
router.get('/step-3', (req, res) => {
    res.render('brief1', { title: 'Logura' });
});
router.get('/step-4', (req, res) => {
    res.render('brief2', { title: 'Logura' });
});
router.get('/step-5', (req, res) => {
    res.render('brief3', { title: 'Logura' });
});
router.get('/step-6', (req, res) => {
    res.render('brief4', { title: 'Logura' });
});
router.get('/step-7', (req, res) => {
    res.render('brief5', { title: 'Logura' });
});

module.exports = router;