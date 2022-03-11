document.addEventListener("DOMContentLoaded", () => {
	try {
		let compassButtons = document.querySelectorAll(".compass__button"),
			compassWrap = document.querySelector(".compass-row");

		if (compassWrap.parentElement.classList.contains("no-overflow")) {
			compassWrap.parentElement.classList.add("container__compass_overflow");
		}

		const turnArrow = (target, startDegree, endDegree) => {
			let arrow = document.querySelector(".compass__arrow");

			target.addEventListener("mouseover", (event) => {
				arrow.style.transform = `translate(-50%, -50%) rotate(${startDegree}deg)`;
			});

			target.addEventListener("mouseout", (event) => {
				arrow.style.transform = `translate(-50%, -50%) rotate(${endDegree}deg)`;
			});
		};

		turnArrow(compassButtons[0], 45, 45);
		turnArrow(compassButtons[1], 135, 135);
		turnArrow(compassButtons[2], -135, -135);
		turnArrow(compassButtons[3], -45, -45);
	} catch (error) {}
});
