
			const contactForm=document.querySelector('.contact form');
			
			if (contactForm) {
				contactForm.addEventListener('submit', (e) => {
					e.preventDefault();
					
				const customerName = contactForm.querySelector('input[placeholder = "name"]').value;
				const customerEmail = contactForm.querySelector('input[placeholder = "email"]').value;
				const customerNumber = contactForm.querySelector('input[placeholder = "number"]').value;
				const customerMessage = contactForm.querySelector('textarea[placeholder = "message"]').value;
				
					
					alert('Your order has been placed  successfully!');
					
					const billSummary = `Name: ${customerName}
											email: ${customerEmail}
											number: ${customerNumber}
											message: ${customerMessage}` ;
											
									alert(billSummary);
									
									
					
					contactForm.reset();
				});
			}