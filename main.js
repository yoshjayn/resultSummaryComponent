let resultScore = document.querySelector('.left-col span'),
reaction= document.getElementsByClassName('reaction'),
memory= document.getElementsByClassName('memory'),
verbal= document.getElementsByClassName('verbal'),
visual= document.getElementsByClassName('visual'),
boxSkills= document.querySelectorAll('.boxSkills'),
userPoints= document.querySelectorAll('.box-points .new');

var data = [
    {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
    },
    {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
    },
    {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
    },
    {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
    }
] ;

function newData(data,len) {
    let totalSum=0;
    for(let i=0; i<len; i++) {
        let img = document.createElement('img');
        img.alt='rect';
        img.src=data[i].icon;
        boxSkills[i].appendChild(img);
        userPoints[i].innerText= data[i]['score'];
        totalSum += data[i].score;
    }

    reaction[0].innerText= data[0].category;
    memory[0].innerText= data[1].category;
    verbal[0].innerText= data[2].category;
    visual[0].innerText= data[3].category;

    userPoints.innerHTML = Math.round(totalSum / len)
}

newData(data,data.length);

