const updateText = () => {
  document.querySelector('#text-output').innerText = 
    document.querySelector('#text-input').value;
}

const makeBold = (elem) => {
  elem.classList.toggle('active');
  const textOutput = document.getElementById('text-output');
  textOutput.style.fontWeight = elem.classList.contains('active') ? 'bold':'normal';

}

const makeItalic = (elem) => {
  elem.classList.toggle('active');
  const textOutput = document.getElementById('text-output');
  textOutput.style.fontStyle = elem.classList.contains('active') ? 'italic':'normal';
}


const makeUnderline = (elem) => {
    elem.classList.toggle('active');
    const textOutput = document.getElementById('text-output');
    textOutput.style.textDecoration = elem.classList.contains('active') ? 'underline':'none';
}


const alignText = (elem, alignType) => {
  const textOutput = document.getElementById('text-output');
  textOutput.style.textAlign = alignType;
  const alignEls = document.getElementsByClassName('align');
  for(let button of alignEls) {
    button.classList.remove('active');
  }
  elem.classList.add('active');
}