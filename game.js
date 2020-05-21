// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSumary = {
    numbers : 0,
    wins : 0,
    losses : 0,
    draws : 0 
}

const game = {
    playerHand : '',
    aiHand : ''
}

const hands = [ ...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red'
}

function aiChoice() {
    return hands[Math.floor(Math.random()*3)].dataset.option;
}

function checkResult(player, ai) {
    
    if(player === ai){return 'draw'}
    else if((player === 'papier'&& ai === 'kamień') || (player === 'kamień' && ai=== 'nożyczki') || (player === 'nożyczki'&& ai === 'papier')) {return 'win'}
    else {return 'loss'}
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;

    document.querySelector('p.numbers span').textContent = ++ gameSumary.numbers;

    if(result === 'win'){
        document.querySelector('p.wins span').textContent = ++ gameSumary.wins;
    } else if(result === 'loss') {
        document.querySelector('p.losses span').textContent = ++ gameSumary.losses;
    } else {
        document.querySelector('p.draws span').textContent = ++ gameSumary.draws;
    }
}

// funkcja sterująca
function startGame() {
    if(!game.playerHand) return alert('Wybierz dłoń !!!');

    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);

    console.log(gameResult);
    
    publishResult(game.playerHand, game.aiHand, gameResult);
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);

