const faqTabItems = Array.from(document.querySelectorAll(".faq-tab-item"));
const faqContent = document.querySelector("#faq-content");

const faqText = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? nt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? nt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati veritatis esse necessitatibus nesciunt ad dicta a nisi quo laboriosam, reiciendis, perferendis ab quod, quibusdam itaque sequi corrupti optio ea?"
]

const resetActiveTabItems = () => {
    faqTabItems.map(tabItem => {
        return tabItem.className = "faq-tab-item";
    })
}

faqContent.innerHTML = faqText[0];

faqTabItems.map((tabItem, index) => {
    tabItem.addEventListener("click", () => {
        resetActiveTabItems();
        tabItem.className = "faq-tab-item active";
        const displayedText = faqText[index];
        faqContent.setAttribute("style", "opacity: 0;");
        faqContent.innerHTML = displayedText;
        setTimeout(() => {
            faqContent.setAttribute("style", "opacity: 1;");
        }, 300);
    })
})

