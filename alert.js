/*
  function Alert(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    console.log(name + ", " + email + ", " + address + ", " + city + ", " + state + ", " + zip);
    alert("Thank you. The form information has been received");

  } */
$('.submit-button').click(function(){  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    console.log(name + ", " + email + ", " + address + ", " + city + ", " + state + ", " + zip);

    alert("Thank you.  The form information has been received.");

  })
