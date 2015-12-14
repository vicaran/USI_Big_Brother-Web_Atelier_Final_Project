//require WLS
var k = require('./../../../k_globals/koala.js')

// var sensors = {};
// //script of the operator
k.createNode(function(data) {

    var parse = JSON.parse(data);
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
    k.callFunction("chartHandler", [parse])
//         k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
//         k.callFunction("monitorLights", [data._id, data.light])
//     }
// }
// });

})
var htmlString = 
// HEADER
'<!DOCTYPE html>' + '<html lang="en">' + '' + '<head>' + '' + '<meta charset="utf-8">' + '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + '<meta name="viewport" content="width=device-width, initial-scale=1">' + '<meta name="description" content="">' + '<meta name="author" content="">' + '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>' + '<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>' + '<script src="js/jquery.js"></script>' + '<script src="js/scripts/app.js"></script>' + '<script src="js/bootstrap-datepicker.js"></script>' + '' + '' + '<title>Usi Big Brother</title>' + '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">' + '' + '<!-- Bootstrap Core CSS - Uses Bootswatch Flatly Theme: http://bootswatch.com/flatly/ -->' + '<link href="css/bootstrap.min.css" rel="stylesheet">' + '<link href="css/datepicker.css" rel="stylesheet">' + '' + '<!-- Custom CSS -->' + '<link href="css/freelancer.css" rel="stylesheet">' + '' + '' + '</head>' + '' + '<body id="page-top" class="index">' + '' + '<!-- Navigation -->' + '<nav class="navbar navbar-default navbar-fixed-top">' + '<div class="container">' + '<!-- Brand and toggle get grouped for better mobile display -->' + '<div class="navbar-header page-scroll">' + '<button type="button" class="navbar-toggle" data-toggle="collapse"' + 'data-target="#bs-example-navbar-collapse-1">' + '<span class="sr-only">Toggle navigation</span>' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '<span class="icon-bar"></span>' + '</button>' + '<a class="navbar-brand" href="#page-top">Usi Big Brother</a>' + '</div>' + '' + '<!-- Collect the nav links, forms, and other content for toggling -->' + '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' + '<ul class="nav navbar-nav navbar-right">' + '<li class="hidden">' + '<a href="#page-top"></a>' + '</li>' + '<li class="page-scroll">' + '<a href="#LiveData"> <i class="fa fa-area-chart"> </i>Live Data</a>' + '</li>' + '<li class="page-scroll">' + '<a href="#Database "><i class="fa fa-database"></i>Database</a>' + '</li>' + '<li class="page-scroll">' + '<a href="#about"> <i class="fa fa-users"></i>About</a>' + '</li>' + '' + '</ul>' + '</div>' + '<!-- /.navbar-collapse -->' + '</div>' + '<!-- /.container-fluid -->' + '</nav>' + '' + '<!-- Header -->' + '<header class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12">' + '<div class="intro-text">' + '<span class="name">Welcome to </span>' + '<span class="name">Usi Big Brother</span>' + '<hr class="star-light">' + '<span class="skills">A live Open Space manager</span>' + '</div>' + '</div>' + '</div>' + '</div>' + '</header>' + '' + '<!-- LiveData Grid Section -->' + '<section id="LiveData" class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>Live Data</h2>' + '<hr class="star-primary">' + '</div>' + '</div>' + '' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-sm-6">' + '' + '<canvas class="chart" id="myChart"></canvas>' + '</div>' + '<div class="col-sm-6">' + '<canvas class="chart" id="myChart1"></canvas>' + '</div>' + '</div>' + '</div>' + '</section>' + '' + '<!-- Database Section -->' + '<section id="Database" class="borderSections">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>Database</h2>' + '<hr class="star-primary">' + '<div id="IdSelectorContainer">' + '' + '' + '</div>' + '<div class="container">' + '<div class="row">' + '<div class="col-sm-6">' + '' + '<input id="since">' + '</div>' + '<div class="col-sm-6">' + '<input id="to">' + '' + '</div>' + '<script>' + '$("#since").datepicker()' + '$("#to").datepicker()' + '' + '</script>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '' + '</section>' + '<!-- About Section -->' + '<section class="success borderSections" id="about">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12 text-center">' + '<h2>About</h2>' + '<hr class="star-light">' + '</div>' + '</div>' + '<div class="row">' + '<div class="col-lg-4 col-lg-offset-2">' + '<p>The aim of this project is to provide a set of accurate data in order to supervise the people' + 'behavior in the Open Space, thanks to a shield' + 'of light, temperature and sound sensor. <br>' + 'As the real Big Brother do in 1984 </p>' + '</div>' + '<div class="col-lg-4">' + '<p>by George Orwell, ours wants to check, in a passive way, whats going on, but ours goals is not to' + 'create a despotic instrument of mass control' + 'but only a way to check if some cohabitation standard are respect</p>' + '</div>' + '</div>' + '</div>' + '</section>' + '' + '<!-- Footer -->' + '<footer class="text-center">' + '' + '<div class="footer-below">' + '<div class="container">' + '<div class="row">' + '<div class="col-lg-12">' + 'Copyright &copy; Usi Big Brother Team' + '</div>' + '</div>' + '</div>' + '</div>' + '</footer>' + '' + '<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->' + '<div class="scroll-top page-scroll visible-xs visible-sm">' + '<a class="btn btn-primary" href="#page-top">' + '<i class="fa fa-chevron-up"></i>' + '</a>' + '</div>' + '' + '' + '<!-- jQuery -->' + '' + '' + '<!-- Bootstrap Core JavaScript -->' + '<script src="js/jquery.js"></script>' + '' + '<script src="js/bootstrap.min.js"></script>' + '' + '<!-- Plugin JavaScript -->' + '<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>' + '<script src="js/classie.js"></script>' + '<script src="js/cbpAnimatedHeader.js"></script>' + '' + '<!-- Contact Form JavaScript -->' + '<script src="js/jqBootstrapValidation.js"></script>' + '<script src="js/contact_me.js"></script>' + '' + '<!-- Custom Theme JavaScript -->' + '<script src="js/freelancer.js"></script>' + '' + '</body>' + '' + '</html>';
k.createHTML('pimmi', htmlString);

//add the graph script
k.createScript('our_graph', 'js/scripts/app.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
k.createCSS('csstest', '/css/newTest.css')
