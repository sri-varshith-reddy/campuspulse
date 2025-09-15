    const express=require("express"); 
    const wrapAsync = require("../utils/wrapAsync.js")
    const Listing = require("../models/listing.js");
    const NewSchema=require("../schema.js"); 
    const {loggedin,isOwner,validatelisting}=require("../middleware.js");
    const listingController=require("../controllers/listing.js")
    const multer=require("multer"); 
    const {storage}=require("../cloudConfig.js"); 
    const upload=multer({storage}); 
    const router=express.Router(); 

    

    router 
    .route("/")
    .get(wrapAsync(listingController.index))//index
    .post( loggedin, upload.single('new[image]'), validatelisting, wrapAsync(listingController.createListing)); 

    router.get("/contact", listingController.renderContactPage);
    router.post("/contact", listingController.submitContactForm);
    router.get("/faq", listingController.renderFaqPage); 
    router.get("/privacy", listingController.renderPrivacyPage); 
// Use listingController instead:
  router.get("/about", listingController.renderAboutPage);


    router.get("/new", loggedin, wrapAsync(listingController.renderForm))//new

    router 
    .route("/:id")
    .get( wrapAsync(listingController.showListing)) //show
    .put( loggedin,upload.single('new[image]'),validatelisting,isOwner,wrapAsync(listingController.updateListing))//update 
    .delete(loggedin, isOwner,wrapAsync(listingController.destroyListing)); //delete
// POST /listing/:id/book →   RSVP / book event
// POST /listing/:id/book  →  RSVP / book event
router.post(
  "/:id/book",
  loggedin,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    listing.attendees = listing.attendees || [];
    const uid = req.user._id.toString();

    if (!listing.attendees.map(a => a.toString()).includes(uid)) {
      listing.attendees.push(req.user._id);
      await listing.save();
      req.flash("success", "You’ve booked this event!");
    } else {
      req.flash("info", "You already booked this event.");
    }

    res.redirect(`/listing/${id}`);
  })
);


    router.get("/:id/edit",loggedin,isOwner, wrapAsync(listingController.renderEditForm))

    module.exports=router; 