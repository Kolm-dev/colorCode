const button = document.querySelector('.btn'),
	textInfo = document.querySelector('.info'),
	header = document.querySelector('.header')
;(body = document.body), (tableInfo = document.querySelector('.wrapper'))

button.addEventListener('click', backgroundChange)

setInterval(() => {
	header.style.color = randColor()
}, 2000)

function randColor() {
	const r = Math.floor(Math.random() * 256),
		g = Math.floor(Math.random() * 256),
		b = Math.floor(Math.random() * 256),
		color = '#' + r.toString(16) + g.toString(16) + b.toString(16)

	return color
}

function backgroundChange() {
	setTimeout(() => {
		tableInfo.style.display = 'block'
		textInfo.textContent = `Цвет фона ${randColor()}`
		button.style.backgroundColor = body.style.background = randColor()
	})
}
