const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const currentAnswer = question.nextElementSibling;
        const currentIcon = question.querySelector(".faq-icon");
        const isOpen = currentAnswer.style.maxHeight;

        // Close every FAQ
        questions.forEach(q => {

            q.nextElementSibling.style.maxHeight = null;

            q.querySelector(".faq-icon").classList.remove("rotate");

        });

        // If it wasn't already open, reopen it
        if (!isOpen) {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

            currentIcon.classList.add("rotate");

        }

    });

});