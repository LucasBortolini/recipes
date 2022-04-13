// edit form

function clickName() {
  document.getElementById('clickName').readOnly = false;
}

function clickEmail() {
  document.getElementById('clickEmail').readOnly = false;
}

function clickWhats() {
  document.getElementById('clickWhats').readOnly = false;
}

function clickPassword() {
  document.getElementById('clickPassword').readOnly = false;
}

function clickWeight() {
  document.getElementById('clickWeight').readOnly = false;
}

function clickHeight() {
  document.getElementById('clickHeight').readOnly = false;
}

function clickSex() {
  document.getElementById('clickSex').readOnly = false;
}

function clickAge() {
  document.getElementById('clickAge').readOnly = false;
}

function clickWake() {
  document.getElementById('clickWake').readOnly = false;
}

function clickLunch() {
  document.getElementById('clickLunch').readOnly = false;
}

function clickSleep() {
  document.getElementById('clickSleep').readOnly = false;
}

// Masks
function inputHandler(masks, max, event) {
  var c = event.target;
  var v = c.value.replace(/\D/g, '');
  var m = c.value.length > max ? 1 : 0;
  VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  c.value = VMasker.toPattern(v, masks[m]);
}

document.addEventListener("DOMContentLoaded", function(event) {
  const telMask = ['(99) 9999-9999', '(99) 99999-9999'];
  const tel = document.querySelector('input[name="tel"]');
  const whats = document.querySelector('input[name="whats"]');

  if (tel) {
    VMasker(tel).maskPattern(telMask[0]);
    tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
  }

  if (whats) {
    VMasker(whats).maskPattern(telMask[0]);
    whats.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
  }

  birthday = document.getElementById('birthday');

  if (birthday) {
    VMasker(birthday).maskPattern("99/99/9999");
  }

  weight = document.getElementById('weight');

  if (weight) {
    VMasker(weight).maskMoney({
      // Decimal precision -> "90"
      precision: 1,
      // Decimal separator -> ",90"
      separator: ',',
      // Number delimiter -> "12.345.678"
      delimiter: '.',
      // Money unit -> "R$ 12.345.678,90"
      unit: '',
      // Money unit -> "12.345.678,90 R$"
      suffixUnit: 'kg',
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: false
    });
  }

  height = document.getElementById('height');

  if (height) {
    VMasker(height).maskMoney({
      // Decimal precision -> "90"
      precision: 2,
      // Decimal separator -> ",90"
      separator: ',',
      // Number delimiter -> "12.345.678"
      delimiter: '.',
      // Money unit -> "R$ 12.345.678,90"
      unit: '',
      // Money unit -> "12.345.678,90 R$"
      suffixUnit: 'm',
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: false
    });
  }

  // reminders toggle

  document.querySelectorAll('.reminder-switch').forEach((item) => {
    item.addEventListener('change', (event, value) => {
      const parent = item.parentNode;
      const checked = event.target.checked;

      const input = parent.querySelectorAll('input[type="time"]')[0];
      input.readOnly = !checked;

      const h2 = parent.querySelectorAll('h2')[0];
      h2.innerHTML = checked ? "Ativado" : "Desativado";
    });
  });

  // social media toggle

  document.querySelectorAll('.social-switch').forEach((item) => {
    item.addEventListener('change', (event, value) => {
      const grandparent = item.parentNode.parentNode;
      const checked = event.target.checked;

      const inputs = grandparent.querySelectorAll('.social-radio > input');

      inputs.forEach((input) => {
        input.disabled = !checked;
      });
    });
  });

});