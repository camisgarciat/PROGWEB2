const tamanhoCelula = 40;
let pecaId = 0;
let localAtual = 80;
let localFuturo = 81;
let classe ='';
let localCaptura = '';
let jogada = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('id',`${j}` + '-' + `${i}`);
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
			pecaId += 1;
	
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
				celula.setAttribute("class","droptarget");
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black',pecaId));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red',pecaId));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
	
    return tabela;	
}

function criaPeca(cor,ide) {
		let imagem = document.createElement('img');
		imagem.setAttribute('src', `img/${cor}.png`);
		imagem.setAttribute('width', `${tamanhoCelula-4}px`);
		imagem.setAttribute('height', `${tamanhoCelula-4}px`);
		imagem.setAttribute('draggable','true');
		imagem.setAttribute('id', ide);
		imagem.setAttribute('class', cor);
		
    return imagem;
}

function dragstart(){
	document.addEventListener("dragstart", function(event) {
		event.dataTransfer.setData("Text", event.target.id);
		localAtual = event.path[1].id.toString();
		classe = event.path[0].className;
	});
}

function dragend() {
	document.addEventListener("dragend", function(event) {
	});
}

function dragover() {
	document.addEventListener("dragover", function(event) {
		event.preventDefault();
	});
}
