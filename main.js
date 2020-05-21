
var width = 300,
    height = 300;

 // Config for the Radar chart
var config = {
    w: width,
    h: height,
    maxValue: 100,
    levels: 5,
    ExtraWidthX: 200
}

//Order the games by alphabetical order
function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  data.sort(compare);


//Populate the selector
for(let i = 0; i < data.length; i++){
    let game = data[i];

    let title = game.name

    $('#games').append('<option value="' + i + '">' + title + '</option>');
}

$("#title-p").text(data[0].name);

$('#games').on('change', function() {
    console.log(this.value)
    //Clean the svg
    d3.select("svg").remove();
    $("#title-p").text(data[this.value].name);

    //Update the image
    if(data[this.value].img_url != undefined){
        $("#cover-img").attr("src",data[this.value].img_url);
    }

    //Regenerate with the new game
    RadarChart.draw("#chart", [data[this.value].values], config);
});

//Create the svg
var svg = d3.select('body')
	//.selectAll('svg')
	.append('svg')
	.attr("width", width)
	.attr("height", height);


//Load the first cover
if(data[0].img_url != undefined){
    $("#cover-img").attr("src",data[0].img_url);
}

//By default load the first game
RadarChart.draw("#chart", [data[0].values], config);


