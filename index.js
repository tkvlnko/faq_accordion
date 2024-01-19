const accordeonHandler = () => {
    const state = {
        tabs: [ 
            {active: true, id: "tab1"},
            {active: false, id: "tab2"},
            {active: false, id: "tab3"},
            {active: false, id: "tab4"}
        ]  
    };

    const render = (state) => {
        const tabs = document.querySelectorAll('.tab');
        state.tabs.forEach((tab) => {
            const tabDiv = document.querySelector(`#${tab.id}`);
            const tabImg = tabDiv.previousElementSibling.querySelector('.image');
            if (!(tab.active)) {
                tabDiv.classList.add('hidden')
                tabImg.setAttribute("src", "./assets/images/icon-plus.svg")
            } else {
                tabDiv.classList.remove('hidden')
                tabImg.setAttribute("src", "./assets/images/icon-minus.svg")
            }

            // const tabId = tab.getAttribute('id');

        })
    };


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            // alert(JSON.stringify(e.target));
            const id = e.currentTarget.getAttribute("data-target");
            state.tabs.forEach((tab) => {
                if (tab.id === id) {
                    tab.active = !tab.active;
                } else {
                    tab.active = false;
                }
            })
            render(state);

            
        });
    });
};

accordeonHandler();
