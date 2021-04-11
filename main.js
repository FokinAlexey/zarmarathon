const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');



const player1 = {
    player: 1,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'pistole'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    }
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['bomb', 'ice'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    }
}

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(playerName) {
    const $player = createElement('div', 'player'+playerName.player);  
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $characterImg = createElement('img');

    $characterImg.src = playerName.img;    
    $life.style.width = `${playerName.hp}%`;    
    $name.innerText = playerName.name; 

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $character.appendChild($characterImg); 
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    return $player;
}

function changeHP (player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    if (player.hp <= 0) {
         player.hp = 0;
    } else {
        player.hp -= Math.ceil(Math.random()*20);
    };

    $playerLife.style.width = player.hp + '%';
    console.log(player.name, player.hp);
    
    if (player.hp <0 ) {
        $arenas.appendChild(playerLose(player.name));
    }
    
}

function playerLose (name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    $randomButton.disabled = true;
    return $loseTitle;
}

function playerWin (name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' wins !';
    $randomButton.disabled = true;
    return $winTitle;
}


$randomButton.addEventListener('click', function() {
    changeHP (player1);
    changeHP (player2);
    
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
