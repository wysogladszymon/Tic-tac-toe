let arr2 = []
function clearArr()
{
    arr2 = [];
    for(let i = 0; i < 3; i ++)
    {
        arr2[i] = [];
        for(let j = 0 ; j < 3 ; j++)
        {
            arr2[i].push(0);
        }
    }
}
clearArr();
console.log(arr2);
let counter = 0;
function poolsInTheBoard()
{
    let contain = document.getElementById('board');
    contain.innerHTML = '';
    clearArr();
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0 ; j < 3; j++)
        {
            const text = document.createElement('p');
            text.setAttribute('class', `pool untaken`);
            const id_ = 'pool' + String(i) + String(j);
            text.id = id_;
            text.setAttribute('onclick',`showSign('${id_}')`);
            contain.appendChild(text);
        }
    }
    counter = 0;
    
}
poolsInTheBoard();

function showCross(pool)
{
    const add = document.createElement('div');
    add.className = 'cross';
    let elem = document.getElementById(pool);
    elem.appendChild(add);
    elem.classList.remove('untaken');
    arr2[pool.charAt(pool.length - 2)][pool.charAt(pool.length - 1)] = 1;
}
function showCircle(pool)
{
    const add = document.createElement('div');
    add.className = 'circle';
    let elem = document.getElementById(pool);
    elem.appendChild(add);
    elem.classList.remove('untaken');
    arr2[pool.charAt(pool.length - 2)][pool.charAt(pool.length - 1)] = 2;
}

let beginX, beginY, endX, endY;

function checkIfWin()
{
    console.log(arr2);
    for(const [index, row] of arr2.entries()) //sprawdzanie wierszy
    {
        let ans = row.reduce((acc, curVal)=> acc * curVal,1);
        beginY = 105*(index + 1);
        endY = beginY;
        beginX = 5;
        endX = 615;
        if(ans === 8)
            return 2; //circleWin
        if(ans === 1)
            return 1; //crossWin
    }
    for(let i = 0; i < 3; i++)
    {
        beginX = 105*(i + 1);
        endX = beginX;
        beginY = 5;
        endY = 615;
        let ans = arr2[0][i] * arr2[1][i] * arr2[2][i];
        if(ans === 1)
            return 1;
        if (ans === 8)
            return 2;
    }
    if(arr2[0][0] * arr2[1][1]* arr2[2][2] === 1)
    {
        beginX = 5;
        endX = 615;
        beginY = 5;
        endY = 615;
        return 1;
    }
    if(arr2[0][0] * arr2[1][1]* arr2[2][2] === 8)
    {
        beginX = 5;
        endX = 615;
        beginY = 5;
        endY = 615;
        return 2;
    }


    if(arr2[0][2] * arr2[1][1]* arr2[2][0] === 1)
    {
        beginX = 5;
        endX = 615;
        beginY = 5;
        endY = 615;
        return 1;
    }
    if(arr2[0][2] * arr2[1][1]* arr2[2][0] === 8)
    {
        beginX = 5;
        endX = 615;
        beginY = 5;
        endY = 615;
        return 2;
    }
    
    return 0;
}

function showSign(pool)
{
    if(counter % 2 === 0)
        drawCircle(pool);
    else
        showCross(pool);
    document.getElementById(pool).setAttribute('onclick','');
    counter++;
    if(checkIfWin() === 2)
    {
        canvas();
        write('Circle Wins');
        drawLine();
        return;
    }
    if(checkIfWin() === 1)
    {
        canvas();
        write('Cross Wins');
        drawLine();
        return;
    }
    if(counter > 8)
        write('Tie');
}
function canvas(){
    let contain = document.getElementById('board');
    let canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    contain.appendChild(canvas);
}

function write(word)
{
    let text = document.createElement('p');
    text.textContent = word;
    text.id = 'end';
    let butt = document.createElement('button');
    butt.textContent = 'RESTART';
    butt.id = 'button';
    butt.setAttribute('onclick','poolsInTheBoard()');
    document.getElementById('board').appendChild(text);
    document.getElementById('board').appendChild(butt);
}
let svgCircle = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="eTB2hcPbeXq1" viewBox="0 0 200 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="87.066199" ry="87.066199" transform="matrix(.940771 0 0 0.940773 100 100.765276)" fill="none" stroke="#a728f8" stroke-width="3"/></svg>
<ellipse xmlns="http://www.w3.org/2000/svg" rx="87.066199" ry="87.066199" transform="matrix(.940771 0 0 0.940773 100 100.765276)" fill="none" stroke="#a728f8" stroke-width="3"/>
</svg>`;

let svgCross = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="eqxFWvOLNSp1" viewBox="0 0 200 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><line x1="-100" y1="0" x2="100" y2="0" transform="matrix(.707107-.707107 0.707107 0.707107 100 100)" fill="none" stroke="#3f5787" stroke-width="10"/><line x1="-102.094619" y1="0" x2="102.094619" y2="0" transform="matrix(.707107 0.707107-.707107 0.707107 102.094619 100)" fill="none" stroke="#3f5787" stroke-width="10"/></svg><line xmlns="http://www.w3.org/2000/svg" x1="-100" y1="0" x2="100" y2="0" transform="matrix(.707107-.707107 0.707107 0.707107 100 100)" fill="none" stroke="#3f5787" stroke-width="10"/><line xmlns="http://www.w3.org/2000/svg" x1="-102.094619" y1="0" x2="102.094619" y2="0" transform="matrix(.707107 0.707107-.707107 0.707107 102.094619 100)" fill="none" stroke="#3f5787" stroke-width="10"/><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="eqxFWvOLNSp1" viewBox="0 0 200 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><line x1="-100" y1="0" x2="100" y2="0" transform="matrix(.707107-.707107 0.707107 0.707107 100 100)" fill="none" stroke="#3f5787" stroke-width="10"/><line x1="-102.094619" y1="0" x2="102.094619" y2="0" transform="matrix(.707107 0.707107-.707107 0.707107 102.094619 100)" fill="none" stroke="#3f5787" stroke-width="10"/></svg>`
function drawCircle(pool)
{
    let elem = document.getElementById(pool);
    elem.innerHTML = svgCircle;
    elem.classList.remove('untaken');
    arr2[pool.charAt(pool.length - 2)][pool.charAt(pool.length - 1)] = 2;
}

