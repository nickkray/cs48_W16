chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        
        
        // Add new div that slides out with map, sidebar, and navigation bar.
            $("<div id='schedRunner' style='height: 100%; width: 0%; position: fixed; z-index: 1; left: 0; top: 0; background: rgb(211,211,211); overflow-x: hidden; transition: 0.5s;'>\
                <div id='navBar' style='float: top; height: 50px; margin-left: 222px; width: 100%; padding: 0px;'>\
                    <ul style=' position: fixed; list-style-type: none; overflow: hidden; background-color: #333;'>\
                        <li style='float: left;'><a class='All' style='background-color: #2504B4; display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>All</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Mon</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Tue</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Wed</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Thu</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Fri</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Sat</a></li>\
                        <li style='float: left;'><a href='#' style='display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;'>Sun</a></li>\
                    </ul>\
                </div>\
                <div id='sidebar' style='position: fixed; float: left; width: 200px; background-color: rgb(115,115,115); border: 2px solid rgb(0,0,0); padding: 2px;'>\
                    <h1 id='sidebarTitle' style='font-size: 20px; margin-bottom: 25px; padding: 5px; color: #ffff00; font: Garamond;'>\
                        <b><u>Popular Locations</b></u>\
                    </h1>\
                    <div class='dropdown' style='position: relative; display: inline-block;'>\
                        <button class='dropbtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>University Center</button>\
                        <div id ='myDropDown2' class='dropdown-content' style='display: none; position: absolute; z-index: 100; left: 177px; background-color: #f9f9f9; max-width: 100px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)'>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond;'>The Hub</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond;'>UCSB Bookstore</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond;'>Corwin Pavillion</a>\
                        </div>\
                    </div>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Bus Loop</button>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Recreation Center</button>\
                    <div class='dropdown' style='position: relative; display: inline-block;'>\
                        <button class='dropbtn'  style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Dining Commons</button>\
                        <div id='myDropdown' class='dropdown-content' style='display: none; position: absolute; z-index: 100; left: 177px; background-color: #f9f9f9; max-width: 100px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)'>\
                            <a id='carillo' href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Carillo</a>\
                            <a id='dlg' href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>De La Guerra</a>\
                            <a id='ortega' href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Ortega</a>\
                            <a id='portola' href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Portola</a>\
                        </div>\
                    </div>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Student Resource Building</button>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Student Health Center</button>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Thunderdome</button>\
                    <button class='defaultBtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Harder Stadium</button>\
                    <div class='dropdown' style='position: relative; display: inline-block;'>\
                        <button class='dropbtn' style='background-color: rgb(69,106,209); color: black; width: 100%; text-align: left; font-size: 14px; border: none; cursor: pointer; font: Garamond;'>Campus Restaurants</button>\
                        <div id='myDropdown3' class='dropdown-content' style='display: none; position: absolute; z-index: 100; left: 177px; background-color: #f9f9f9; max-width: 100px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)'>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Courtyard Cafe</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Coral Tree Cafe</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Corner Store</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Die Bretzel</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Jamba Juice</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Nicoletti's</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Panda Express</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Root 217</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Romaine's</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Santorini Island Grill</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Subway</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Woodstock's</a>\
                            <a href='#' style='color: black; padding: 12px 16px; text-decoration: none; display: block; font: Garamond'>Wahoo's</a>\
                        </div>\
                    </div>\
               </div>\
               <div id='mapDiv' style='float: right;'>\
                        <img id='mapImg1' style='position: relative; width: 1200px;' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
               </div>\
               <button id='closebtn' style='position: absolute; float: right; font-size: 40px; top: 20px; right: 45px; color: #111;'>x</button>\
             </div>").insertAfter("#MainForm");

/*
			$("<div id='map' style='position: relative; display: none; background: rgb(230,230,230); width: 600px; height: 600px; overflow: auto; '>\
		          <img id='mapImg2' style='position: absolute; width: 800px;' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
		      </div>").insertBefore("#content");

		$("<img id='MapViewIcon' src='"+chrome.extension.getURL("MapViewIcon.jpg")+"' alt='Map View' style='height:24px;width:92px;'>").insertAfter("#pageContent_weeklyButton")
        document.body.innerHTML=document.body.innerHTML.replace('<div class="title">Schedule-List</div>',"")
	               $(".BuildingLocationLink").unbind()
		           $(".BuildingLocationLink").bind("click",function(){showMap(this.innerHTML)})
		// MapView Icon goes away if you click other tab
        
		$("#MapViewIcon").bind("click",function() {
            document.getElementById('schedRunner').style.width = '100%';
        });
        
        $("#closebtn").bind("click", function() {
            document.getElementById('schedRunner').style.width = '0%';
        });

			$("<div id='closeX' style='cursor: pointer; z-index:5; display:none;left: 579px;top: 3px;position: relative;padding-top: 1px;padding-bottom: 1px;width: 14px;font-size: 10pt;font-size: 14;text-align: center;border: 1px solid black; border-radius: 2px;'>x</div><div id='map' style='position: relative; display: none; background: rgb(230,230,230); width: 600px; height: 600px; overflow: auto; '>\
		<img id='mapImg' style='margin-top: -18px; position: absolute; width: 800px;' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
		</div>").insertBefore("#content")


			$(".BuildingLocationLink").unbind()
			$(".BuildingLocationLink").bind("click",function(){showMap(this.innerHTML)})
			$("#closeX").bind("click",function(){hideMap()})
*/

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

/*
function appendMapDiv() {
    
    var slide = document.createElement("div");
    slide.className = "slideDiv";
    
    //slide.load('mapSlideOut.html');
    slide.show();
    slide.animate({right:'0px'}, {queue: false, duration: 5000});
    $(".slideDiv").innerHTML = '\
    <div id="navBarDiv"></div> \
    <div id="sideBarDiv"></div> \
    <div id="mapDiv"></div> \
    ';
    
    $("#navBarDiv").load('navigationBar.html');
    $("#sideBarDiv").load('sidebar.html');
    $("#mapDiv").app
    }
    */


function addToMap(s){
	$("#map").append(s)
}



/*
y = coords[i][1][1]
		x = coords[i][1][0]
*/


function hideMap(){
	$("#content").show()
	$("#map").hide()
	$(".pin").remove()
	$("#closeX").hide()
}

function showMap(s){
	$("#content").hide()
	$("#map").show()
	$("#closeX").show()

	building = s.split(" ")[0]

	var x=0;
	var y=0;

	for(i=0;i<coords.length;i++){
		if(coords[i][0]==building){
			y = coords[i][1][1]
			x = coords[i][1][0]
			addToMap("<div id='"+coords[i][0]+"' class='pin' style='top: "+y+"px; left:"+x+"px;position: absolute; background: white; font-size: 14; font-family: verdana; padding: 7px; border: 1px solid grey; border-radius: 3px;'>"+coords[i][0]+"</div>");
			break;
		}
	}

	$('#map').animate({
    scrollTop: y/2,
    scrollLeft: x/2
	});

	//$("#mapImg").src = "http://www.aw.id.ucsb.edu/maps/images/UCSB_largemap.jpg";

}

/*
function mapSlideOut(s) {
    
    
    var x=0;
    var y=0;
    
    for(i = 0; i < classCoords.length; i++){
        build = classCoords[i];
        for(j = 0; j < coords.length; j++){
            if(coords[j][0] == building) {
                addToMap("<div id='"+coords[i][0]+"' class='pin' style='top: "+y+"px; left:"+x+"px;position: absolute; background: white; font-size: 14; font-family: verdana; padding: 7px; border: 1px solid grey; border-radius: 3px;'>"+coords[i][0]+"</div>");
                break;     
            }
        } 
    }
    
   
}
*/
