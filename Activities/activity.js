// for inserting row
document.getElementById('Calc').style.visibility="hidden";
var cel = document.getElementById('body');

var form = document.getElementById('Calc');

form.addEventListener("submit",addRow);
function addRow (e)

   {
    e.preventDefault();

    var fname = document.getElementById('fname').value;
    var dname = document.getElementById('dname').value;
    var tname = document.getElementById('tname').value;
    var dtname = document.getElementById('dtname').value;

    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(table.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerHTML = fname;
    cel2.innerHTML = dname;
    cel3.innerHTML = tname;
    cel4.innerHTML = dtname;
    }


var add = document.getElementById('calculate');

add.addEventListener('click',seeForm);

function seeForm(e){
   document.getElementById('Calc').style.visibility="visible";

}

// for modal

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


