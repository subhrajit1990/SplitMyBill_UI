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
		var form = document.getElementsByClassName("inputType"),
		form_validator_check = {
            		lastname: {
                		verify: ["nullCheck","lastname"],
                		message: ["Please enter the last name","Please enter 4 digits last name"]
            		},
            		firstname: {
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
			mainRt.createGroupRoute();
		}else{
			console.log("validation fail");
		}
		// Sample function call -- Ends
	}
}

bootStrapJS = SMB.bootStrapJSOps
