var userinput = prompt("Enter fehrenheit 40- 0");
if (userinput >= 40) {
  document.write(`<body><div class="card cardo m-auto mt-5" style="width: 18rem;">` +
    `<img src="40.gif" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body ">` +
    `<p class="card-text  "><h2 class="text-center">
    🌡️</h2> <br> <h3 class="text-center">Heat Waves</h3></p>
     </div>` +
    `</div>`)
} else if (userinput >= 35) {
  document.write(`<body><div class="card  cardt ardt m-auto mt-5" style="width: 18rem;">` +
    `<img src="33.gif" + class=" card-img-top imgt   img-fluid m-auto
     " alt="..."> ` +
    `<div class="card-body">` +
    `<p class="card-text  "><h2 class="text-center"> </h2> <br> <h3  class="text-center">Very Hot🥵</h3></p>
  </div>` +
    `</div>`)
} else if (userinput >= 30) {
  document.write(`<body><div class="card cardth m-auto mt-5" style="width: 18rem;">` +
    `<img src="30.gif" + class=" card-img-top imgth img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body">` +
    `<p class="card-text  "><h2 class="text-center">
    </h2> <br> <h3 class="text-center">Sunny🌞</h3></p>
  </div>` +
    `</div>`)
} else if (userinput >= 25) {
  document.write(`<body><div class="card cardf m-auto mt-5"  bg-dark style="width: 18rem;">` +
    `<img src="25.gif" + class=" card-img-top img-fluid m-auto " alt="..."> ` +
    `<div class="card-body bg-dark">` +
    `<p class="card-text  "><h2 class="text-light">Cloudy  Weather😍☁️</h2></p>
  </div>` +
    `</div>`)
} else if (userinput >= 22) {
  document.write(`<body><div class="card cardfi m-auto mt-5" style="width: 18rem;">` +
    `<img src="22.gif" + class=" card-img-top img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body text-center bg- light">` +
    `<p class="card-text  "><h2 class=" text-black" >It's Rainy🌦 </h2></p>
  </div>` +
    `</div>`)
} else if (userinput >= 20) {
  document.write(`<body><div class="card cardfi m-auto mt-5" style="width: 18rem;">` +
    `<img src="20.gif" + class="  img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body text-center bg- light">` +
    `<p class="card-text  "><h2 class=" text-black" >Beautiful Rainbow🤩
🌈

😍 </h2></p>
  </div>` +
    `</div>`)
}
else if (userinput >= 5) {
  document.write(`<body><div class="card cardfi m-auto mt-5" style="width: 18rem;">` +
    `<img src="5.gif" + class="  img-fluid m-auto  " alt="..."> ` +
    `<div class="card-body text-center bg- light">` +
    `<p class="card-text  "><h2 class=" text-black" >WOW! It's Snowfall🌨⛄️ </h2></p>
  </div>` +
    `</div>`)
} else {
  document.write(
    `<div class="card-body">` +
    `<p class="card-text  "><h2 class=" text-blacl text-center ">Nothing to find more only  fehrenheit🤣😝 </h2> </p></div>` +
    `</div>`)
}





