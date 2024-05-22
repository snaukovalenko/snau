//плавний перехід
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault(); // Відмінити дію за замовчуванням (перехід за посиланням)

		const targetId = this.getAttribute('href'); // Отримати ідентифікатор цільового елемента з атрибута href
		const targetElement = document.querySelector(targetId); // Знайти цільовий елемент за його ідентифікатором

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 50, // Прокрутити до верхнього краю цільового елемента з урахуванням висоти меню
				behavior: 'smooth' // Плавний перехід
			});
		}
	});
});

// Зберігаємо позицію прокрутки перед перезавантаженням сторінки
window.addEventListener('beforeunload', function () {
	localStorage.setItem('scrollPosition', window.scrollY);
});

// Перевіряємо, чи є збережена позиція прокрутки після завантаження сторінки
window.addEventListener('load', function () {
	var scrollPosition = localStorage.getItem('scrollPosition');
	if (scrollPosition !== null) {
		// Прокручуємо сторінку до збереженої позиції з урахуванням висоти меню
		window.scrollTo({
			top: parseInt(scrollPosition) - 50,
			behavior: 'smooth'
		});
		// Після використання очищаємо збережену позицію прокрутки
		localStorage.removeItem('scrollPosition');
	}
});



//////////////////////////////////////////menu
$(document).ready(function () {
	$('.header_burger').click(function () {
		$(this).toggleClass('active');
		$('.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header_link').click(function () {
		if ($('.header_burger').hasClass('active')) {
			$('.header_burger').removeClass('active');
			$('.header_menu').removeClass('active');
			$('body').removeClass('lock');
		}
	});
});



// анімація при скролі

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-animate]');

    function checkPosition() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Викличте функцію один раз для перевірки початкового стану
    checkPosition();
});

