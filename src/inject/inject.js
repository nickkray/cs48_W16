chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

			$("<div id='map' style='position: relative; display: none; background: rgb(230,230,230); width: 600px; height: 600px; overflow: auto; '>\
		<img id='mapImg' style='position: absolute; width: 800px;' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
		</div>").insertBefore("#content")

		$('<input type="image" src="MapViewIcon.jpg" alt="Map View" style="height:24px;width:92px;">').insertAfter("#pageContent_weeklyButton")


			$(".BuildingLocationLink").unbind()
			$(".BuildingLocationLink").bind("click",function(){showMap(this.innerHTML)})

	}
	}, 10);
});





coords = [
["BUCHN",[521,390]],
["HSSB",[288,477]],
["PHELP",[531,354]],
["ARTS",[332,531]],
["EMBARHALL",[98,558]],
["TD-W",[254,536]],
["494",[471,597]],
["IV,THEA",[128,580]],
["NH",[457,403]],
["HFH",[647,472]],
["GIRV",[439,485]],
["BRDA",[577,457]],
["387",[478,560]],
["SH",[401,475]],
["PSYCH",[499,558]],
["WEBB",[556,489]],
["ENGR",[649,421]],
["ESB",[647,382]],
["CHEM",[592,390]],
["PSB-S",[597,432]],
["PSB-N",[559,392]],
["LSB",[559,566]],
["CAMPBHALL",[494,352]],
["ELLSN",[493,388]],
["SSMS",[320,415]],
["ED",[307,414]],
["KERR,HALL",[430,434]],
["ELNGS",[704,390]],
["BSIF",[579,547]],
["HARDR",[111,149]],
["MLAB",[576,754]],
["PSY-E",[517,554]],
["MUSICLLCH",[420,548]],
["BREN",[619,507]],
["RECEN",[340,263]],
["RGYM",[336,352]],
["BSBL,FIELD",[217,213]],
["RECENPVGYM",[340,224]],
["EVENTCENTR",[245,472]],
["STORKFIELD",[108,238]],
["RECENCOURT",[341,270]],
["RECENFIELD",[328,303]],
["SFTBLFIELD",[241,253]],
["SWIM,POOL",[347,441]],
["RECENPOOL",[311,266]],
["TRACKFIELD",[238,331]],
["RGYM,CTS",[275,327]],
["RECENCTS",[307,206]],
["RECENWT,RM",[333,259]],
["PLLOK",[352,413]],
["PLLOKSTAGE",[351,415]],
["TD-E",[292,522]],
["477",[365,476]],
["451",[560,324]],
["SCRIMFIELD",[285,275]],
["MUSIC",[419,545]],
["MUSICHALL",[402,533]],
["MUSICGHALL",[403,534]],
["SB,HRBR",[0,0]],
["ZODO,BOWL",[0,0]],
["GOLF,COURS",[0,0]],
["ONLINE",[0,0]],
["OFF,CAMP",[0,0]],
["T.B.A.",[0,0]],
];



function w(s){
	$("#map").append(s)
}



/*
y = coords[i][1][1]
		x = coords[i][1][0]
*/


function hideMap(){
	$("#content").hide()
	$("#map").show()
	$(".pin").remove()
}

function showMap(s){
	$("#content").hide()
	$("#map").show()
	building = s.split(" ")[0]

	x=0;
	y=0;

	for(i=0;i<coords.length;i++){
		if(coords[i][0]==building){
			y = coords[i][1][1]
			x = coords[i][1][0]
			w("<div id='"+coords[i][0]+"' class='pin' style='top: "+y+"px; left:"+x+"px;position: absolute; background: white; font-size: 14; font-family: verdana; padding: 7px; border: 1px solid grey; border-radius: 3px;'>"+coords[i][0]+"</div>");
			break;
		}
	}

	$('#map').animate({
    scrollTop: y/2,
    scrollLeft: x/2
	});

	//$("#mapImg").src = "http://www.aw.id.ucsb.edu/maps/images/UCSB_largemap.jpg";

}
