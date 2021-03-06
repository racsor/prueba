
//Divs Graphics
var bActual  = 0;
var bHome    = 1;
var bLogin   = 2;
var bSign    = 3;
var bForgot  = 4;
var bQuiniela = 5;
var bMyAccount = 6;
var bMyData = 7;
var bMyBalance = 8;
var bMyBets = 9;
var bMyRank = 10;
var bMyResum = 11;
var bMyAdmin = 12;
var bQuinielaDetail = 13;
var bMyModal = 14;
var bConfirmQuiniela = 15;
var bModalReduced = 16;
var bConfirmedQuiniela = 17;
var bCompany = 18;
var bMyAdminCompany = 19;
var bNewPassword = 20;
var bCompanyMgr = 21;
var bMyCompanyOptions = 22;
var bPublicCompaniesOptions = 23;
var bQuinielaLAE = 24;
var bAbout = 25;
var bContact = 26;

//Texts
var sHome    = "Inicio";
var sLogin   = "Login";
var sSign    ="";
var sForgot = "";
var sQuininiela = "Quiniela";
var sQuinielaLAE = "LAE-1X2";
var sGuest = "Invitado";
var sLogout = "Logout";
var sAdmin = "Administration";
var sAdminCompany = "AdminCompany";
var sQuiniDetail = "";
var sMyModal = "";
var sConfirmQuiniela = "";
var sConfirmedQuiniela = "";
var sModalReduced ="";
var sCompany ="";
//var sCompanyDefault ="QuiniGoldClassic";
var sCompanyDefault ="LAE";
var sMyCompanyOptions = "";
var sPublicCompaniesOptions = "";

//Refs
var sHomeRef = "#homeDiv";
var sLoginRef = "#loginDiv";
var sSignRef = "#signDiv";
var sForgotRef ="#forgotDiv";
var sQuinielaRef = "#quinielaDiv";
var sQuinielaLAERef = "#quinielaLAEDiv";
var sGuestRef = "#";
var sMyaccountRef = "#myaccountDiv";
var sLogoutRef = "#logoutDiv";
var sMyDataRef = "#mydataDiv";
var sMyBalanceRef = "#mybalanceDiv";
var sMyBetsRef = "#mybetsDiv";
var sMyOwnBetsRef = "#myOwnBetsDiv";
var sMyRankingRef = "#myrankingDiv";
var sMyRankRef = "#myRankDiv";
var sMyResumRef = "#myResumDiv";
var sMyAdminRef = "admin";
var sMyAdminCompanyRef = "adminCompany";
var sQuinielaDetailRef = "#quinielaDetailDiv";
var sMyModalRef = "#myModal";
var sConfirmQuinielaRef = "#confirmarQuinielaDiv";
var sConfirmedQuinielaRef = "#confirmadaQuinielaDiv";
var sModalReducedRef = "#modalReduced";
var sCompanyRef ="#myCompanyDiv";
var sCompanyMgrRef ="#myCompanyMgrDiv";
var sMyAdminCompanyRef = "adminCompany";
var sNewPasswordRef = "#newPasswordDiv";
var sMyCompanyOptionsRef = "#myCompanyOptions";
var sPublicCompaniesOptionsRef ="#publicCompanyOptions";
var sAboutRef ="#about";
var sContactRef ="#contact";

var buttonpressed;

Array.prototype.uniqueArray = function()
{
	this.sort();
	var re=[this[0]];
	for(var i = 1; i < this.length; i++)
	{
		if( this[i] !== re[re.length-1])
		{
			re.push(this[i]);
		}
	}
	return re;
};


function initDiv() {
	//document.getElementById("homeDiv").style.display = "block";
	$(sHomeRef).show();
	//document.getElementById("loginDiv").style.display = "none";
	$(sLoginRef).hide();
	//document.getElementById("signDiv").style.display = "none";
	$(sSignRef).hide();
	$('#signupFormResponse').hide();
	//document.getElementById("forgotDiv").style.display = "none";
	$(sForgotRef).hide();
	//document.getElementById("quinielaDiv").style.display = "none";
	$(sQuinielaRef).hide();
	$(sMyaccountRef).hide();
	$(sMyDataRef).hide();
	$(sMyBalanceRef).hide();
	$(sMyBetsRef).hide();
	$(sMyRankingRef).hide();
	$(sMyRankRef).hide();
	$(sMyResumRef).hide();
	$(sQuinielaDetailRef).hide();
	$(sMyModalRef).hide();
	$(sConfirmQuinielaRef).hide();
	$(sConfirmedQuinielaRef).hide();
	$(sModalReducedRef).hide();
	$(sCompanyRef).hide();
	$(sNewPasswordRef).hide();
	$(sCompanyMgrRef).hide();
//	$(joinCompanyResponse).hide();
	$(sMyCompanyOptionsRef).hide();
	$(sPublicCompaniesOptionsRef).hide();
	
	
	
	bActual = bHome;
	
	//document.getElementById("contact").style.display = "none";
	$(sContactRef).hide();
	//document.getElementById("about").style.display = "none";
	$(sAboutRef).hide();
}

function showDiv(elem) {
//alert("showDiv elem="+elem);	
	if (elem == bActual)
		return;
	
	switch (elem){
	case bHome:
		$(sHomeRef).show();
		//document.getElementById("homeDiv").style.display = "block";
		break;
	case bLogin:
		$(sLoginRef).show();
		//document.getElementById("logingDiv").style.display = "block";
		break;
	case bSign:
		$(sSignRef).show();
		//document.getElementById("signDiv").style.display = "block";
		break;
	case bForgot:
		$(sForgotRef).show();
		//document.getElementById("forgotDiv").style.display = "block";
		break;
	case bQuinielaLAE:
		window.company = window.DEFECT_COMPANY;
		sCompany = '';
		getQuiniela();
		$(sQuinielaRef).show();
		break;
	case bQuiniela:
		getQuiniela();
		$(sQuinielaRef).show();
		//document.getElementById("quinielaDiv").style.display = "block";
		break;
	case bMyAccount:
		$(sMyaccountRef).show();
		break;
	case bMyData:
		$(sMyDataRef).show();
		break;
	case bMyBalance:
		$(sMyBalanceRef).show();
		break;
	case bMyBets:
		$(sMyCompanyOptionsRef).modal('hide');
		$(sMyBetsRef).show();
		break;
	case bMyRank:
		$(sMyCompanyOptionsRef).modal('hide');
		$(sMyRankingRef).show();
		break;
	case bMyResum:
		$(sMyResumRef).show();
		break;
	case bMyAdmin:
		consoleAlterQ("callToSuperAdminCompany");
		$(sMyAdminRef).open();
		break;
	case bMyAdminCompany:
//		$(sMyAdminCompanyRef).open();
		consoleAlterQ("callToMyAdminCompany");
		callToMyAdminCompany();
		break;
	case bQuinielaDetail:
		sCompany = '';
		$(sQuinielaDetailRef).show();
		break;
	case bMyModal:
		$(sMyModalRef).show();
		break;
	case bConfirmQuiniela:
		$(sConfirmQuinielaRef).show();
		break;
	case bConfirmedQuiniela:
		$(sConfirmedQuinielaRef).show();
		break;
	case bModalReduced:
		$(sModalReducedRef).show();
		break;
	case bCompany:
		getCompanies();
		$(sCompanyRef).show();
		break;
	case bCompanyMgr:
		getCompanies();
		$(sCompanyMgrRef).show();
		break;
	case bNewPassword:
		$(sNewPasswordRef).show();
		break;
	case bAbout:
		$(sAboutRef).show();
		break;
	case bContact:
		$(sContactRef).show();
		break;
	}

	switch (bActual){
	case bHome:
		$(sHomeRef).hide();
		//document.getElementById("homeDiv").style.display = "none";
		break;
	case bLogin:
		$(sLoginRef).hide();
		//document.getElementById("logiDiv").style.display = "none";
		break;
	case bSign:
		$(sSignRef).hide();
		//document.getElementById("signDiv").style.display = "none";
		break;
	case bForgot:
		$(sForgotRef).hide();
		//document.getElementById("forgotDiv").style.display = "none";
		break;
	case bQuinielaLAE:
		if (elem != bQuiniela)
			$(sQuinielaRef).hide();
		break;
	case bQuiniela:
		if (elem != bQuinielaLAE)
			$(sQuinielaRef).hide();
		//document.getElementById("quinielaDiv").style.display = "none";
		break;
	case bMyAccount:
		$(sMyaccountRef).hide();
		break;
	case bMyData:
		$(sMyDataRef).hide();
		break;
	case bMyBalance:
		$(sMyBalanceRef).hide();
		break;
	case bMyBets:
		$(sMyBetsRef).hide();
		break;
	case bMyRank:
		$(sMyRankingRef).hide();
		$(sMyRankRef).hide();
		break;
	case bMyResum:
		$(sMyResumRef).hide();
		break;
	case bQuinielaDetail:
		$(sQuinielaDetailRef).hide();
		break;
	case bMyModal:
		$(sMyModalRef).hide();
		break;
	case bConfirmQuiniela:
		$(sConfirmQuinielaRef).hide();
		break;
	case bConfirmedQuiniela:	
		$(sConfirmedQuinielaRef).hide();
		break;
	case bModalReduced:
		$(sModalReducedRef).hide();
		break;
	case bCompany:
		$(sCompanyRef).hide();
		break;
	case bCompanyMgr:
		$(sCompanyMgrRef).hide();
		break;
	case bNewPassword:
		$(sNewPasswordRef).hide();
		break;
	case bAbout:
		$(sAboutRef).hide();
		break;
	case bContact:
		$(sContactRef).hide();
		break;
		
	}
	
	bActual = elem;
//	alert ("actual="+bActual);
	$('html, body').animate({ scrollTop: '0px' }, 0);
}

//Manage Menu Events 
function menuEvent(name, href)
{
		consoleAlterQ("menuEvent elem="+ name +" href="+href);
//alert("menuEvent elem="+ name +" href="+href);

	if (href == sHomeRef){
		consoleAlterQ("Home");
		showDiv(bHome);
	}else if (href == sLoginRef){
		consoleAlterQ("Login");
		showDiv(bLogin);
	}else if (href == sSignRef){
		consoleAlterQ("Sign");
		showDiv(bSign);
	}else if (href == sForgotRef){
		consoleAlterQ("Forget");
		showDiv(bForget);
	}else if (href == sQuinielaLAERef){
		consoleAlterQ("QuinielaLAE");
		window.loadBet=true;
		window.company = window.DEFECT_COMPANY;
		window.quinielaFinal = true;
		showDiv(bQuinielaLAE);
	}else if (href == sQuinielaRef){
		consoleAlterQ("Quiniela");
		showDiv(bQuiniela);
	}else if (href == sGuestRef){
		consoleAlterQ("Guest");
	}else if (href == sMyaccountRef){
		consoleAlterQ("Myaccount");
		showDiv(bMyAccount);
	}else if (href == sLogoutRef){
		consoleAlterQ("Logout");
		//vamos a hacer el logout
		doLogout();
	}else if (href == sMyDataRef){
		consoleAlterQ("Mydata");
		showDiv(bMyData);
	}else if (href == sMyBalanceRef){
		consoleAlterQ("Mybalance");
		showDiv(bMyBalance);
	}else if (href == sMyBetsRef){
		consoleAlterQ("Mybets");
		getUserBets();
		showDiv(bMyBets);
	}else if (href == sMyOwnBetsRef){
		consoleAlterQ("MyOwnbets");
		window.company = window.DEFECT_COMPANY;
		sCompany == '';
		getUserBets();
		showDiv(bMyBets);
	}else if (href == sMyRankingRef){
		consoleAlterQ("Myranking");
		getCompanyRanking(0); //round = 0 para mostrar el ranking global
		showDiv(bMyRank);
	}else if (href == sMyResumRef){
		consoleAlterQ("MyResum");
		paintResum();
		showDiv(bMyResum);
//	}else if (href == sMyRankingRef){
//		consoleAlterQ("MyRank");
//		paintRanking();
//		showDiv(bMyRank);
	}else if (href == sMyAdminRef){
		consoleAlterQ("MyAdmin");
		showDiv(bMyAdmin);
	}else if (href == sMyAdminCompanyRef){
		consoleAlterQ("MyAdminCompany");
		showDiv(bMyAdminCompany);
	}else if (href == sCompanyRef){
		consoleAlterQ("MyCompany");
		showDiv(bCompany);
	}else if (href == sCompanyMgrRef){
		consoleAlterQ("MyCompanyMgr");
		showDiv(bCompanyMgr);
	}else if (href == sNewPasswordRef){
		consoleAlterQ("NewPassword");
		showDiv(bNewPassword);
	}else if (href == sAboutRef){
		consoleAlterQ("About");
		showDiv(bAbout);
	}else if (href == sContactRef){
		consoleAlterQ("Contact");
		showDiv(bContact);
	}
	return false;
	
}

function getMainMenuItems(userLoged, user)
	{
	consoleAlterQ("getMainMenuItems userLoged="+userLoged+" user="+user+" admin="+window.admin + " superAdmin="+window.superAdmin);
	//MENU WEB 
	$('#menu-nav li').remove();
	
	if (!superAdmin)
	{
		$('#menu-nav').append('<li><a href="'+sHomeRef+'">' + sHome + '</a></li>');
		$('#menu-nav').append('<li><a href="' + sQuinielaLAERef + '">' + sQuinielaLAE + '</a></li>');
//		$('#menu-nav').append('<li><a href="' + sQuinielaRef + '"><img alt="Quiniela" style="background-color:white;vertical-align:middle;" src="/quinimobile/static/resources/_include/img/logo/logo_quiniela.png"/> </a></li>');
//		$('#menu-nav').append('<li><a href="' + sQuinielaRef + '"><img alt="Quiniela" style="background-color:white;" src="<c:url value=\'/static/resources/_include/img/logo/logo_quiniela.png\'/>" /> </a></li>');
	}
	
	if (userLoged){
		if (superAdmin)
			$('#menu-nav').append('<li><a href="' + sMyAdminRef + '">' + sAdmin + '</a></li>');
		else{
			$('#menu-nav').append('<li><a href="' + sMyaccountRef + '">' + user + '</a></li>');
/*			if (companySelected){
				$('#menu-nav').append('<li><a href="' + sCompanyRef + '">['+sCompany+']</a></li>');
			}else{
				$('#menu-nav').append('<li><a href="' + sCompanyRef + '">['+sCompanyDefault+']</a></li>');
			}
*/			
			$('#menu-nav').append('<li><a href="' + sCompanyRef + '">GRUPOS</a></li>');
//			if (admin)
//				$('#menu-nav').append('<li><a id="anchorToAdmin" href="' + sMyAdminCompanyRef + '">' + sAdminCompany + '</a></li>');

		}
		$('#menu-nav').append('<li><a href="' + sLogoutRef + '">' + sLogout + '</a></li>');
	}
	else{
		$('#menu-nav').append('<li><a href="' + sGuestRef + '">'+sGuest+'</a></li>');
		$('#menu-nav').append('<li><a href="' + sLoginRef + '">' + sLogin + '</a></li>');
	}
	
	
	// MENU MOBILE 
	
	$('#menu-nav-mobile li').remove();
	
	if (!admin)
	{
    	$('#menu-nav-mobile').append('<li><a href="'+sHomeRef+'">' + sHome + '</a></li>');
    	$('#menu-nav-mobile').append('<li><a href="' + sQuinielaLAERef + '">' + sQuinielaLAE + '</a></li>');
	}
	if (userLoged){
		if (admin)
			$('#menu-nav-mobile').append('<li><a href="' + sMyAdminRef + '">' + sAdmin + '</a></li>');
		else{
			$('#menu-nav-mobile').append('<li><a href="' + sMyaccountRef + '">' + user + '</a></li>');
/*			if (companySelected){
				$('#menu-nav-mobile').append('<li><a href="' + sCompanyRef + '">['+sCompany+']</a></li>');
			}else{
				$('#menu-nav-mobile').append('<li><a href="' + sCompanyRef + '">['+sCompanyDefault+']</a></li>');
			}
*/			
			$('#menu-nav-mobile').append('<li><a href="' + sCompanyRef + '">GRUPOS</a></li>');
		}
		$('#menu-nav-mobile').append('<li><a href="' + sLogoutRef + '">' + sLogout + '</a></li>');
	}
	else{
		$('#menu-nav-mobile').append('<li><a href="' + sGuestRef + '">'+sGuest+'</a></li>');
		$('#menu-nav-mobile').append('<li><a href="' + sLoginRef + '">' + sLogin + '</a></li>');
	}
	

	consoleAlterQ("getMainMenuItems fin");
	}

//function paintRanking(){
//	$('#rankingSelect li').remove();
//	$('#rankingSelect').append($("<li><a class='list-group-item' id="+window.season+"_0>"+(window.season-1)+"/"+window.season+"</a></li>"));
//	$('#rankingSelect').append($("<li><a class='divider'></a></li>"));
//	var num=1;
//	for ( num = 1; num < window.round + 1; num++) {
//		$('#rankingSelect').append($("<li><a id='"+window.season+"_"+num+"' href='#'>"+num+"</a></li>"));
//	}
//	callRanking(window.idUserAlterQ,window.company,window.season,window.round);
//}

function paintResum(){
	$('#resumSelect li').remove();
	$('#resumSelect').append($("<li><a class='list-group-item' id="+window.season+"_0>"+(window.season-1)+"/"+window.season+"</a></li>"));
	$('#resumSelect').append($("<li><a class='divider'></a></li>"));
	for ( var num = 1; num < window.round + 1; num++) {
		$('#resumSelect').append($("<li><a id='"+window.season+"_"+num+"' href='#'>"+num+"</a></li>"));
	}
	callResum(window.season,window.round);
}



$(document).ready(function() {
	
	consoleAlterQ("alterQ ready: round="+window.round+" season="+window.season);
		
	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};
	
	initDiv(bHome);
	
	
	//Paint Main Menu Items
	consoleAlterQ("Menu: pintamos los elementos del menu");
	getMainMenuItems(userLoged, userLoged?response.userAlterQ.name:null);
    
	//Menu Click Events
	$('div').on("click", "nav#menu ul#menu-nav li a", function( event ) {
		menuEvent($(this).text(), $(this).attr("href"));
  		event.preventDefault();
	});
	//Menu Mobile Click Events
	$('div').on("click", "nav#navigation-mobile ul#menu-nav-mobile li a", function( event ) {
		menuEvent($(this).text(), $(this).attr("href"));
		event.preventDefault();
	});
	

	
	var jqxhr =
	    $.ajax({
	        url: ctx+"/login",
 	    })
	    .success (function(response) { 
		    if(response.errorDto!=0){
		    	if (bActual == bLogin)
		    		showDiv(bLogin);
		    	else
					showDiv(bHome);
		    	
				window.userLoged=false;
		    }
		    else{
		    	if (response.userAlterQ!=null){
	    			showDiv(bHome);
		    			
					fillUserData(response);
					
					window.userLoged=true;
					window.loadBetUser = true;
					consoleAlterQ("loadBetUser: TRUE");
		    	}
		    	else{
		    		showDiv(bHome);
		    		window.userLoged=false;
		    	}
		    }
		    fillRoundSeasonCompany(response);

			//Paint Main Menu Items
			consoleAlterQ("Menu: pintamos los elementos del menu");
			getMainMenuItems(window.userLoged, window.userLoged?response.userAlterQ.name:null);
	    });
	
	
	$("form a").click(function( event ){
//alert("Form ="+ $(this).text() +" href="+$(this).attr("href"));
		var elem = $(this).text();
		var href = $(this).attr("href");
		
		if (href == sSignRef){
			consoleAlterQ("Sign");
			showDiv(bSign);
		}else if (href == sForgotRef){
			consoleAlterQ("Forget");
			showDiv(bForgot);
		}
  		event.preventDefault();
    });
	
	$('form#contact-form').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#contact-form').serializeObject());
		 consoleAlterQ(dataJson);
		 consoleAlterQ(ctx+'/contact/'+$("input[id=contact_name]").val()+'/'+$("input[id=contact_email]").val()+'/'+$("textarea[id=contact_message]").val());
		 jQuery.ajax ({
			    url: ctx+'/contact/'+$("input[id=contact_name]").val()+'/'+$("input[id=contact_email]").val()+'/'+$("textarea[id=contact_message]").val(),
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	consoleAlterQ("contact: response="+response.errorDto);
		   		    	$('#mailFormResponse').html("");
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#mailFormResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    	consoleAlterQ("contact: response= mail OK");
						$('#mailFormResponse').text("Mail enviado Correctaemnte");
						//showDiv(bHome);
		   		    }
			    }
			});
		 	event.preventDefault(); // prevent actual form submit and page reload
	});
	
	$('form#loginForm').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#loginForm').serializeObject());
		 consoleAlterQ(dataJson);
		 jQuery.ajax ({
			    url: ctx+'/login',
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	consoleAlterQ("login: response="+response.errorDto);
		   		    	$('#loginFormResponse').html("");
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#loginFormResponse').append(objeto.stringError+" - ");
					    });
		   		    	userLoged=false;
		   		    }
		   		    else{
		   		    	consoleAlterQ("login: response="+response.userAlterQ.name);
						$('#loginFormResponse').text(response.userAlterQ.name);
						userLoged=true;
						fillUserData(response);
						getMainMenuItems(userLoged, userLoged?response.userAlterQ.name:null);
						showDiv(bHome);
		   		    }
				    fillRoundSeasonCompany(response);
			    }
			});
		 	event.preventDefault(); // prevent actual form submit and page reload
	});
	
	 $('form#newPwdForm').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#newPwdForm').serializeObject());
		 consoleAlterQ(dataJson);
		 jQuery.ajax ({
			    url: ctx+'/myaccount/'+ idUserAlterQ + '/' + $("input[id=pwdOldNewPwd]").val() + '/' + $("input[id=pwdNewNewPwd]").val() + '/newPwd',
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$('#newPwdFormResponse').text("");
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#newPwdFormResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    	consoleAlterQ("newPassword: response= OK");
		   		    	$('#newPwdFormResponse').text("Password Changed - OK");
		   		    }
			    }
			});
		 	event.preventDefault(); // prevent actual form submit and page reload
	 });
	 
	 $('form#forgotPwdForm').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#forgotPwdForm').serializeObject());
		 consoleAlterQ(dataJson);
		 jQuery.ajax ({
			    url: ctx+'/myaccount/forgotPwd',
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#forgotPwdFormResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    }
			    }
			});
		 	event.preventDefault(); // prevent actual form submit and page reload
	 });
	 $('form#signupForm').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#signupForm').serializeObject());
		 consoleAlterQ(dataJson);
		 jQuery.ajax ({
			    url: ctx+'/myaccount',
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$('#signupFormResponse').html("");
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#signupFormResponse').append(objeto.stringError+" <br>");
					    });
						showDiv(bSign);
						$('#signupFormResponse').show();
		   		    }
		   		    else{
						userLoged=true;
						fillUserData(response);
						getMainMenuItems(userLoged, userLoged?response.userAlterQ.name:null);
						showDiv(bHome);
						
		   		    }
			    }
			});
		 	event.preventDefault(); // prevent actual form submit and page reload
	 });

	 
	 $('form#myDataForm').submit(function( event ) {
   		 var dataJson=JSON.stringify($('form#myDataForm').serializeObject());
   		 consoleAlterQ('updateDataJsonAlterQ:'+dataJson);
		 jQuery.ajax ({
			    url: ctx+'/myaccount/'+ idUserAlterQ +'/update',
			    type: "PUT",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		        cache: false,    //This will force requested pages not to be cached by the browser  
		        processData:false, //To avoid making query String instead of JSON
			    success: function(response){
				    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#userAlterQFormResponse').append(objeto.stringError+" - ");
					    });
				    }
				    else{
						$('#userAlterQFormResponse').text(response.userAlterQ.name+", tus datos han sido actualizados.");
				    }
			    }
		 });
		event.preventDefault(); // prevent actual form submit and page reload
   	 });
			  	 
	$('form#balanceAlterQForm').submit(function( event ) {
  		 var dataJson=JSON.stringify($('form#balanceAlterQForm').serializeObject());
   		 consoleAlterQ('update:balanceAlterQForm:'+dataJson);
		 jQuery.ajax ({
			    url: ctx+'/myaccount/'+ idUserAlterQ +'/update',
			    type: "PUT",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		        cache: false,    //This will force requested pages not to be cached by the browser  
		        processData:false, //To avoid making query String instead of JSON
			    success: function(response){
				    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#balanceAlterQFormResponse').append(objeto.stringError+" - ");
					    });
				    }
				    else{
						$('#balanceAlterQFormResponse').text(response.userAlterQ.name+", tu saldo ha sido actualizado.");
				    }
			    }
		 });
		event.preventDefault(); // prevent actual form submit and page reload
	});
	
	 $('form#myCompanyForm').submit(function( event ) {
   		 var dataJson=JSON.stringify($('form#myCompanyForm').serializeObject());
   		 //showDiv(bHome);
//   		 var submit = $(this.id).context.activeElement;
//		 consoleAlterQ("Company: "+submit.value);
//		 window.company=submit.value;
//		 requestUserSession.company =window.company;
   		 consoleAlterQ('updateDataJsonAlterQ:'+dataJson);
		event.preventDefault(); // prevent actual form submit and page reload
   	 });

	 //join to company

	 $('form#joinCompanyForm').submit(function( event ) {
		 /*
		 var dataJson=JSON.stringify($('form#joinCompanyForm').serializeObject());
		 var companyTojoin=$('#companyToChoosePublic option:selected').val();
		 var dataToSend = { "id":requestUserSession.idUserAlterQ,"rols":[{"company":companyTojoin,"rol":RolNameEnum.ROL_USER}]};
		 consoleAlterQ('joinCompanyForm:'+JSON.stringify(dataToSend));
		 $(joinCompanyResponse).show();
		 
		 var actionToCompany=$('#selectActionRolCompany option:selected').val();
		 
		 if (actionToCompany==1){
			 //Unirse a -->
			 jQuery.ajax ({
				    url: ctx+'/myaccount/'+window.idUserAlterQ+'/rolcompany',
				    type: "POST",
				    data: JSON.stringify(dataToSend),
				    contentType: "application/json; charset=utf-8",
				    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		            cache: false,    //This will force requested pages not to be cached by the browser  
		            processData:false, //To avoid making query String instead of JSON
				    success: function(response){
			   		    if(response.errorDto!=0){
			   		    	$(response.errorDto).each(function(index, objeto){  
			   		    		$('#joinCompanyResponse').append(objeto.stringError+" - ");
						    });
			   		    }
			   		    else{
			   		    	$('#joinCompanyResponse').text("Te has unido a la company.");
			   		    	consoleAlterQ('call to getCompanies to reload company combo');
			   		    	window.loadCompanies=true;
			   		    	getCompanies();
			   		    }
				    }
				});
		 }
		 else{
			 //borrarse de
			 jQuery.ajax ({
				    url: ctx+'/myaccount/'+window.idUserAlterQ+'/rolcompany',
				    type: "DELETE",
				    data: JSON.stringify(dataToSend),
				    contentType: "application/json; charset=utf-8",
				    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		            cache: false,    //This will force requested pages not to be cached by the browser  
		            processData:false, //To avoid making query String instead of JSON
				    success: function(response){
			   		    if(response.errorDto!=0){
			   		    	$(response.errorDto).each(function(index, objeto){  
			   		    		$('#joinCompanyResponse').append(objeto.stringError+" - ");
						    });
			   		    }
			   		    else{
			   		    	$('#joinCompanyResponse').text("Te has borrado de la company.");
			   		    	consoleAlterQ('call to getCompanies to reload company combo');
			   		    	window.loadCompanies=true;
			   		    	getCompanies();
			   		    }
				    }
				});
			 
		 }
//		 showDiv(bHome);
		 */
		 event.preventDefault(); // prevent actual form submit and page reload
	 });
	 
	 
	 //create company
	 $('form#adminCompanyForm').submit(function( event ) {
		 var dataJson=JSON.stringify($('form#adminCompanyForm').serializeObject());
		 showDiv(bHome);
		 consoleAlterQ('create company adminCompanyForm:'+dataJson);
		 jQuery.ajax ({
			 //CompanyController.createCompany()
			    url: ctx+'/company/'+window.idUserAlterQ,
			    type: "POST",
			    data: dataJson,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#adminCompanyFormResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    	consoleAlterQ('call to getCompanies to reload company combo');
		   		    	window.loadCompanies=true;
		   		    	getCompanies();
		   		    }
			    }
			});
		 
		 event.preventDefault(); // prevent actual form submit and page reload
	 });
	
	$("a#about").click(function( event ){
		menuEvent($(this).text(), $(this).attr("href"));
		event.preventDefault(); // prevent actual form submit and page reload
	});

	$("a#contact").click(function( event ){
		menuEvent($(this).text(), $(this).attr("href"));
		event.preventDefault(); // prevent actual form submit and page reload
	});
	 
	$("#goUp").click(function( event ){
		menuEvent($(this).text(), $(this).attr("href"));
		event.preventDefault(); // prevent actual form submit and page reload
    });
	
	$("#quinielaBtn").click(function( event ){
		menuEvent($(this).text(), $(this).attr("href"));
		event.preventDefault(); // prevent actual form submit and page reload
   });
	$("#myDataBtn").on('click', function( event ){
		menuEvent($(this).text(),  "#mydataDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myBalanceBtn").click(function( event ){
		menuEvent($(this).text(), "#mybalanceDiv");
		event.preventDefault(); // prevent actual form submit and page reload
   });
	$("#myBetsBtn").click(function( event ){
		menuEvent($(this).text(), "#mybetsDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myOwnBetsBtn").click(function( event ){
		menuEvent($(this).text(), "#myOwnBetsDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myRankingBtn").click(function( event ){
		menuEvent($(this).text(), "#myrankingDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myPwdBtn").click(function( event ){
		menuEvent($(this).text(), "#newPasswordDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myRankBtn").click(function( event ){
//		menuEvent($(this).text(), "#myRankDiv");
		menuEvent($(this).text(), "#myrankingDiv");
		event.preventDefault(); // prevent actual form submit and page reload
	});
	$("#myResumBtn").click(function( event ){
		menuEvent($(this).text(), "#myResumDiv");
		event.preventDefault(); // prevent actual form submit and page reload
	});
   	$('mydataDiv').click(function( event ){
		$(sMyDataRef).show();
		event.preventDefault(); // prevent actual form submit and page reload
  	});
	$("#myCompanyMgrBtn").on('click', function( event ){
		menuEvent($(this).text(),  "#myCompanyMgrDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myBetsAutomBtn").on('click', function( event ){
		consoleAlterQ('myBetsAutomBtn - click');
		updateAutomaticBets();
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myQuiniela").on('click', function( event ){
		consoleAlterQ("myQuiniela.click()");
		window.quinielaFinal = false;
		window.loadBet=true;
		$(sMyCompanyOptionsRef).modal('hide');
		menuEvent("QUINIELA",  "#quinielaDiv");
		event.preventDefault(); // prevent actual form submit and page reload
    });
	$("#myDejarGr").on('click', function( event ){
		consoleAlterQ("myDejarGr: click");
		$(sMyCompanyOptionsRef).modal('hide');
		 
		 var dataJson=JSON.stringify($('form#leaveCompanyForm').serializeObject());
		 var dataToSend = { "id":requestUserSession.idUserAlterQ,"rols":[{"company":window.company,"rol":RolNameEnum.ROL_USER}]};
		 consoleAlterQ('leaveCompanyForm:'+JSON.stringify(dataToSend));
		 $(joinCompanyResponse).show();
		 
		 //borrarse de
		 jQuery.ajax ({
			    url: ctx+'/myaccount/'+window.idUserAlterQ+'/rolcompany',
			    type: "DELETE",
			    data: JSON.stringify(dataToSend),
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#joinCompanyResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    	$('#joinCompanyResponse').text("Te has borrado de la company.");
		   		    	consoleAlterQ('call to getCompanies to reload company combo');
		   		    	window.loadCompanies=true;
		   		    	getCompanies();
		   		    }
			    }
			});
		 
		 event.preventDefault(); // prevent actual form submit and page reload
    });
	
	$("#myUnirGr").on('click', function( event ){
		consoleAlterQ("myUnirGr: click");
		$(sPublicCompaniesOptionsRef).modal('hide');
		 
		 var dataJson=JSON.stringify($('form#joinCompanyForm').serializeObject());
		 var dataToSend = { "id":requestUserSession.idUserAlterQ,"rols":[{"company":window.company,"rol":RolNameEnum.ROL_USER}]};
		 consoleAlterQ('joinCompanyForm:'+JSON.stringify(dataToSend));
		 $(joinCompanyResponse).show();

		 jQuery.ajax ({
			    url: ctx+'/myaccount/'+window.idUserAlterQ+'/rolcompany',
			    type: "POST",
			    data: JSON.stringify(dataToSend),
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	            cache: false,    //This will force requested pages not to be cached by the browser  
	            processData:false, //To avoid making query String instead of JSON
			    success: function(response){
		   		    if(response.errorDto!=0){
		   		    	$(response.errorDto).each(function(index, objeto){  
		   		    		$('#joinCompanyResponse').append(objeto.stringError+" - ");
					    });
		   		    }
		   		    else{
		   		    	$('#joinCompanyResponse').text("Te has unido a la company.");
		   		    	consoleAlterQ('call to getCompanies to reload company combo');
		   		    	window.loadCompanies=true;
		   		    	getCompanies();
		   		    }
			    }
			});
		 
		 event.preventDefault(); // prevent actual form submit and page reload
    });

	$("#myAdminGr").on('click', function( event ){
		$(sMyCompanyOptionsRef).modal('hide');
		menuEvent("ADMIN GRUPO",  sMyAdminCompanyRef);
		event.preventDefault(); // prevent actual form submit and page reload
    });
	
	
	
	//myBetsAutomBtn
  	
//   	$( "#rankingSelect" ).on( "click", "a", function( event ) {
//   	$( "#rankingSelectTable" ).on( "click", "tbody tr td div ul li a", function( event ) {
   	$( "#rankingSelectTable" ).on( "click", "li a", function( event ) {
   		consoleAlterQ('rankingSelect');
		texto=this.id;
		pos = texto.indexOf('_');
		temporada=texto.substring(0,pos);
		jornada=texto.substring(pos+1);
		consoleAlterQ("company_temporada_jornada="+window.company+"-"+temporada+"-"+jornada);
		//callRanking(window.idUserAlterQ,window.company,temporada,jornada);
		getCompanyRanking(jornada);
		event.preventDefault(); // prevent actual form submit and page reload
    });
   	$( "#resumSelect" ).on( "click", "a", function( event ) {
   		consoleAlterQ('resumSelect');
   		texto=this.id;
   		pos = texto.indexOf('_');
   		temporada=texto.substring(0,pos);
   		jornada=texto.substring(pos+1);
   		consoleAlterQ("temporada_jornada="+temporada+"-"+jornada);
   		callResum(temporada,jornada);
   		event.preventDefault(); // prevent actual form submit and page reload
   	});
   	
/*	$('#companyToChoose').on('change', function() {
		window.company=this.value;
		requestUserSession.company =window.company;
		sCompany = $(this).find(":selected").text();
		window.companySelected = true;
		consoleAlterQ('vamos a repintar el menu');
		window.admin = false;
		window.superAdmin = false;
		//if company == 0 (defect company) all user are admin 
		if (window.company!= window.DEFECT_COMPANY){
			window.admin = window.rols.some(function(boy) { return hasRolCompanyValue(boy, 100, window.company); });
		}
		window.superAdmin = window.rols.some(function(boy) { return hasRolCompanyValue(boy, 1000, window.DEFECT_COMPANY); });

		consoleAlterQ("Admin:"+window.admin);
		consoleAlterQ("superAdmin:"+window.superAdmin);
		consoleAlterQ("company="+window.company);
		
		getMainMenuItems(true, $('#nameData').val());
		window.loadBetUser = true;
		consoleAlterQ("loadBetUser: TRUE");
		cleanUserBets();
	});*/
	
	$('form#detalleUserBetForm').submit(function( event ) {
		consoleAlterQ("Mybets Btn");
		getUserBets();
		showDiv(bMyBets);
		event.preventDefault(); // prevent actual form submit and page reload
	});

/*	$('form#MyCompanyForm button#MyCompany_btn').click(function() {
		 buttonpressed = $('form#MyCompanyForm button#MyCompany_btn').val();
		 consoleAlterQ("buttonpressed: "+buttonpressed);
		});
*/	
});


/*function callRanking(idUserAlterQ,company,temporada,jornada){
	//Remove table
	$('#rankingTable').find("tr").remove();
	
	jQuery.ajax ({
	    url: ctx+'/myaccount/'+ idUserAlterQ +'/'+company+'/'+temporada+'/'+jornada+'/ranking',
	    type: "GET",
	    data: null,
	    contentType: "application/json; charset=utf-8",
	    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	    cache: false,    //This will force requested pages not to be cached by the browser  
	    processData:false, //To avoid making query String instead of JSON
	    success: function(response){
		    if(response.errorDto!=0){
   		    	$(response.errorDto).each(function(index, objeto){  
   		    		consoleAlterQ("error:"+response.errorDto);
			    });
		    	$('#rankingTable').append('<tr id="rowBetTitle" class="quinielatitulo"><td colspan="4">ERROR</td></tr></tr>');       
		    }
		    else{
		    	$('#rankingTable').append('<tr id="rowBetTitle" class="quinielatitulo"><td colspan="4">Jornada '+ jornada+'</td></tr>');
			    $(response.roundRanking.rankings).each(function(index, objeto){  
			    	$('#rankingTable').append('<tr id="rowBetTitle" class="quinielatitulo"><td colspan="2" align="left">'+ objeto.user.id+'</td><td colspan="2" align="right">'+ objeto.points+'</td></tr>');
			    });
		    }
	    }
	});
}*/

function callResum(company,temporada,jornada){
	//Remove table
	$('#resumTable').find("tr").remove();
	var mygames;
	jQuery.ajax ({
	    url: ctx+'/myaccount/mail@mail.es/'+company+'/'+ temporada+'/'+jornada+'/round',
	    type: "GET",
	    data: null,
	    contentType: "application/json; charset=utf-8",
	    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
        cache: false,    //This will force requested pages not to be cached by the browser  
        processData:false, //To avoid making query String instead of JSON
	    success: function(response){
		    if(response.errorDto!=0){
   		    	$(response.errorDto).each(function(index, objeto){  
   		    		$('#temporada').append(objeto.stringError+" - ");
			    });
		    }
		    else{
		    	mygames=response.round.games;
		    }
	    }
	});

	
	jQuery.ajax ({
		url: ctx+'/myaccount/mail@mail.es/'+window.company+'/'+window.season+'/'+window.round+'/bet',
		type: "GET",
		data: null,
		contentType: "application/json; charset=utf-8",
		async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		cache: false,    //This will force requested pages not to be cached by the browser  
		processData:false, //To avoid making query String instead of JSON
		success: function(response){
			if(response.errorDto!=0){
				consoleAlterQ("error:"+response.errorDto);
				$('#resumTable').append('<tr id="rowBetTitle" class="quinielatitulo"><td colspan="4">ERROR</td></tr></tr>');       
			}
			else{
				consoleAlterQ("response:"+response);
				consoleAlterQ("response.roundBet:"+response.roundBet);
				consoleAlterQ("response.roundBet.bets:"+response.roundBet.bets);
		    	$('#resumTable').append('<tr id="rowBetTitle" class="quinielatitulo"><td colspan="4">Jornada '+ jornada+'</td></tr>');
				$(response.roundBet.bets).each(function(index, element){
					console.log("index="+index);
					console.log("user="+element.user + " bet="+element.bet);
					var row="";
					row+='<div align="center" id="apuesta'+index+'"><h3>'+getTableMatches(element.bet, mygames, "#0000ff")+'</h3></div>';
					$('#resumTable').append(row);
				});
			}
		}
	});
}

function doLogin(){
	var jqxhr =
	    $.ajax({
	        url: ctx+"/login",
 	    })
	    .success (function(response) { 
		    if(response.errorDto==0){
		    	if (response.userAlterQ!=null){
					fillUserData(response);
		    	}
		    }
		    fillRoundSeasonCompany(response);
	    });
}



function doLogout(){
	 jQuery.ajax ({
		    url: ctx+'/logout',
		    type: "GET",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
			cache: false,    //This will force requested pages not to be cached by the browser  
			processData:false, //To avoid making query String instead of JSON
		    success: function(response){
	   		    if(response.errorDto!=0){
	   		    }
	   		    else{
					window.userLoged=false;
					window.loadCompanies = false;
					getMainMenuItems(false, null);
					showDiv(bHome);
	   		    }
		    }
		});

	initializeVars();
	showDiv(bHome);
	consoleAlterQ("LogOut: userLoged="+window.userLoged);     
	
}

function consoleAlterQ(text){
	if( (window['console'] !== undefined) ){
		console.log(text);
	}

}
function openPubicCompaniesModal(company, name) {
	consoleAlterQ('openPubicCompaniesModal: company='+company+' name='+name);
	window.company=company;
	requestUserSession.company = window.company;
	sCompany = name;
	
	window.companySelected = true;
	
	consoleAlterQ('antes Show Modal');
	$(sPublicCompaniesOptionsRef).modal('show');
	
}

function openCompanyModal(company, name) {
	consoleAlterQ('openCompanyModal:  company='+company+' name='+name);
	window.company=company;
	requestUserSession.company =window.company;
	sCompany = name;
//alert("window.company="+window.company);	
	window.companySelected = true;
	consoleAlterQ('vamos a repintar el menu');
	window.admin = false;
	window.superAdmin = false;
	//if company == 0 (defect company) all user are admin 
	if (window.company != window.DEFECT_COMPANY){
		window.admin = window.rols.some(function(boy) { return hasRolCompanyValue(boy, 100, window.company); });
	}
	window.superAdmin = window.rols.some(function(boy) { return hasRolCompanyValue(boy, 1000, window.DEFECT_COMPANY); });

	consoleAlterQ("Admin:"+window.admin);
	consoleAlterQ("superAdmin:"+window.superAdmin);
	consoleAlterQ("company="+window.company);
	
	if (window.admin){
		$('#myAdminGr').show();
		$('#myDejarGr').hide();
	}
	else{
		$('#myAdminGr').hide();
		$('#myDejarGr').show();
	}
		
	//De momento no repintamos el menu
	//getMainMenuItems(true, $('#nameData').val());
	window.loadBetUser = true;
	consoleAlterQ("loadBetUser: TRUE");
	cleanUserBets();

	
	$(sMyCompanyOptionsRef).modal('show');
	
}
function getCompanies(){
	consoleAlterQ('getCompanies');
	consoleAlterQ(loadCompanies);
	
	if(window.loadCompanies)
	{
		window.loadCompanies=false;
		
		//delete combo company
//		 $("#companyToChoose option:selected").remove();
		 //$("#companyToChoose").empty();
		 //$("#companyToChoosePublic").empty();
		 $("#MisGrBtns").empty();
		 $("#PublicGrBtns").empty();
		
	   		consoleAlterQ('url:'+ctx+'/company/myaccount/'+ window.idUserAlterQ+'/');  		
			jQuery.ajax ({
				url: ctx+'/company/myaccount/'+ window.idUserAlterQ+'/',
			    type: "GET",
			    data: null,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		        cache: false,    //This will force requested pages not to be cached by the browser  
		        processData:false, //To avoid making query String instead of JSON
			    success: function(response){
				    if(response.errorDto!=0){
						consoleAlterQ('Success: no hay companies');
//						$('#companyToChoose').append('<option value="'+window.DEFECT_COMPANY+'">QuiniGold</option>');
						$('#MisGrBtns').append('<button onClick="openCompanyModal('+ window.DEFECT_COMPANY +',\'QuiniGold\')" class="btn btn-danger">QuiniGold</button><br><br>')
						
						window.loadCompanies=true;
				    }
				    else{
				    	var responseCompanyOrder = [];
				    	responseCompanyOrder = jQuery.unique($(response.company));
				    	$('#MisGrBtns').append('<br>');
				    	console.log("responseCompanyOrder.length=" + responseCompanyOrder.length);
				    	if (responseCompanyOrder.length == 0)
				    		$('#MisGrBtns').append('No hay Grupos');
						$(responseCompanyOrder).each(function(index, element){
							console.log("index="+index+"-id="+element.id + "-company="+element.company+"-nick="+element.nick);
							if (element.company!=window.DEFECT_COMPANY){
//								$('#companyToChoose').append('<option value="'+element.company+'">'+element.nick+'</option>');
//								$('#MisGrBtns').append('<button data-toggle="modal" data-target="#myCompanyOptions" id="MyCompany_btn" class="btn btn-danger" name="submitBtn" value="'+element.company+'">'+element.nick+'</button><br><br>')
								$('#MisGrBtns').append('<button onClick="openCompanyModal('+ element.company +',\'' + element.nick + '\')" class="btn btn-danger">'+element.nick+'</button><br><br>')
							}
							
						});
				    }
			    },
			    error : function (xhr, textStatus, errorThrown) {
					consoleAlterQ('Error: no hay companies');
//					$('#companyToChoose').append('<option value="'+window.DEFECT_COMPANY+'">QuiniGold</option>');
					$('#MisGrBtns').append('<button onClick="openCompanyModal('+ window.DEFECT_COMPANY +',\'QuiniGold\')" class="btn btn-danger">QuiniGold</button><br><br>')
					window.loadCompanies=true;
	            }
		 });
			
	   		consoleAlterQ('url:'+ctx+'/company/myaccount/'+ window.idUserAlterQ+'/public');  		
			jQuery.ajax ({
//				url: ctx+'/company/public',
				url: ctx+'/company/myaccount/'+ window.idUserAlterQ+'/public',
			    type: "GET",
			    data: null,
			    contentType: "application/json; charset=utf-8",
			    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
		        cache: false,    //This will force requested pages not to be cached by the browser  
		        processData:false, //To avoid making query String instead of JSON
			    success: function(response){
				    if(response.errorDto!=0){
						consoleAlterQ('Success: no hay companies');
//						$('#companyToChoosePublic').append('<option value="'+window.DEFECT_COMPANY+'">QuiniGold</option>');
						$('#PublicGrBtns').append('<button onClick="openPubicCompaniesModal('+ window.DEFECT_COMPANY +',\'QuiniGold\')" class="btn btn-danger">QuiniGold</button><br><br>')
						window.loadCompanies=true;
				    }
				    else{
				    	var responseCompanyOrder = [];
				    	responseCompanyOrder = jQuery.unique($(response.company));
				    	$('#PublicGrBtns').append('<br>');
				    	if (responseCompanyOrder.length == 0)
				    		$('#PublicGrBtns').append('No hay Grupos<br><br>');
						$(responseCompanyOrder).each(function(index, element){
							console.log("index="+index+"-id="+element.id + "-company="+element.company+"-nick="+element.nick);
							if (element.company!=window.DEFECT_COMPANY){
//								$('#companyToChoosePublic').append('<option value="'+element.company+'">'+element.nick+'</option>');
								$('#PublicGrBtns').append('<button onClick="openPubicCompaniesModal('+ element.company +',\'' + element.nick + '\')" class="btn btn-danger">'+element.nick+'</button><br><br>');
							}
						});
				    }
			    },
			    error : function (xhr, textStatus, errorThrown) {
					consoleAlterQ('Error: no hay companies');
					//$('#companyToChoosePublic').append('<option value="'+window.DEFECT_COMPANY+'">QuiniGold</option>');
					$('#PublicGrBtns').append('<button onClick="openPubicCompaniesModal('+ window.DEFECT_COMPANY +',\'QuiniGold\')" class="btn btn-danger">QuiniGold</button><br><br>')
					
					window.loadCompanies=true;
	            }
		 });
			
	}
}
function cleanUserBets(){
	consoleAlterQ('cleanUserBets');
	$('#apuestasTable').empty();
	scompany='';
}
function getUserBets(){
	consoleAlterQ('getUserBets');
	consoleAlterQ('loadBetUser='+window.loadBetUser);
	
	//De momento va a piñon pq no funcionan las variables globales
	window.loadBetUser = true;
	
	if(window.loadBetUser){
		window.loadBetUser=false;
		consoleAlterQ("loadBetUser: FALSE");
		var row="";
		
		cleanUserBets();
		
   		consoleAlterQ('antes jQuery.ajax - idUserAlterQ='+idUserAlterQ+' company='+window.company+' season='+window.season+' round='+window.round);
   		
   		consoleAlterQ('url:'+ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/'+ window.season+'/'+window.round+'/bet');  		
		jQuery.ajax ({
			url: ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/'+ window.season+'/'+window.round+'/bet',
		    type: "GET",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	        cache: false,    //This will force requested pages not to be cached by the browser  
	        processData:false, //To avoid making query String instead of JSON
		    success: function(response){
			    if(response.errorDto!=0){
					row="";
			    	row+='<tr align="center">';
			    	row+='<td>MIS APUESTAS</td>';
			    	row+='</tr>';
			        row+='<tr align="center">';
					row+='<td><br><br>SIN APUESTAS<br><br></td>';
					row+='</tr>';
					$('#apuestasTable').append(row);
			    }
			    else{
			    	if (response.roundBet == null)
			    	{
						row="";
				    	row+='<tr align="center">';
				    	row+='<td>MIS APUESTAS</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
				    	row+='<td>['+((sCompany == '')?sCompanyDefault:sCompany)+']</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
						row+='<td><br><br>SIN APUESTAS<br><br></td>';
						row+='</tr>';
						$('#apuestasTable').append(row);
			    	}
			    	else
			    	{
				    	row+='<tr align="center">';
				    	row+='<td colspan="2">MIS APUESTAS</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
				    	row+='<td>['+((sCompany == '')?sCompanyDefault:sCompany)+']</td>';
				    	row+='</tr>';
						$('#apuestasTable').append(row);
						$(response.roundBet.bets).each(function(index, element){
							console.log("index="+index);
							console.log("user="+element.user + " bet="+element.bet);
							row="";
							
							if (element.type == BetTypeEnum.BET_FINAL)
								row+='<tr bgcolor="#FFFFBB">';
							else
								row+='<tr>';
					    	row+='<td>';
					    	row+='<a href="javascript:betDetail('+index+',\''+element.bet+'\')" >';
					    	row+='Apuesta'+(((index+1)<10)?'0':'')+(index+1)+' Jornada'+response.roundBet.round+ ' '+parseFloat(element.price).toFixed(2) + ' EUR';
					    	row+='</a>';
					    	row+='</td>';
					    	row+='</tr>';
							$('#apuestasTable').append(row);
						});
			    	}
			    }
		    },
		    error : function (xhr, textStatus, errorThrown) {
				var row="";
		    	row+='<tr align="center>';
		    	row+='<td>MIS APUESTAS</td>';
		    	row+='</tr>';
		    	row+='<tr align="center">';
		    	row+='<td>('+sCompany+')<br><br></td>';
		    	row+='</tr>';
		        row+='<tr>';
				row+='<td><br><br>ERROR AL OBTENER</td>';
				row+='</tr>';
		        row+='<tr>';
				row+='<td>LAS APUESTAS<br><br></td>';
				row+='</tr>';
				$('#apuestasTable').append(row);
            }
		});
		
		consoleAlterQ('despues jQuery.ajax');
		

	//call to get automatic bets
		$('#betsAutomResponse').text("Introduce las apuestas automaticas y pulsa Modificar.");
		consoleAlterQ('antes jQuery.ajax 2 - idUserAlterQ='+idUserAlterQ+' company='+window.company);
		$('#companyAutoBets').val("0");
		consoleAlterQ('url:'+ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/automaticBets');  		
		jQuery.ajax ({
			url: ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/automaticBets',
		    type: "GET",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	        cache: false,    //This will force requested pages not to be cached by the browser  
	        processData:false, //To avoid making query String instead of JSON
		    success: function(response){
			    if(response.errorDto!=0){
			    	$('#companyAutoBets').val("0");
			    	consoleAlterQ('response.errorDto!=0');
			    }
			    else{
			    	if (response.userAlterQ == null)
			    	{
			    		$('#companyAutoBets').val("0");
			    		consoleAlterQ('response.userAlterQ == null');
			    	}
			    	else
			    	{
	
						$(response.userAlterQ.specialBets).each(function(index, element){
							console.log("index="+index);
							console.log("numBets="+element.numBets);
							if (element.company == window.company)
								$('#companyAutoBets').val(element.numBets);
						});
			    	}
			    }
		    },
		    error : function (xhr, textStatus, errorThrown) {
		    	$('#companyAutoBets').val("0");
		    	consoleAlterQ('error');
	        }
		});
	
		consoleAlterQ('despues jQuery.ajax 2');
	
	
		showDiv(bMyBets);
	}	
}

function updateAutomaticBets(){
	consoleAlterQ('updateAutomaticBets');
	consoleAlterQ('loadBetUser='+window.loadBetUser);
	
	//De momento va a piñon pq no funcionan las variables globales
	window.loadBetUser = true;
	
	if(window.loadBetUser){
		window.loadBetUser=false;
		consoleAlterQ("loadBetUser: FALSE");
		var row="";
		
   		//call to update automatic bets
		consoleAlterQ('antes jQuery.ajax - idUserAlterQ='+idUserAlterQ+' company='+window.company +' numBets='+$('#companyAutoBets').val());

		consoleAlterQ('url:'+ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/automaticBets/'+$('#companyAutoBets').val());  		
		jQuery.ajax ({
			url: ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/automaticBets/'+$('#companyAutoBets').val(),
		    type: "POST",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	        cache: false,    //This will force requested pages not to be cached by the browser  
	        processData:false, //To avoid making query String instead of JSON
		    success: function(response){
			    if(response.errorDto!=0){
			    	consoleAlterQ('response.errorDto!=0');
			    	$('#betsAutomResponse').text("ERROR AL ACTUALIZAR LAS APUESTAS AUTOMATICAS. INTENTALO MAS TARDE");
			    }
			    else{
			    	consoleAlterQ('response.errorDto==0');
			    	$('#betsAutomResponse').text("LAS APUESTAS AUTOMATICAS SE HAN ACTUALIZADO CON EXITO.");

			    }
		    },
		    error : function (xhr, textStatus, errorThrown) {
		    	consoleAlterQ('error');
		    	$('#betsAutomResponse').text("ERROR AL ACTUALIZAR LAS APUESTAS AUTOMATICAS. INTENTALO MAS TARDE.");
	        }
		});
	
		consoleAlterQ('despues jQuery.ajax');
	
	}	
}

function getCompanyRanking(round){
	consoleAlterQ('getCompanyRanking');
	consoleAlterQ('loadBetUser='+window.loadBetUser);
	
	//De momento va a piñon pq no funcionan las variables globales
	window.loadBetUser = true;
	
	if(window.loadBetUser){
		window.loadBetUser=false;
		consoleAlterQ("loadBetUser: FALSE");
		var row="";
	
		cleanCompanyRanking();
		
		row="";
    	row+='<tr align="center">';
    	row+='<td>RANKING</td>';
    	row+='</tr>';
        row+='<tr align="center">';
		row+='<td>';
		row+='<div class="dropdown">';
		row+='<button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown">Selecciona Jornada';
		row+='<span class="caret"></span></button>';
		row+='<ul id="rankingSelect" class="dropdown-menu scrollable-menu" role="menu">';
		row+='<li><a id='+window.season+'_0'+' href=\'#\'>Global</a></li>';
		row+='<li class="divider"></li>';
		var num=1;
		for ( num = 1; num < window.round + 1; num++) {
			row+='<li><a id='+window.season+"_"+num+' href=\'#\'>Jornada '+num+'</a></li>';
		}
		row+='</ul>';
		row+='</div>';		
		row+='</td>';
		row+='</tr>';
    	row+='<tr align="center">';
    	row+='<td>&nbsp</td>';
    	row+='</tr>';
		$('#rankingSelectTable').append(row);
		row="";
		
		///myaccount/{id:.+}/{company}/{season}/{round}/ranking
   		consoleAlterQ('antes jQuery.ajax - idUserAlterQ='+idUserAlterQ+' company='+window.company+' season='+window.season+' round='+round);
   		
   		consoleAlterQ('url:'+ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/'+ window.season+'/'+round+'/ranking');  		
		jQuery.ajax ({
			url: ctx+'/myaccount/'+ window.idUserAlterQ+'/'+window.company+'/'+ window.season+'/'+round+'/ranking',
		    type: "GET",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
	        cache: false,    //This will force requested pages not to be cached by the browser  
	        processData:false, //To avoid making query String instead of JSON
		    success: function(response){
			    if(response.errorDto!=0){
					row="";
			        row+='<tr align="center">';
					row+='<td><br><br>SIN DATOS<br><br></td>';
					row+='</tr>';
					$('#rankingTable').append(row);
			    }
			    else{
			    	if (response.roundRanking == null)
			    	{
						row="";
				    	row+='<tr align="center">';
				    	row+='<td>'+((sCompany == '')?sCompanyDefault:sCompany)+'</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
						row+='<td><br><br>SIN DATOS<br><br></td>';
						row+='</tr>';
						$('#rankingTable').append(row);
			    	}
			    	else
			    	{
				    	row+='<tr align="center">';
				    	row+='<td colspan="3">'+' '+((response.roundRanking.round==0)?'(Global) ':'Jornada '+response.roundRanking.round)+'</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
				    	row+='<td colspan="3">'+'Temp. '+response.roundRanking.season+'/'+(response.roundRanking.season -2000 +1)+'</td>';
				    	row+='</tr>';
				    	row+='<tr align="center">';
				    	row+='<td colspan="3">['+((sCompany == '')?sCompanyDefault:sCompany)+']</td>';
				    	row+='</tr>';
						row+='<tr>';
				    	row+='<td width="50">';
				    	row+='POS';
				    	row+='</td>';
				    	row+='<td width="50">';
				    	row+=' NOMBRE ';
				    	row+='</td>';
				    	row+='<td width="50">';
				    	row+=' PUNTOS ';
				    	row+='</td>';
				    	row+='</tr>';
						row+='<tr>';
				    	row+='<td width="50">';
				    	row+='---';
				    	row+='</td>';
				    	row+='<td width="50">';
				    	row+=' ------ ';
				    	row+='</td>';
				    	row+='<td width="50">';
				    	row+=' ------ ';
				    	row+='</td>';
				    	row+='</tr>';

						$('#rankingTable').append(row);
						$(response.roundRanking.rankings).each(function(index, element){
							console.log("index="+index);
							console.log("user="+element.user + " bet="+element.nick + " points="+element.points);
							row="";
							
//							if (element.type == CONST_TYPE_BET_FINAL)
//								row+='<tr bgcolor="#FFFFBB">';
//							else
//								row+='<tr>';
							row+='<tr>';
					    	row+='<td>';
					    	row+=''+(((index+1)<10)?'0':'')+(index+1);
					    	row+='</td>';
					    	row+='<td>';
					    	row+=''+element.nick;
					    	row+='</td>';
					    	row+='<td align="center">';
					    	row+=''+ element.points;
					    	row+='</td>';
					    	row+='</tr>';
							$('#rankingTable').append(row);
						});
			    	}
			    }
		    },
		    error : function (xhr, textStatus, errorThrown) {
				var row="";
		    	row+='<tr align="center">';
		    	row+='<td>('+sCompany+')<br><br></td>';
		    	row+='</tr>';
		        row+='<tr>';
				row+='<td><br><br>ERROR AL OBTENER</td>';
				row+='</tr>';
		        row+='<tr>';
				row+='<td>EL RANKING<br><br></td>';
				row+='</tr>';
				$('#rankingTable').append(row);
            }
	 });
	consoleAlterQ('despues jQuery.ajax');
	showDiv(bMyRank);
	}	
}
function cleanCompanyRanking(){
	consoleAlterQ('cleanCompanyRanking');
	$('#rankingTable').empty();
	$('#rankingSelectTable').empty();

}
function betDetail(index, bet)
{
	var row="";
	var mygames;
	
	consoleAlterQ('antes jQuery.ajax mygames');
	consoleAlterQ('url:'+ctx+'/myaccount/mail@mail.es/'+window.company+'/'+ window.season+'/'+window.round+'/round');
	
	$('#quinielaDetailTable').empty();
    jQuery.ajax ({
		    url: ctx+'/myaccount/mail@mail.es/'+window.company+'/'+ window.season+'/'+window.round+'/round',
		    type: "GET",
		    data: null,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
            cache: false,    //This will force requested pages not to be cached by the browser  
            processData:false, //To avoid making query String instead of JSON
		    success: function(response2){
	   		    if(response2.errorDto!=0){
	   		    	$(response2.errorDto).each(function(index, objeto){  
	   		    		consoleAlterQ("getUserBets: response="+objeto.stringError);
				    });
	   		    }
	   		    else{
	   		    	consoleAlterQ("getUserBets: response OK");
	   		    	mygames=response2.round.games;
	   		    	consoleAlterQ("mygames="+mygames);
	   		    }
		    },
		    error : function (xhr, textStatus, errorThrown) {
		    	var indicators="";
		    	indicators+='<ol  class="carousel-indicators">';
		        indicators+='<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
		        indicators+='</ol>';   
		        $('#myIndicators').append(indicators);
		    	
				var row="";
		    	row+='<tr class="quinielatitulo">';
		    	row+='<td colspan="2">My Bets</td>';
		    	row+='</tr>';
		        row+='<tr class="quiniela">';
				row+='<td class="partidoLast"><h3>ERROR AL OBTENER</h3><h3>LOS PARTIDOS</h3></td>';
				row+='</tr>';
				$('#quinielaDetailTable').append(row);
		    }
		    
	});
    consoleAlterQ('despues jQuery.ajax mygames');
    row+='<tr>';
    row+='<td>';
    row+='<article>';
    row+='<header>';
    row+='<div align="center"><p> APUESTA '+ (index+1) +'</p></div>';
	row+='<div align="center" id="apuesta'+index+'"><h3>'+getTableMatches(bet.toString(), mygames, "#0000ff")+'</h3></div>';
	row+='</header>';
	row+='</article>';
    row+='</td>';
    row+='</tr>';
	$('#quinielaDetailTable').append(row);
	row='<tr align="center"><td><button id="detalleUserBetBtn" class="btn btn-danger" name="detalleUserBet" value="detalleUserBet">Mis Apuestas</button></td></tr>';
	$('#quinielaDetailTable').append(row);

	showDiv(bQuinielaDetail);
}

function callToMyAdminCompany(){
	var dataJson=JSON.stringify(requestUserSession);
	
	 consoleAlterQ('callToMyAdminCompany:'+dataJson);

	 var form = $(document.createElement('form'));
	 $(form).attr("action", ctx+'/adminCompany');
	 $(form).attr("method", "POST");

	 var inputCompany = $("<input>")
	     .attr("type", "hidden")
	     .attr("name", "company")
	     .val(requestUserSession.company );
	 var inputIdUserAlterQ = $("<input>")
		 .attr("type", "hidden")
		 .attr("name", "idUserAlterQ")
		 .val(requestUserSession.idUserAlterQ );
	 var inputRound = $("<input>")
		 .attr("type", "hidden")
		 .attr("name", "round")
		 .val(requestUserSession.round );
	 var inputSeason = $("<input>")
		 .attr("type", "hidden")
		 .attr("name", "season")
		 .val(requestUserSession.season);


	 $(form).append($(inputCompany));
	 $(form).append($(inputIdUserAlterQ));
	 $(form).append($(inputRound));
	 $(form).append($(inputSeason));

	 form.appendTo( document.body );

	 $(form).submit();
	
	/*
	 $.post(ctx+'/adminCompany', {"json":dataJson}, function(){
		  alert("done!");
		});
	*/
	
	/* 
	 $.ajax
	    ({
	        type: "POST",
	        //the url where you want to sent the userName and password to
	        url: ctx+'/adminCompany',
	        dataType: 'json',
	        //json object to sent to the authentication url
	        data: dataJson,
	        headers: { 
	        	'Accept': 'application/json',
	        	'Content-Type': 'application/json' 
	        	},
	    })	
	  */  
/*
	 jQuery.ajax ({
		 //CompanyController.createCompany()
		    url: '/quinimobile/adminCompany',
		    type: "POST",
		    data: dataJson,
		    contentType: "application/json; charset=utf-8",
		    async: false,    //Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation
            cache: false,    //This will force requested pages not to be cached by the browser  
            processData:false, //To avoid making query String instead of JSON
		    success: function(response){
		    	consoleAlterQ('responseCallToMyAdminCompany');
		    }
		});
*/	
}


