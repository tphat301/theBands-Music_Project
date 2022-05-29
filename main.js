const buyBtns = document.querySelectorAll ('.js-btn')
            const modal = document.querySelector ('.js-modal')
            const modalClose = document.querySelector ('.js-modal-close')
            const modalContainer = document.querySelector ('.js-modal-container')
            for (var buyBtn of buyBtns) {
                buyBtn.addEventListener ('click', function () {
                    modal.classList.add ('open');
                })
            }
            modalClose.addEventListener ('click', function () {
                modal.classList.remove ('open');
            })
            modal.addEventListener ('click', function () {
                modal.classList.remove ('open');
            })
            modalContainer.addEventListener ('click', function  (event) {
                event.stopPropagation ();
            })
            var header = document.getElementById ('header');
            var menuMobile = document.getElementById ('MENU');
            menuMobile.onclick = function () {
                var isClose = header.clientHeight === 46;
                if (isClose) {
                    header.style.height = 'auto';
                }        
                else {
                    header.style.height = null;
                }
            }
            var menuItems = document.querySelectorAll ('#nav li a[href*="#"]');
            for (var i = 0; i < menuItems.length; i++) {
                var menuItem = menuItems [i];
                menuItem.onclick =function () {
                    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains ('sub-nav');
                    if (isParentMenu) {
                        event.preventDefault ();
                    }
                    else {
                        header.style.height = null;
                    }
                }
            }