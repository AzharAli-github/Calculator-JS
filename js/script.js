const insert = (num) => {
    document.querySelector('#textBox').value = document.querySelector('#textBox').value + num;
}

const equal = () => {
    let totalNum = document.querySelector('#textBox').value;

    if (totalNum) {
        document.querySelector('#textBox').value = eval(totalNum);
    }
}

const eraseAll = () => {
    document.querySelector('#textBox').value = "";
}

const eraseOne = () => {
    let inputData = document.querySelector('#textBox').value;
    document.querySelector('#textBox').value = inputData.substring(0, inputData.length - 1);
}