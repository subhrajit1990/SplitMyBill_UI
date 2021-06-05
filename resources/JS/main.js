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
	
	formValidation = function(){
		// Sample request payload construction -- Starts
		var form = document.getElementById("splitMyBillModal").getElementsByTagName("input"),
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
		var mainRt = new MainRoute();
		console.log(mainRt.getRouteName());
		if(mainRt.validateForm(form,form_validator_check)){
            console.log("validation success");
			var reqPayload = {"createGroupRequest":{
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
		var mainRt = new MainRoute();
		const creationGroupRes = await mainRt.createGroupRoute(reqPayload);
           	console.log(creationGroupRes);
		
	}
}

bootStrapJS = SMB.bootStrapJSOps
