let PLAYER_WEAPONS = [];
PLAYER_WEAPONS = ['TANK', 'MISSLE', 'GRENADE'];
let TEXT_INPUT = document.querySelector('.textInputBox');
let CLICKABLE_BUTTON = document.getElementById('clickableButton');
let PRINT_TEXT = document.getElementsByClassName('para');
CLICKABLE_BUTTON.addEventListener('click', checkInput);
CLICKABLE_BUTTON.innerHTML = 'Submit weapon selection.';

function computerPlay() {
    let randomResult = Math.round(Math.random() * (3 - 1) + 1);
    switch (randomResult) {
        case 1:
            return 'TANK';
        case 2:
            return 'MISSLE';
        case 3:
            return 'GRENADE';
    }
}
function playRound(playerWeapon) {
    computerWeapon = computerPlay();
    PRINT_TEXT[0].textContent = 'Computer picks '+computerWeapon+'.';
    win = (playerWeapon + ' beats ' + computerWeapon + '. You win!');
    lose = (computerWeapon + ' beats ' + playerWeapon + '. You lose!');
    tie = 'Tie!';
    switch (playerWeapon) {
        case 'TANK':
            switch (computerWeapon) {
                case 'TANK':
                    result = tie;
                    break;
                case 'MISSLE':
                    result = win;
                    break;
                case 'GRENADE':
                    result = lose;
                    break;
            }
            break;
        case 'MISSLE':
            switch (computerWeapon) {
                case 'TANK':
                    result = lose;
                    break;
                case 'MISSLE':
                    result = tie;
                    break;
                case 'GRENADE':
                    result = win;
                    break;
            }
            break;
        case 'GRENADE':
            switch (computerWeapon) {
                case 'TANK':
                    result = win;
                    break;
                case 'MISSLE':
                    result = lose;
                    break;
                case 'GRENADE':
                    result = tie;
                    break;
            }
            break;
    }
    return result;
}
function checkInput() {
    PRINT_TEXT[0].textContent = '';
    PRINT_TEXT[1].textContent = '';
    playerWeapon = TEXT_INPUT.value;
    uPlayerWeapon = playerWeapon.toUpperCase();
    if (PLAYER_WEAPONS.includes(uPlayerWeapon)) {
        PRINT_TEXT[1].textContent = (playRound(uPlayerWeapon));
    } else {
        PRINT_TEXT[1].textContent = ('Invalid input. Enter Tank, Missle, or Grenade.');
    }
}