chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        
        // Add new div that slides out with map, sidebar, and navigation bar.
            $("<div id='schedRunner'>\
                <div id='navBar'>\
                    <ul>\
                        <li><a class='all' id='all' href='#'>All</a></li>\
                        <li><a href='#' id='M'>Monday</a></li>\
                        <li><a href='#' id='T'>Tuesday</a></li>\
                        <li><a href='#' id='W'>Wednesday</a></li>\
                        <li><a href='#' id='R'>Thursday</a></li>\
                        <li><a href='#' id='F'>Friday</a></li>\
                        <button id='closebtn'>x</button>\
                    </ul>\
                </div>\
                                                <h1 class='title'>\
                                                <b>\
                                                    Popular Locations\
                                                </b>\
                                            </h1>\
                                                \
                                            <button class='defaultBtn' onclick=''> Bus Loop </button>\
                                            <br>\
                                            <div class='dropdown'>\
                                              <button class='dropbtn' id='ucen'>\
                                                University Center \
                                              </button>\
                                              \
                                              <div id='ucenDropdown' class='dropdown-content'>\
                                                <a href='#' > The Hub </a>\
                                                <a href='#' > UCSB Bookstore </a>\
                                                <a href='#' > Corwin Pavillion </a>\
                                              </div>\
                                            </div>\
                                            <button class='defaultBtn' onclick=''> Recreation Center </button>\
                                            <div class='dropdown'>\
                                              <button class='dropbtn' id='dining'>\
                                                Dining Commons\
                                              </button>\
                                              \
                                              <div id='diningDropdown' class='dropdown-content'>\
                                                <a id='carillo' onclick='d('carrillo')' href='#loginScreen'> Carillo </a>\
                                                <a id='dlg' onclick ='d('dlg')'href='#loginScreen'> De La Guerra </a>\
                                                <a id='ortega' onclick ='d('ortega')' href='#loginScreen'> Ortega </a>\
                                                <a id='portola' onclick ='d('portola')' href='#loginScreen'> Portola </a>                       \
                                              </div>\
                                                \
                                            </div>\
                                                \
                                            <button class='defaultBtn' onclick=''> Student Resource Building </button>\
                                            <button class='defaultBtn' onclick=''> Student Health </button>\
                                            <button class='defaultBtn' onclick='thunderdome()'> Thunderdome </button>\
                                            <button class='defaultBtn' onclick='harder()'>Harder Stadium </button>\
                                                \
                                            <div class='dropdown'>\
                                              <button class='dropbtn' id='campus'>Campus Restaurants </button>\
                                              \
                                              <div id='campusDropdown' class='dropdown-content'>\
                                                <a href='#'>Courtyard Cafe</a>\
                                                <a href='#'>Coral Tree Cafe</a>\
                                                <a href='#CS'>Corner Store </a>\
                                                <a href='#Bretz'>Die Bretzel </a>\
                                                <a href='#JJ'>Jamba Juice</a>\
                                                <a href='#'>Nicoletti's</a>\
                                                <a href='#Panda'>Panda Express </a>\
                                                <a href='#'>Root 217</a>\
                                                <a href='#'>Romaine's</a>\
                                                <a href='#'>Santorini Island Grill</a>\
                                                <a href='#'>Subway</a>\
                                                <a href='#'>Woodstock's</a>\
                                                <a href='#'>Wahoo's</a>             \
                                                    \
                                              </div>\
               </div>\
               <div id='mapDiv'>\
                        <img id='mapImg1' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
               </div>\
             </div>").insertAfter("#MainForm");

/*
			$("<div id='map' style='position: relative; display: none; background: rgb(230,230,230); width: 600px; height: 600px; overflow: auto; '>\
		          <img id='mapImg2' style='position: absolute; width: 800px;' src='"+chrome.extension.getURL("UCSB_largemap.jpg")+"'>\
		      </div>").insertBefore("#content");

*/



		$("<img id='MapViewIcon' src='"+chrome.extension.getURL("MapViewIcon.jpg")+"' alt='Map View' style='height:24px;width:92px;'>").insertAfter("#pageContent_weeklyButton")
        document.body.innerHTML=document.body.innerHTML.replace('<div class="title">Schedule-List</div>',"")
	               $(".BuildingLocationLink").unbind()
		           $(".BuildingLocationLink").bind("click",function(){showMap(this.innerHTML)})
		// MapView Icon goes away if you click other tab
        
        
		$("#MapViewIcon").bind("click",function() {
            showMap("")
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

            setTimeout(assignClick,100)

	}


    }, 10);
});



function assignClick(){
    $(".dropbtn").bind('click',function(){
            document.getElementById(this.id+"Dropdown").classList.toggle('show')
        })

            $("#navBar a").bind("click",function(){
            setDay(this.id)
        })
}


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
	$("#mapDiv").append(s)
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
	document.getElementById('schedRunner').style.width = '100%';

	building = s.split(" ")[0]
    $(".pin").remove()
	addBuilding(building)

}

function addBuilding(building){
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

    $('#mapDiv').animate({
    scrollTop: y/2,
    scrollLeft: x/2
    });
}

function addBuildings(arr){
    console.log(arr)
    for(q=0;q<arr.length;q++){
        addBuilding(arr[q])
    }
}

function setDay(d){
    $(".pin").remove()
    days=scrape()
    if(d=="M"){
        addBuildings(days.M)
    }
    if(d=="T"){
        addBuildings(days.T)
    }
    if(d=="W"){
        addBuildings(days.W)
    }
    if(d=="R"){
        addBuildings(days.R)
    }
    if(d=="F"){
        addBuildings(days.F)
    }
    if(d=="all"){
        addBuildings(days.M)
        addBuildings(days.T)
        addBuildings(days.W)
        addBuildings(days.R)
        addBuildings(days.F)   
    }
}

function scrape(){
            days={
            "M":[],
            "T":[],
            "W":[],
            "R":[],
            "F":[]
        }

        for(h=1;h<$("#pageContent_CourseList").children().children().length;h++){

            a=$("#pageContent_CourseList").children().children()[h].innerHTML.split(/<td class="clcellprimary(alt)?" align="left">/);
            lectTime=[]
            lectLoc=""
            sectTime=[]
            sectLoc=""
            try{
                lectTime=a[2].split("&")[0].replace(/ /g,"").split("")
                lectLoc=a[6].split('target="_self">')[1].split("<")[0]
            }catch(e){}

            try{
                sectTime=a[8].split("&")[0].replace(/ /g,"").split("")
                sectLoc=a[12].split('target="_self">')[1].split("<")[0]
            }catch(e){}

            for(j=0;j<lectTime.length;j++){
                for(k=0;k<lectLoc.length;k++){
                    days[lectTime[j]].push(lectLoc.split(" ")[0])
                }
            }
            for(j=0;j<sectTime.length;j++){
                for(k=0;k<sectLoc.length;k++){
                    days[sectTime[j]].push(sectLoc.split(" ")[0])
                }
            }

            $.unique(days.M)
            $.unique(days.T)
            $.unique(days.W)
            $.unique(days.R)
            $.unique(days.F)
        }
    return days;
}


function harder(){
    if(window.confirm("Would you like to see Harder Stadium's events for this week?")){
        window.location='https://events.ucsb.edu/this-weeks-events/';
    }
}
function thunderdome(){
    if(window.confirm("Would you like to see the Thunderdome's upcoming events?")){
        window.location='http://www.eventscenter.ucsb.edu/';
    }
}


function d(s){
    if(window.confirm("Would you like to see "+s+"'s menu for this week?")){
        var o = document.getElementById(s);
        o.setAttribute('href','https://static.housing.ucsb.edu/menu/'+s+'/thisweekmenu.pdf')
        
    }
}


window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
