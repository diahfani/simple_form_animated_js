function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check for validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm)
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm)
            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            //get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log("not enough characters");
        notice("rgb(180, 200, 234)");
    } else {
        notice("rgb(247, 202, 201)")
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        notice("rgb(247, 202, 201)");
        return true;
    } else {
        notice("rgb(180, 200, 234)");
        console.log("wrong email format");
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function notice(color) {
    document.body.style.backgroundColor = color;
}


animatedForm();