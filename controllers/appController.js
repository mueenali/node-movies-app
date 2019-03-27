const Movie = require('../models/movie');
const date = new Date();
const index = async (req,res) =>{
    let movies = await Movie.find().limit(12).populate('category')
    let newItems = await Movie.find().sort({_id : -1}).limit(4).populate('category');
    res.render('appFront/index',{title:'FilxGo',movies,newItems});
};
module.exports = {index};