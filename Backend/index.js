const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

const dataBaseURL = 'https://proyecto-memorygamejs-default-rtdb.firebaseio.com/';

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🫛', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🫚', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🫘', '🍯', '🥛', '🍼', '🫖', '☕️', '🍵', '🧃', '🥤', '🧋', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥡', '🧂'];

const flags = ['🏳', '🏴', '🏁', '🚩', '🎌', '🏴‍☠️', '🏳️‍🌈', '🏳️‍⚧️', '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇪🇸', '🇪🇷', '🇪🇭', '🇪🇬', '🇪🇪', '🇪🇨', '🇩🇿', '🇩🇴', '🇩🇲', '🇩🇰', '🇩🇯', '🇩🇪', '🇨🇿', '🇨🇾', '🇪🇹', '🇪🇺', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇭🇺', '🇭🇹', '🇭🇷', '🇭🇳', '🇭🇰', '🇬🇾', '🇬🇼', '🇬🇺', '🇬🇹', '🇬🇸', '🇬🇷', '🇬🇶', '🇬🇵', '🇬🇳', '🇬🇲', '🇬🇱', '🇮🇨', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇱🇷', '🇱🇰', '🇱🇮', '🇱🇨', '🇱🇧', '🇱🇦', '🇰🇿', '🇰🇾', '🇰🇼', '🇰🇷', '🇰🇵'];

const faces = ['😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '🙂', '🙃', '☺', '😋', '😌', '😍', '🥰', '😘', '😗', '😚', '🥲', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🥸', '🧐', '🤠', '🥳', '🤡', '😏', '😶', '🫥', '😐', '🫤', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🫢', '🫡', '🤗', '🫣', '🤥', '😳', '😞', '😟', '😤', '😠', '😡', '🤬', '😔', '😕', '🙁', '☹', '😬', '🥺', '😣', '😖', '😫', '😩', '🥱', '😪', '😮‍💨', '😮', '😱', '😨', '😰', '😥', '😓', '😯', '😦', '😧', '🥹', '😢', '😭', '🤤', '🤩', '😵', '😵‍💫', '🥴', '😲', '🤯', '🫠', '🤐', '😷', '🤕', '🤒', '🤮', '🤢', '🤧', '🥵', '🥶', '😶‍🌫️', '😴'];

app.get("/", (req, res) => {
    res.send("Api Funcionado");
});

app.get('/cards/:difficulty/:theme', (request, response) => {
    var data = { cards: [] };
    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.theme !== null) {
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty, theme);
            cards.forEach(card => {
                data.cards.push(card);
            });
            cards.forEach(card => {
                data.cards.push(card);
            });
            shuffleArray(data.cards);
        }
    }
    response.send(JSON.stringify(data));
});

app.get('/scores', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const jsonData = Buffer.concat(body).toString();
        if (jsonData !== undefined) {
            const url = `${dataBaseURL}/data/scores.json`;
            const score = JSON.parse(jsonData);
            if (score !== undefined && score.clicks !== undefined && score.time !== undefined && score.score !== undefined) {
                axios.post(url, score).then(function (result) {
                    response.send('Score saved');
                }).catch(function (error) {
                    response.send(error);
                });
            } else {
                response.send('Score undefined or null!');
            }
        } else {
            respond.send('request.body undefined or null');
        }
    });
});

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

function ramdomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getIconIndex(iconIndex, length, cards) {
    let newIconIndex = ramdomInteger(0, (length - 1));

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id === newIconIndex) {
            return getIconIndex(iconIndex, length, cards);
        }
    }

    if (iconIndex === newIconIndex) {
        return getIconIndex(iconIndex, length, cards)
    }
    return newIconIndex;
};

function getCards(difficulty, theme) {
    var cards = [];
    var iconList = null;
    switch (theme) {
        case 'food':
            iconList = food;
            break;
        case 'flags':
            iconList = flags;
            break;
        case 'faces':
            iconList = faces;
        default:
            break;
    }

    for (let i = 0; i < difficulty; i++) {
        var iconIndex = getIconIndex(-1, iconList.length, cards);
        var card = {
            "isDiscovered": false,
            "icon": iconList[iconIndex],
            "id": iconIndex
        }
        cards.push(card);
    }
    console.log(cards)
    return cards;
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[1], array[j] = array[j], array[1]];
    }
};


module.exports = app;