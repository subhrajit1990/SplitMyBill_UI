if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
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
		let form = document.getElementById("splitMyBillModal").getElementsByTagName("input"),
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
				console.log("Show Success ")
			} else {  
				console.log("Show Error ") 
			}
		} else { 
			console.log("No Reponse or error occurred"); 
		}
		
	}
	
 	modalOpen = function(){
		
		let reqPayload = {"fetchGroupsRequest":{
	
			"creatorAccountNumber":"892749724797"
}		}
		
		let mainRt = new MainRoute();
		const creationGroupRes = await mainRt.fetchGroupRoute(reqPayload);
		
		document.getElementById("modalOpen").setAttribute("data-bs-target","#portfolioModal2");
		document.getElementById("modalOpen").setAttribute("data-bs-toggle","modal");
	}
}

bootStrapJS = SMB.bootStrapJSOps
