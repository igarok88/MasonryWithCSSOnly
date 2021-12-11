window.addEventListener("DOMContentLoaded", () => {
	const masonryContainer = document.querySelector(".masonry-container");
	let arrImg = [];

	const createItem = (item) => {
		return `
		<div class="item"><img src=${item.url} alt=${item.alt} /></div>
		`;
	};

	if (localStorage.getItem("positionImg")) {
		masonryContainer.innerHTML = "";
		const positionImgJSONParse = JSON.parse(
			localStorage.getItem("positionImg")
		);
		positionImgJSONParse.forEach((item) => {
			masonryContainer.innerHTML += createItem(item);
		});
	}

	function ItemImg(url, alt) {
		this.url = url;
		this.alt = alt;
	}

	const uppdateArrImg = () => {
		arrImg = [];
		const masonryItemImg = document.querySelectorAll(
			".masonry-container .item img"
		);
		masonryItemImg.forEach((item) => {
			srcImg = item.getAttribute("src");
			altImg = item.getAttribute("alt");
			arrImg.push(new ItemImg(srcImg, altImg));
		});
	};
	uppdateArrImg();

	const updateLocal = (arrImg) => {
		localStorage.clear();
		localStorage.setItem("positionImg", JSON.stringify(arrImg));
	};
	updateLocal(arrImg);

	window.addEventListener("mouseup", () => {
		uppdateArrImg();
		updateLocal(arrImg);
	});

	$(".sortable").sortable({});
});
