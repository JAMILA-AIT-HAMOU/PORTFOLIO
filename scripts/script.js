
/*Smooth Scroll & Scroll Animations. */

document.addEventListener("DOMContentLoaded", function () {
  const hiddenSections = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      { threshold: 0.2 }
  );

  hiddenSections.forEach((section) => {
      observer.observe(section);
  });
});


/*contact form with interactive validation */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageInput = form.querySelector("textarea[name='message']");
    const submitButton = form.querySelector("input[type='submit']");
    const successMessage = document.getElementById("success-message");

    if (messageInput) {
        // Wrap textarea in a div for better positioning
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative"; // Relative positioning for absolute elements inside
        wrapper.style.display = "inline-block"; // Keep it the same size as the textarea
        wrapper.style.width = "100%"; // Match textarea width

        messageInput.parentNode.insertBefore(wrapper, messageInput);
        wrapper.appendChild(messageInput);

        // Create character counter
        const messageCounter = document.createElement("span");
        messageCounter.textContent = "0";
        messageCounter.style.position = "absolute";
        messageCounter.style.bottom = "8px"; // Adjust position inside textarea
        messageCounter.style.right = "15px";
        messageCounter.style.bottom = "22px";
        messageCounter.style.fontSize = "12px";
        messageCounter.style.color = "#888";
        messageCounter.style.pointerEvents = "none"; // Prevent interaction
        wrapper.appendChild(messageCounter);

        // Update character count on input
        messageInput.addEventListener("input", function () {
            messageCounter.textContent = `${messageInput.value.length}`;
        });
    }

    // Spinner for loading effect
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.style.display = "none";
    submitButton.parentElement.appendChild(spinner);

    // Form validation and submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
    
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                alert(input.name + " is required!");
            }
        });
    
        if (isValid) {
            // Show spinner, hide success message initially
            spinner.style.display = "inline-block";
            successMessage.style.display = "none";
    
            setTimeout(function () {
                // Hide spinner, show success message
                spinner.style.display = "none";
                successMessage.style.display = "block";
    
                // Hide success message after 3 seconds
                setTimeout(function () {
                    successMessage.style.opacity = "1"; // Ensure visibility
                    successMessage.style.transition = "opacity 0.5s ease-out";
                    successMessage.style.opacity = "0"; // Fade out effect
    
                    setTimeout(() => {
                        successMessage.style.display = "none"; // Hide completely
                    }, 500); // Wait for fade out transition to complete
                }, 3000);
    
                // Reset form and counter
                form.reset();
                messageCounter.textContent = "0 characters";
    
            }, 2000); // Simulated 2-second loading time
        }
    });
    
});

//disable the submit button 
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("input[type='submit']");

    // Disable submit button initially
    submitButton.disabled = true;

    // Validation function
    function validateForm() {
        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        submitButton.disabled = !isValid; // Enable/Disable button
    }

    // Run validation on input change
    inputs.forEach((input) => {
        input.addEventListener("input", validateForm);
    });

    // Ensure button is disabled if form is reset
    form.addEventListener("reset", () => {
        submitButton.disabled = true;
    });
});

//Auto-Save Draft 

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input:not([type='submit']), textarea"); // Exclude submit button
    const submitButton = form.querySelector("input[type='submit']");
    const successMessage = document.getElementById("success-message");

    // ✅ Load saved values from localStorage
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`draft-${input.id}`);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    // ✅ Save each input's value separately on change
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            localStorage.setItem(`draft-${input.id}`, input.value);
        });
    });

    // ✅ Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Disable button temporarily
        submitButton.disabled = true;
        submitButton.value = "Sending...";

        setTimeout(() => {
            // ✅ Clear saved draft after submitting
            inputs.forEach(input => {
                localStorage.removeItem(`draft-${input.id}`);
                input.value = ""; // Clear input fields
            });

            // ✅ Reset button & show success message
            submitButton.disabled = false;
            submitButton.value = "Send Message";
            successMessage.style.display = "block";

            // ✅ Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        }, 2000); // Simulated delay to show "Sending..."
    });
});
//Real Time Validation
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("Phone");

    function createValidationIcon(input) {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "inline-block";
        wrapper.style.width = "100%";

        const icon = document.createElement("span");
        icon.style.position = "absolute";
        icon.style.right = "10px";
        icon.style.top = "50%";
        icon.style.transform = "translateY(-50%)";
        icon.style.fontSize = "18px";
        icon.style.color = "transparent"; // Initially hidden

        input.style.paddingRight = "35px"; // Creates space for the checkmark
        input.parentElement.replaceChild(wrapper, input);
        wrapper.appendChild(input);
        wrapper.appendChild(icon);

        return icon;
    }

    const emailIcon = createValidationIcon(emailInput);
    const phoneIcon = createValidationIcon(phoneInput);

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailInput.value)) {
            emailIcon.textContent = "✅";
            emailIcon.style.color = "green";
        } else {
            emailIcon.textContent = "❌";
            emailIcon.style.color = "red";
        }
    }

    function validatePhone() {
        const phonePattern = /^\d{8,15}$/; // Accepts 8-15 digits
        if (phonePattern.test(phoneInput.value)) {
            phoneIcon.textContent = "✅";
            phoneIcon.style.color = "green";
        } else {
            phoneIcon.textContent = "❌";
            phoneIcon.style.color = "red";
        }
    }

    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);
});

// Smooth scroll to the message
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Your form validation logic here...
    
    // Show success message
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Smooth scroll to the message
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Optional: Hide message after a few seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);
});


//handle the form submission and display a success message

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                successMessage.textContent = "Message sent successfully!";
                successMessage.style.display = "block";
                form.reset();
                setTimeout(() => successMessage.style.display = "none", 3000);
            } else {
                successMessage.textContent = "Oops! Something went wrong.";
                successMessage.style.color = "red";
                successMessage.style.display = "block";
            }
        } catch (error) {
            successMessage.textContent = "Failed to send message.";
            successMessage.style.color = "red";
            successMessage.style.display = "block";
        }
    });
});

// Adding thecertification section
const certificationDetaills=[
    {
        imgSrc:"IMG/certification/Responsive..cert.png",
        altText:"Responsive Web Design Certification",
        link:"https://www.freecodecamp.org/certification/JAMILAAITHAMOU/responsive-web-design",
        buttonText:"View Certification",
    },
    {
        imgSrc:"IMG/certification/JavaScript...cert.png",
        altText:"JavaScript Certification",
        link:"https://www.freecodecamp.org/certification/JAMILAAITHAMOU/javascript-algorithms-and-data-structures-v8",
        buttonText:"View Certification",
    },
    {
        imgSrc:"IMG/certification/comming soon.png",
        altText:"Comming Soon",
        link:"",
        buttonText:"Comming Soon"
    }
]

    //Inject  certification HTML
    let certificationsHTML=`
    <div id="certification">
        <div id="multi-certification">
        
    `;

    certificationDetaills.forEach(cert =>{
        certificationsHTML+=`
            <div class="certification-container">
                <img src="${cert.imgSrc}" alt="${cert.altText}">
                <button><a href="${cert.link}"></a>${cert.buttonText}</button>
            </div>
          `;
    });

    certificationsHTML+=`
        </div>
    </div>
    `;

    document.querySelector("#certifications").innerHTML+= certificationsHTML

    //certification animation
    const certifications=document.querySelectorAll(".certification-container");

    let currentIndex=0;
    const updateCertification=()=>{
        const total=certifications.length;
        certifications.forEach((cert, index)=>{
            cert.classList.remove("center", "left", "right");

        });

        const centerPosition=certifications[currentIndex];
        const leftPosition=certifications[(currentIndex - 1 + total) % total];
        const rightPosition=certifications[(currentIndex + 1) % total]

        centerPosition.classList.add("center"); 
        leftPosition.classList.add("left"); 
        rightPosition.classList.add("right");  
        
        currentIndex=(currentIndex +1) %total;
    }

    updateCertification();
    setInterval(updateCertification, 3150)