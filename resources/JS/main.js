if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
		document.getElementById("modalOpen").setAttribute("data-bs-target","#fetchCreateGroupModal");
		document.getElementById("modalOpen").setAttribute("data-bs-toggle","modal");
		document.getElementById("cardBody").innerHTML = "";
		this.navbarShrink();
		this.navigation();
		
   	 }
	
	this.navbarShrink = function(){
		console.log("nav bar shrink");
		const navbarCollapsible = document.body.querySelector('#mainNav');
        	if (!navbarCollapsible) {
            	return;
        	}
        	if (window.scrollY === 0) {
            	navbarCollapsible.classList.remove('navbar-shrink');
        	} else {
			 	navbarCollapsible.classList.add('navbar-shrink');
		}
	}
		
	this.navigation = function(){
		
		// Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 72,
            });
        };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
		
	}
	
	createGroupFormValidation = function(){
		// Sample request payload construction -- Starts
		let form = document.getElementById("createGroupForm").getElementsByTagName("input"),
		form_validator_check = {
            inputGroupName: {
                verify: ["nullCheck"],
                message: ["Please enter the group name"]
            },
            inputGroupType: {
                verify: ["nullCheck"],
                message: ["Please enter the first name"]
            }
        };
		// Sample request payload construction -- Ends
		
		// Sample function call -- Starts
		let mainRt = new MainRoute();
		console.log(mainRt.getRouteName());
		if(mainRt.validateForm(form,form_validator_check)){
            console.log("validation success");
			let reqPayload = {"createGroupRequest":{
				"groupName":form[0].value,
				"groupType":form[1].value,
				"groupMembers":[{"accountName":"SSSSSSS","memberAccountNumber":"31312312"},{"accountName":"PPPPPPPPPPPPPP","memberAccountNumber":"23423423432"}],
	    			"creatorAccountNumber":"892749724797"
			}};
			groupCreation(reqPayload)
		}else{
			console.log("validation fail");
		}
		// Sample function call -- Ends
	}
	
	async function groupCreation(reqPayload){
		let mainRt = new MainRoute();
		const creationGroupRes = await mainRt.createGroupRoute(reqPayload);
           	console.log(creationGroupRes);
		if(creationGroupRes.hasOwnProperty("ResponseHeader")){ 
			if(creationGroupRes.ResponseHeader.ResponseCode === "0"){ 
				console.log("Show Success ");
				createFetchGroupModal();
			} else {  
				console.log("Show Error ");
			}
		} else { 
			console.log("No Reponse or error occurred"); 
		}
		
	}
	
 	createFetchGroupModal = function(){
		let tempGroupForm = document.getElementById("createGroupForm");
		if (tempGroupForm.style.display === "block") {
 			tempGroupForm.style.display = "none";
  		}
		let cardBodyData = document.getElementById("cardBody");
		if(cardBodyData.innerHTML != ""){
			cardBodyData.innerHTML = "";
		}
		let reqPayload = {"fetchGroupsRequest":{
	
			"creatorAccountNumber":"892749724797"
		}}
		createFetchGroup(reqPayload);
		
	}
	
	async function createFetchGroup(reqPayload){
		let mainRt = new MainRoute();
		const fetchGroupRes = await mainRt.fetchGroupRoute(reqPayload);
		if(fetchGroupRes.ResponseHeader.ResponseCode === "0"){
			let tempRes = fetchGroupRes.fetchGroupsResponse.groups; 
			tempRes.map((ele, index) => { 
				let tempDiv = "<div class='d-flex align-items-center justify-content-between mb-4 cardTile' onClick='fetchIndiGroupBills(this)' sequnce='"+index+"' groupId='"+ele.groupId+"' ><div class='d-flex align-items-center flex-shrink-0 me-3'>    <div class='avatar avatar-xl me-3 bg-gray-200'><img class='avatar-img img-fluid' src='' alt=''></div><div class='d-flex flex-column fw-bold'><a class='text-dark line-height-normal mb-1' href='#!'>"+ele.groupName+"</a><div class='small text-muted line-height-normal'>"+ele.groupType+"</div><div class='small text-muted line-height-normal'>"+ele.createdDt+"</div></div></div></div>";
				document.getElementById("cardBody").innerHTML+=tempDiv;
				console.log(ele[index]); 
			});
		} else {
			console.log("No data found");
		}
	
	}
	
	createGroupForm = function(){
		document.getElementById("cardBody").innerHTML = "";
		resetGroupForm();
	}
	
	function resetGroupForm(){
		let tempGroupForm = document.getElementById("createGroupForm");
		if (tempGroupForm.style.display === "block") {
    		tempGroupForm.style.display = "none";
  		} else {
			tempGroupForm.style.display = "block";
		}
	}
	
	fetchIndiGroupBills = function(self){
		let seq = self.getAttribute("sequnce"),
		groupId=self.getAttribute("groupId");		
		fetchIndividualGroupBills(seq,groupId);	
	}
	
	async function fetchIndividualGroupBills(...args){
		let mainRt = new MainRoute();
		// call the individual group bills service
		
	}
	
	startMyGame = function(){
		let mainRt = new MainRoute();
		mainRt.gamePlay("timer", 180);
		let tempPlayGroundId = document.getElementById("playGround");
		if (tempPlayGroundId.style.display === "none") {
    		tempPlayGroundId.style.display = "block";
  		} else {
			tempPlayGroundId.style.display = "none";
		}
	}
	async function toDoFetchGroup(reqPayload){
		let mainRt = new MainRoute();
		const toDoFetchGroup = await mainRt.fetchToDoRoute(reqPayload);
		console.log("toDo fetch final response :: "+toDoFetchGroup.toString());
	
	}

	async function toDoAddGroup(reqPayload){
		let mainRt = new MainRoute();
		const toDoAddGroup = await mainRt.addToDoRoute(reqPayload);
		console.log("toDo  add final response :: "+toDoAddGroup.toString());
	
	}
	
	createGroupForm = function(){
		document.getElementById("cardBody").innerHTML = "";
		resetGroupForm();
	}

	contactFormValidation = function(){
		console.log("contact me execution started");
		let form = document.getElementById("contactForm").getElementsByTagName("input"),
		form_validator_check = {
            		inputName: {
               			verify: ["nullCheck"],
                		message: ["Please enter the name"]
            		},
            		inputEmail: {
                		verify: ["email"],
                		message: ["Please enter the email"]
            		},
            		inputPhone: {
                		verify: ["number"],
                		message: ["Please enter the phone number"]
            		}
        	};
		let mainRt = new MainRoute();
		if(mainRt.validateForm(form,form_validator_check)){
			let reqPayload = {"contactMeRequest":{
	
				"name":form[0].value,
				"email":form[1].value,
				"phoneNumber":form[2].value,
				"message":document.getElementById("contactForm").getElementsByTagName("input").value
			}}
			const fetchGroupRes = mainRt.contactMe(reqPayload);
		}
		
		
		console.log("contact me execution finished");
	}
}

bootStrapJS = SMB.bootStrapJSOps

