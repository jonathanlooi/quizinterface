$(document).ready(function(){

  $('.select-method input[type="radio"]').click(function(){
    // only for radio buttons within the .select-method class
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();
    $(targetBox).show();
  });

  // Formula source: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


  $(".calculate-button button").click(function() {
    $(".results").show();

    var miles = $(".plane-calculate #miles").val();
    // this returns the value input in the #miles form (only takes numbers)

    var isOneWay = $(".plane-calculate input[name='ways']:checked").val();
    // returns either "roundtrip" or "oneway"
    if (isOneWay === "roundtrip") {
      miles = miles * 2;
    }
    var emissions = miles * 0.1486095017;

    var planeClass = $(".plane-calculate input[name='planeclass']:checked").val();
    // returns either "economy" or "first" or "business"
    if (planeClass === "economy") {
      // do nothing
    } else if (planeClass === "business") {
      emissions = emissions * 1.4;
    } else if (planeClass === "first") {
      emissions = emissions * 1.5;
    }

    $('#outputemissions').html(emissions.toFixed(2)); // toFixed truncates number
    $('#outputmiles').html(miles);

  });

});
