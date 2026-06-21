const routeData = [
  {
    city: "Akshardham (Delhi)",
    distance: 0,
    toll: 0,
  },

  {
    city: "Baghpat",
    distance: 35,
    toll: 60,
  },

  {
    city: "Baraut",
    distance: 65,
    toll: 120,
  },

  {
    city: "Shamli",
    distance: 120,
    toll: 220,
  },

  {
    city: "Saharanpur",
    distance: 180,
    toll: 350,
  },

  {
    city: "Dehradun",
    distance: 210,
    toll: 450,
  },
];

const source = document.getElementById("source");

const destination = document.getElementById("destination");


routeData.forEach((place) => {
  source.innerHTML += `

<option value="${place.city}">
${place.city}
</option>

`;

  destination.innerHTML += `

<option value="${place.city}">
${place.city}
</option>

`;
});

// Swap Source Destination

function swapRoute() {
  let temp = source.value;

  source.value = destination.value;

  destination.value = temp;
}

function findRoute() {
  let start = source.value;

  let end = destination.value;

  if (start == "" || end == "") {
    alert("Please select both cities");

    return;
  }

  let startIndex = routeData.findIndex((place) => place.city == start);

  let endIndex = routeData.findIndex((place) => place.city == end);

  let route = [];

  if (startIndex < endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      route.push(routeData[i]);
    }
  } else {
    for (let i = startIndex; i >= endIndex; i--) {
      route.push(routeData[i]);
    }
  }

  let distance = Math.abs(route[route.length - 1].distance - route[0].distance);

  let toll = Math.abs(route[route.length - 1].toll - route[0].toll);

  let time = (distance / 60).toFixed(1);

  displayResult(route, distance, time, toll);
}

function displayResult(route, distance, time, toll) {
  let html = `


<div class="result-box">


<h2>
📊 Route Summary
</h2>



<div class="summary-container">



<div class="summary-card">

<h3>
📏 Distance
</h3>

<p>
${distance} KM
</p>

</div>

<div class="summary-card">

<h3>
⏱ Time
</h3>

<p>
${time} Hours
</p>

</div>





<div class="summary-card">

<h3>
🛣 Toll
</h3>

<p>
₹${toll}
</p>

</div>



</div>




<h2>
🚗 Route Details
</h2>



`;

  route.forEach((place, index) => {
    html += `

<div class="city">

📍 ${place.city}

</div>

`;

    if (index !== route.length - 1) {
      html += `

<div class="road">

🚗

</div>

`;
    }
  });

  html += `

</div>

`;

  document.getElementById("output").innerHTML = html;
}

function toggleMode() {
  document.body.classList.toggle("dark");

  let btn = document.querySelector(".mode");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
