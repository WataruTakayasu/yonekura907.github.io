/*  Copyright Mihai Bazon, 2002, 2003  |  http://dynarch.com/mishoo/
 * ---------------------------------------------------------------------------
 *
 * The DHTML Calendar
 *
 * Details and latest version at:
 * http://dynarch.com/mishoo/calendar.epl
 *
 * This script is distributed under the GNU Lesser General Public License.
 * Read the entire license text here: http://www.gnu.org/licenses/lgpl.html
 *
 * This file defines helper functions for setting up the calendar.  They are
 * intended to help non-programmers get a working calendar on their site
 * quickly.  This script should not be seen as part of the calendar.  It just
 * shows you what one can do with the calendar, while in the same time
 * providing a quick and simple method for setting it up.  If you need
 * exhaustive customization of the calendar creation process feel free to
 * modify this code to suit your needs (this is recommended and much better
 * than modifying calendar.js itself).
 */

Calendar.setup = function (params) {
	function param_default(pname, def) { if (typeof params[pname] == "undefined") { params[pname] = def; } };

	param_default("inputField",     null);
	param_default("displayArea",    null);
	param_default("button",         null);
	param_default("eventName",      "click");
	param_default("ifFormat",       "%Y/%m/%d");
	param_default("daFormat",       "%Y/%m/%d");
	param_default("singleClick",    true);
	param_default("disableFunc",    null);
	param_default("dateStatusFunc", params["disableFunc"]);	// takes precedence if both are defined
	param_default("dateText",       null);
	param_default("firstDay",       null);
	param_default("align",          "Br");
	param_default("range",          [1900, 2999]);
	param_default("weekNumbers",    true);
	param_default("flat",           null);
	param_default("flatCallback",   null);
	param_default("onSelect",       null);
	param_default("onClose",        null);
	param_default("onUpdate",       null);
	param_default("date",           null);
	param_default("showsTime",      false);
	param_default("timeFormat",     "24");
	param_default("electric",       true);
	param_default("step",           2);
	param_default("position",       null);
	param_default("cache",          false);
	param_default("showOthers",     false);
	param_default("multiple",       null);

	var tmp = ["inputField", "displayArea", "button"];
	for (var i in tmp) {
		if (typeof params[tmp[i]] == "string") {
			params[tmp[i]] = document.getElementById(params[tmp[i]]);
		}
	}
	if (!(params.flat || params.multiple || params.inputField || params.displayArea || params.button)) {
		alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");
		return false;
	}

	function onSelect(cal) {
		var p = cal.params;
		var update = (cal.dateClicked || p.electric);
		if (update && p.inputField) {
			
			p.inputField.value = cal.date.print(p.ifFormat);
			if (typeof p.inputField.onchange == "function")
				p.inputField.onchange();
				
			setCal(p.inputField,cal.date.print(p.ifFormat));
			
		}
		if (update && p.displayArea)
			p.displayArea.innerHTML = cal.date.print(p.daFormat);
		if (update && typeof p.onUpdate == "function")
			p.onUpdate(cal);
		if (update && p.flat) {
			if (typeof p.flatCallback == "function")
				p.flatCallback(cal);
		}
		if (update && p.singleClick && cal.dateClicked)
			cal.callCloseHandler();
	};

	if (params.flat != null) {
		if (typeof params.flat == "string")
			params.flat = document.getElementById(params.flat);
		if (!params.flat) {
			alert("Calendar.setup:\n  Flat specified but can't find parent.");
			return false;
		}
		var cal = new Calendar(params.firstDay, params.date, params.onSelect || onSelect);
		cal.showsOtherMonths = params.showOthers;
		cal.showsTime = params.showsTime;
		cal.time24 = (params.timeFormat == "24");
		cal.params = params;
		cal.weekNumbers = params.weekNumbers;
		cal.setRange(params.range[0], params.range[1]);
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.getDateText = params.dateText;
		if (params.ifFormat) {
			cal.setDateFormat(params.ifFormat);
		}
		if (params.inputField && typeof params.inputField.value == "string") {
			cal.parseDate(params.inputField.value);
		}
		cal.create(params.flat);
		cal.show();
		return false;
	}

	var triggerEl = params.button || params.displayArea || params.inputField;
	triggerEl["on" + params.eventName] = function() {
		var dateEl = params.inputField || params.displayArea;
		var dateFmt = params.inputField ? params.ifFormat : params.daFormat;
		var mustCreate = false;
		var cal = window.calendar;
		if (dateEl)
			params.date = Date.parseDate(dateEl.value || dateEl.innerHTML, dateFmt);
		if (!(cal && params.cache)) {
			window.calendar = cal = new Calendar(params.firstDay,
							     params.date,
							     params.onSelect || onSelect,
							     params.onClose || function(cal) { cal.hide(); });
			cal.showsTime = params.showsTime;
			cal.time24 = (params.timeFormat == "24");
			cal.weekNumbers = params.weekNumbers;
			mustCreate = true;
		} else {
			if (params.date)
				cal.setDate(params.date);
			cal.hide();
		}
		if (params.multiple) {
			cal.multiple = {};
			for (var i = params.multiple.length; --i >= 0;) {
				var d = params.multiple[i];
				var ds = d.print("%Y%m%d");
				cal.multiple[ds] = d;
			}
		}
		cal.showsOtherMonths = params.showOthers;
		cal.yearStep = params.step;
		cal.setRange(params.range[0], params.range[1]);
		cal.params = params;
		cal.setDateStatusHandler(params.dateStatusFunc);
		cal.getDateText = params.dateText;
		cal.setDateFormat(dateFmt);
		if (mustCreate)
			cal.create();
		cal.refresh();
		if (!params.position)
			cal.showAtElement(params.button || params.displayArea || params.inputField, params.align);
		else
			cal.showAt(params.position[0], params.position[1]);
		return false;
	};

	return cal;
};


function setCal(Obj,ymd){
	var y = ymd.substring(0,2);
	var m = ymd.substring(3,5);
	var d = ymd.substring(6,8);
	m --;
	d --;
	var id = Obj.id;
	var y_select = document.getElementsByName(id  + "_ym")[0].getElementsByTagName("option");
	for(var i=0;i<y_select.length;i++){
			var x = ["01","02","03","04","05","06","07","08","09","10","11","12"];
		z = (Number(y) + 2000) + "-" + x[m]; 
		if(y_select[i].value == z){
			y_select[i].selected = true;
		}
	}
	
//	document.getElementsByName(id  + "_mm")[0].getElementsByTagName("option")[m].selected = true;
	document.getElementsByName(id  + "_dd")[0].getElementsByTagName("option")[d].selected = true;

	if(id == "chkin"){
		var sday = new Date();
		sday.setFullYear("20" + y.toString());
		sday.setMonth(m);
		sday.setDate(d+1);
		sday.setDate(sday.getDate()+1);
		var y_select = document.getElementsByName("chkout_ym")[0].getElementsByTagName("option");
		for(var i=0;i<y_select.length;i++){
			var x = ["01","02","03","04","05","06","07","08","09","10","11","12"];
			y =	sday.getFullYear() + "-" + x[sday.getMonth()];
			if(y_select[i].value == y){
				y_select[i].selected = true;
			}
		}
		//document.getElementsByName("chkout_mm")[0].getElementsByTagName("option")[sday.getMonth()].selected = true;
		document.getElementsByName("chkout_dd")[0].getElementsByTagName("option")[sday.getDate()-1].selected = true;
	}
	
}

function crt_Cal(id,date){
	var tday = new Date();
	var x = new Array();
	var self= false;
	if(id == "ym"){
		document.write('<select name="' + id + '">');
	}else {
		document.write('<select onchange="select_Cal(this);" name="' + id + '">');
	}
	switch(date){
		case "ym":
			if(id == "chkin_ym"){
				var ln=6;
			}else if(id == "ym"){
				var ln=3;
			}else{
				var ln=7;
			}
			x = ["01","02","03","04","05","06","07","08","09","10","11","12"];
			
			if(id == "chkout_ym"){
			
				var tday = new Date(tday.getFullYear(), tday.getMonth(), tday.getDate()+1);
			
			}
			
			for(var i=0;i<ln;i++){
				var next = new Date(tday.getFullYear(), tday.getMonth() + i,01);
				if(id == "ym"){
					document.write('<option value="'+ next.getFullYear() + x[next.getMonth()] + '">'+ next.getFullYear() +'年'+ x[next.getMonth()] + '</option>');
				}else {
					document.write('<option value="'+ next.getFullYear() +'-'+ x[next.getMonth()] + '">'+ next.getFullYear() +'年'+ x[next.getMonth()] + '</option>');
				}
			}


			self = "OFF";
		break;
		case "dd":
			var ln = 32;
			for(var i=0;i<10;i++){
				x[i] = "0" + i.toString();
			}
			for(var i=10;i<ln;i++){
				x[i] = i;
			}
			x.shift();
			self = tday.getDate();
			self --;
			ln --;
		break;
		case "dd_out":
			var ln = 32;
			for(var i=0;i<10;i++){
				x[i] = "0" + i.toString();
			}
			for(var i=10;i<ln;i++){
				x[i] = i;
			}
			x.shift();
			ln --;
			
			document.getElementById("chkin").value = tday.getFullYear() +"-"+ eval(tday.getMonth()+1) +"-"+ tday.getDate();
			tday.setDate(tday.getDate()+1);
			self = tday.getDate() -1;
			document.getElementById("chkout").value = tday.getFullYear() +"-"+ eval(tday.getMonth()+1) +"-"+ tday.getDate();
			
		break;
	}
	
	if(self != "OFF"){
		for(var i=0;i<ln;i++){
			if(i==self){
				document.write('<option selected="selected" value="'+ x[i] +'">' + Number(x[i]) + '</option>');
			}else{
				document.write('<option value="'+ x[i] +'">' + Number(x[i]) + '</option>');
			}
		}
	}
	
	document.write('</select>');
};

function select_Cal(Obj){
	if(Obj.name.indexOf("in") > 0){
		
		var y = document.getElementsByName("chkin_ym")[0].getElementsByTagName("option")[document.getElementsByName("chkin_ym")[0].selectedIndex].value;
		var d = document.getElementsByName("chkin_dd")[0].selectedIndex;
		d = document.getElementsByName("chkin_dd")[0].getElementsByTagName("option")[d].value;
		y = y.split("-");
		var m = y[1];
		y = y[0];
		
		var tday = new Date(y,m-1,d);
		tday.setDate(tday.getDate()+1);
		var y_select = document.getElementsByName("chkout_ym")[0].getElementsByTagName("option");
		var x = ["01","02","03","04","05","06","07","08","09","10","11","12"];
		y =	tday.getFullYear() + "-" + x[tday.getMonth()];
		for(var i=0;i<y_select.length;i++){
			if(y_select[i].value == y){
				y_select[i].selected = true;
			}
		}
		document.getElementsByName("chkout_dd")[0].getElementsByTagName("option")[tday.getDate()-1].selected = true;
	}
	
};

function cal_submit(){
	
	var chkin = document.getElementsByName("chkin_ym")[0].getElementsByTagName("option")[document.getElementsByName("chkin_ym")[0].selectedIndex].value;
	var chkout = document.getElementsByName("chkout_ym")[0].getElementsByTagName("option")[document.getElementsByName("chkout_ym")[0].selectedIndex].value;
	chkin = chkin.split("-");
	chkout = chkout.split("-");
		
	
	document.getElementsByName("chkin_yy")[0].value = chkin[0];
	document.getElementsByName("chkin_mm")[0].value = chkin[1];
	document.getElementsByName("chkout_yy")[0].value = chkout[0];
	document.getElementsByName("chkout_mm")[0].value = chkout[1];
	
	
	
		
};