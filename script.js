document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("#tabs li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and contents
            tabs.forEach(item => item.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to selected tab and corresponding content
            tab.classList.add("active");
            const targetId = tab.getAttribute("data-tab");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Initialize the first tab as active
    if (tabs.length > 0) {
        tabs[0].classList.add("active");
        const firstTabId = tabs[0].getAttribute("data-tab");
        document.getElementById(firstTabId).classList.add("active");
    }
});
