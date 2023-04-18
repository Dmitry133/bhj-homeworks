const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));

hasToolTip.forEach(element =>  {

    const toolTip = document.createElement("div");
    toolTip.innerText = element.getAttribute("title");
    toolTip.classList.add("tooltip");

        element.addEventListener("click", (e) => {
            const toolTipActive = document.querySelector(".tooltip_active");

            if (toolTipActive && (toolTipActive !== toolTip)) {
                toolTipActive.classList.toggle("tooltip_active");
            }
                toolTip.classList.toggle("tooltip_active");

                let {top} = element.getBoundingClientRect();
                toolTip.style.top = top + 20 + "px";
                toolTip.style.left = "0px";
                element.insertAdjacentElement("afterend", toolTip);


                e.preventDefault();
        });
});