const input = document.querySelector('.tags .input-tag');
const tagWrapper = document.querySelector('.tags');
const removeAll = document.querySelector('.bottom .remove-all');
const totalTag = document.querySelector('.bottom p .total-tag');
let listTag = [];


totalTag.textContent = listTag.length;

input.addEventListener('input', function () {
	if(this.value.includes(',')) {
		const str = this.value.toLowerCase().replace(/ +/g, ' ').split(',');
		str.forEach(item=> {
			const text = item.trim();
			if(!listTag.includes(text) && text !== "" && text !== " ") {
				listTag.push(text);
				addTag();
			}
		})
		totalTag.textContent = listTag.length;
		this.value = "";
	}
})



input.addEventListener('keydown', function (e) {
	if(e.key === 'Backspace') {
		if(this.value === "") {
			const li = tagWrapper.querySelectorAll('li');
			li[li.length - 1].remove()
			this.value = listTag[listTag.length - 1] + " "
			listTag.pop()
			totalTag.textContent = listTag.length;
		}
	}
})



function addTag() {
	tagWrapper.querySelectorAll('li').forEach(li=> li.remove())
	listTag.forEach(item=> {
		const li = document.createElement('li');
		li.innerHTML = `
			<span class="text">${item}</span>
			<i class='bx bx-x close-btn' ></i>
		`
		tagWrapper.insertBefore(li, input)
	})
}



window.addEventListener('click', function (e) {
	if(e.target.matches('.bx.bx-x.close-btn')) {
		const li = e.target.parentElement
		const text = li.querySelector('.text').textContent
		tagWrapper.removeChild(li)
		listTag.splice(listTag.indexOf(text), 1);
		totalTag.textContent = listTag.length;
	}
})

removeAll.addEventListener('click', function() {
	tagWrapper.querySelectorAll('li').forEach(li=> li.remove())
	listTag = [];
	totalTag.textContent = listTag.length;
})