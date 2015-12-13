//require WLS
var k = require('./../../../k_globals/koala.js')

// var sensors = {};
// //script of the operator
// k.createNode(function(data){ 

//     var data = JSON.parse(data);

//     sensors[data._id] = true;

//     var table = {};

//     for(e in sensors){
//         if(sensors[data._id]){
//             table[data._id] = "updateGraph" + data._id
//         }
//     }
//     // console.log("sensors", sensors);
//     // console.log("table", table);
//     // console.log("data", data);


//     if(data.header === "browser"){
//         // var data = JSON.parse(data);
//         // console.log("browser request", data)
//         k.send(JSON.stringify(data));
        


//     }else if(data.header === "database"){
//         console.log("database data", data)
//         k.callFunction("editArchives", [data.content])

//     }else{


//     var ht = {
//         1: ["updateGraphLine","updateGraphBar"],
//         2: ["updateGraphLine1","updateGraphBar1"]
//     }

//     if(ht[data._id]){
//         console.log('This is entire data before: ', data);
//         k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
//         k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
//         k.callFunction("monitorLights", [data._id, data.light])
//     }
// }
// });


var htmlString = 
// HEADER
// '<!DOCTYPE html>' + '<html lang="en">' + '' + '<head>' + '' + '<meta charset="utf-8">' + '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + '<meta name="viewport" content="width=device-width, initial-scale=1">' + '<meta name="description" content="">' + '<meta name="author" content="">' + '' + '<title>Freelancer - Start Bootstrap Theme</title>' + '' + '<!-- Bootstrap Core CSS - Uses Bootswatch Flatly Theme: http://bootswatch.com/flatly/ -->' + '<link href="css/bootstrap.min.css" rel="stylesheet">' + '' + '<!-- Custom CSS -->' + '<link href="css/freelancer.css" rel="stylesheet">' + '' + '' + '' + '</head>' + '' + '<body id="page-top" class="index">' + '' + '<!-- Navigation -->' + '<nav class="navbar navbar-default navbar-fixed-top">' + '<div class="container">' + '<!-- Brand and toggle get grouped for better mobile display -->' + '<div class="navbar-header page-scroll">' + '<button type="button" class="navbar-toggle" data-toggle="collapse"' + 'data-target="#bs-example-navbar-collapse-1">' + '<span class="sr-only">Toggle navigation</span>' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '</button>' + '<a class="navbar-brand" href="#page-top">Usi Big Brother</a>' + '</div>' + '' + '<!-- Collect the nav links, forms, and other content for toggling -->' + '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' + '<ul class="nav navbar-nav navbar-right">' + '<li class="hidden">' + '<a href="#page-top"></a>' + '</li>' + '<li class="page-scroll">' + '<a href="#LiveData">Live Data</a>' + '</li>' + '<li class="page-scroll">' + '<a href="#Database">Database</a>' + '</li>' + '<li class="page-scroll">' + '<a href="#about">About</a>' + '</li>' + '' + '</ul>' + '</div>' + '<!-- /.navbar-collapse -->' + '</div>' + '<!-- /.container-fluid -->' + '</nav>' + '' + '<!-- Header -->' + '<header class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12">' + '<div class="intro-text">' + '<span class="name">Welcome to </span>' + '<span class="name">Usi Big Brother</span>' + '<hr class="star-light">' + '<span class="skills">A live Open Space manager</span>' + '</div>' + '</div>' + '</div>' + '</div>' + '</header>' + '' + '<!-- LiveData Grid Section -->' + '<section id="LiveData" class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>Live Data</h2>' + '<hr class="star-primary">' + '</div>' + '</div>' + '' + '</div>' + '</section>' + '' + '<!-- Database Section -->' + '<section id="Database" class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>Contact Me</h2>' + '<hr class="star-primary">' + '</div>' + '' + '</section>' + '<!-- About Section -->' + '<section class="success borderSections" id="about">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>About</h2>' + '<hr class="star-light">' + '</div>' + '</div>' + '<div class="row">' + '<div class="col-lg-4 col-lg-offset-2">' + '<p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete' + 'source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy' + 'customization.</p>' + '</div>' + '<div class="col-lg-4">' + '<p>Whether youre a student looking to showcase your work, a professional looking to attract clients, or' + 'a graphic artist looking to share your projects, this template is the perfect starting point!</p>' + '</div>' + '</div>' + '</div>' + '</section>' + '' + '<!-- Footer -->' + '<footer class="text-center">' + '<div class="footer-above">' + '<div class="container">' + '<div class="row">' + '<div class="footer-col col-md-4">' + '<h3>Location</h3>' + '' + '<p>3481 Melrose Place<br>Beverly Hills, CA 90210</p>' + '</div>' + '<div class="footer-col col-md-4">' + '<h3>Around the Web</h3>' + '<ul class="list-inline">' + '<li>' + '<a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>' + '</li>' + '<li>' + '<a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>' + '</li>' + '<li>' + '<a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>' + '</li>' + '<li>' + '<a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>' + '</li>' + '<li>' + '<a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>' + '</li>' + '</ul>' + '</div>' + '<div class="footer-col col-md-4">' + '<h3>About Freelancer</h3>' + '' + '</div>' + '</div>' + '</div>' + '<div class="footer-below">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12">' + 'Copyright &copy; Usi Big Brother Team' + '</div>' + '</div>' + '</div>' + '</div>' + '</footer>' + '' + '<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->' + '<div class="scroll-top page-scroll visible-xs visible-sm">' + '<a class="btn btn-primary" href="#page-top">' + '<i class="fa fa-chevron-up"></i>' + '</a>' + '</div>' + '' + '<!-- Portfolio Modals -->' + '<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/cabin.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/cake.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/circus.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/game.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/safe.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-content">' + '<div class="close-modal" data-dismiss="modal">' + '<div class="lr">' + '<div class="rl">' + '</div>' + '</div>' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-8 col-lg-offset-2">' + '<div class="modal-body">' + '<h2>Project Title</h2>' + '<hr class="star-primary">' + '<img src="js/scripts/img/portfolio/submarine.png" class="img-responsive img-centered" alt="">' + '' + '<p>Use this area of the page to describe your project. The icon above is part of a free icon set' + 'by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can' + 'download their free set with 16 icons, or you can purchase the entire set with 146 icons for' + 'only $12!</p>' + '<ul class="list-inline item-details">' + '<li>Client:' + '<strong><a href="http://startbootstrap.com">Start Bootstrap</a>' + '</strong>' + '</li>' + '<li>Date:' + '<strong><a href="http://startbootstrap.com">April 2014</a>' + '</strong>' + '</li>' + '<li>Service:' + '<strong><a href="http://startbootstrap.com">Web Development</a>' + '</strong>' + '</li>' + '</ul>' + '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>' + 'Close' + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '' + '<!-- jQuery -->' + '<script src="js/jquery.js"></script>' + '' + '<!-- Bootstrap Core JavaScript -->' + '<script src="js/bootstrap.min.js"></script>' + '' + '<!-- Plugin JavaScript -->' + '<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>' + '<script src="js/classie.js"></script>' + '<script src="js/cbpAnimatedHeader.js"></script>' + '' + '<!-- Contact Form JavaScript -->' + '<script src="js/jqBootstrapValidation.js"></script>' + '<script src="js/contact_me.js"></script>' + '' + '<!-- Custom Theme JavaScript -->' + '<script src="js/freelancer.js"></script>' + '' + '</body>' + '' + '</html>';
'<p>'+
'ciaone'+
'</p>';

k.createHTML('pimmi', htmlString);

//add the graph script
// k.createScript('our_graph', 'js/scripts/newMile_g.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
// k.createCSS('csstest', '/css/test.css')
