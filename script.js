document.querySelectorAll(".accordion-header").forEach(header =>
    {
        header.addEventListener("click", () => {
            const accordionItem = header.parentNode;
            const content = accordionItem.querySelector(".accordion-content");
            accordionItem.classList.toggle("active");
            content.style.maxHeight = accordionItem.classList.contains("active") ? content.scrollHeight + "px" : null;

            document.querySelectorAll(".accordion-item").forEach
            (otherAccordionItem => {
                if(otherAccordionItem !== accordionItem){
                    otherAccordionItem.classList.remove("active");
                    otherAccordionItem.querySelector(".accordion-content").style.maxHeight = null;
                }
            });
        });
    });