class Main{
    constructor() {
        this.faqInit();
    }

    faqInit(){
        const listItems = document.querySelectorAll('#faq_list li');

        listItems.forEach(item => {
            const plusBtn = item.querySelector('button .plus');
            const minusBtn = item.querySelector('button .minus');

            plusBtn.addEventListener('click', function(){
                removeClassFAQ();
                item.classList.add('active');
            })

            minusBtn.addEventListener('click', function(){
                removeClassFAQ();
            })
        })

        function removeClassFAQ(){
            const listActiveItems = document.querySelectorAll('#faq_list li.active');
            listActiveItems.forEach(item => item.classList.remove('active'));
        }
    }
}

new Main();