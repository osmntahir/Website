
const dog_btn = document.getElementById('köpek_btn');

const dog_result = document.getElementById('köpek_result');


köpek_btn.addEventListener('click', KöpekGetir);


function KöpekGetir() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				KöpekGetir();
			}
			else {
				köpek_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
