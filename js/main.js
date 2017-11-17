window.onload = function (){
    var game = document.getElementById('game');

    for (let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            var div = document.createElement('div');
            div.id = i * 4 + j;
            div.className = 'square';
            game.appendChild(div);
        }
        var br = document.createElement('br');
        game.appendChild(br);
    }
    a2048 = new Game();
    a2048.start();
    for (let i = 0; i < 16; i++){
        var div = document.getElementById(i);
        div.innerHTML = a2048.table[i].value;
    }

}
