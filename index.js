document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const openBtn = document.getElementById("openVideoModal");
    const closeBtn = document.getElementById("closeVideoModal");
    const backBtn = document.getElementById("backToPageBtn");

    const openModal = (e) => {
        if (e) e.preventDefault();
        if (modal) {
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = (e) => {
        if (e) e.preventDefault();
        if (modal) {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }
    };

    if (openBtn) openBtn.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backBtn) backBtn.addEventListener("click", closeModal);

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeModal();
        }
    });
});