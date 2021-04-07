const Subzero = {
    name: 'Subzero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'pistole'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    }
}

const Kitana = {
    name: 'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['bomb', 'ice'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    }
}

const $arenas = document.querySelector('.arenas');

function createPlayer(className, playerName) {
    const $player1 = document.createElement('div');
    $player1.classList = className;
    $arenas.appendChild($player1);

    $progressbar = document.createElement('div');
    $progressbar.classList = 'progressbar';
    $player1.appendChild($progressbar);

    $character = document.createElement('div');
    $character.classList = 'character';
    $player1.appendChild($character);

    $characterImg = document.createElement('img');
    $characterImg.src = playerName.img;
    $character.appendChild($characterImg);

    $life = document.createElement('div');
    $life.classList = 'life';
    $progressbar.appendChild($life);
    $life.style.width = `${playerName.hp}%`;

    $name = document.createElement('div');
    $name.classList = 'name';
    $progressbar.appendChild($name);
    $name.innerText = playerName.name;

}

createPlayer('player1', Kitana);
createPlayer('player2', Subzero);