var canvas, c, width, height;
let xstep, yscale;
let xr1, xr2;
var xValues = [];
var yValues = [];


function generateData(value, i1, i2, step = 1) {
  if (xValues != 0) {
    while (xValues.length > 0) {
      xValues.pop();
    }
  }
  if (yValues != 0) {
    while (yValues.length > 0) {
      yValues.pop();
    }
  }
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(parseFloat(x).toFixed(1));
  }
  if (yValues.includes(NaN)) {
    alert("Please enter valid function")
  } else {
  chart.update();
  }
}
chart = new Chart("myCanvas", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "",
      fontSize: 16
    },
    scales: {
      yAxes: [{
        display: true,
        min: -Math.abs(Number(yscale)),
        max: Number(yscale),
        ticks: {
          beginAtZero: false,
          stepSize: Number(yscale)
         }
      }]
    }
  }
  });

function showResults(event) {
  event.preventDefault();

  
  let ffunc = document.getElementById("id_func").value;
  if (ffunc.includes("sin")) {
      ffunc = ffunc.replace(/sin/g, "Math.sin")
    } else if (ffunc.includes("cos")) {
      ffunc = ffunc.replace(/cos/g, "Math.cos")
    } else if (ffunc.includes("tan")) {
      ffunc = ffunc.replace(/tan/g, "Math.tan")
    } else if (ffunc.includes("PI")) {
      ffunc = ffunc.replace(/PI/g, "Math.PI")
  }
  xr1 = document.getElementById("id_xrange1").value;
  xr2 = document.getElementById("id_xrange2").value;
  xstep = document.getElementById("id_x").value;
  yscale = document.getElementById("id_y").value;
  
  try {
    generateData(ffunc, parseFloat(xr1), parseFloat(xr2), parseFloat(xstep));
  } catch (error) {
    alert("Please enter valid function");
  }

  // let result = `Function f(x) : ${ffunc}\n` +
  // `Start of x range: : ${xr1}\n` +
  // `End of x range : ${xr2}\n` +
  // `x step : ${xstep}\n` +
  // `y scale factor : ${yscale}\n`;
  let result = [];
  for (let i = 0; i < xValues.length; i++) {
  result.push(`f(${Number(xValues[i])}) : ${(yValues[i])}\n`)
};



  document.getElementById("id_result").innerText = result;
  
}