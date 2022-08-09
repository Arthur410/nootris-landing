window.onload = () => {
	let burger = document.querySelector('.header__burger');
	let mobileHeader = document.querySelector('.header__menu');
	let body = document.querySelector('body');

	burger.addEventListener('click', () => {
		body.classList.toggle('active')
		mobileHeader.classList.toggle('active');
		burger.classList.toggle('active');

	})


}
