// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// map form show
if (document.querySelector("#showMap")) {
    document.querySelector("#showMap").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").addClass("map_show");
        document.querySelector(".contact_heading").innerText = "Location";
    });
}
if (document.querySelector("#showForm")) {
    document.querySelector("#showForm").addEventListener("click", function (e) {
        e.preventDefault();
        $(".map_form_container").removeClass("map_show");
        document.querySelector(".contact_heading").innerText = "Contact Us";
    });
}

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(12.9339676,80.1780293),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

var nav = document.querySelector('nav');

// window.addEventListener('scroll', function () {
//   if (window.scrollY> 100) {
//     nav.classList.add('white', 'shadow');
//   } else {
//     nav.classList.remove('bg-dark', 'shadow');
//   }
// });


$(document).ready(function()
{
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , " white",  );
       
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
})


function sendMail() 
 {
    var params = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    };

    const serviceID = "service_7aryq6u";
    const templateID = "template_kqe6nzd";
    emailjs
    .send(serviceID, templateID, params)
    .then((res) =>
    {
     document.getElementById("fname").value = "";
     document.getElementById("lname").value = "";
    
     document.getElementById("email").value = "";
     document.getElementById("number").value = "";

     document.getElementById("message").value = "";
     console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err))
 }
// window.onscroll = () => {
//     const nav = document.querySelector('#navbar');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };