window.addEventListener('DOMContentLoaded', () => {
  // form validation

  // variables
  const form = document.querySelector('#form');
  const formGroup = document.querySelectorAll('.form-outline');
  console.log(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = form['fullName'];
    const email = form['email'];
    const textArea = form['message'];
    sendRequest();
    //   for Fullname
    if (fullName.value === '') {
      showError('fullName', 'Enter your name');
      fullName.style.borderColor = '#ff3232';
    } else {
      removeError('fullName');
    }
    //   for Fullname
    if (email.value === '') {
      showError('email', 'Enter your email');
      email.style.borderColor = '#ff3232';
    } else {
      removeError('email');
    }
    //   for Fullname
    if (textArea.value === '') {
      showError('message', 'Enter your message');
      textArea.style.borderColor = '#ff3232';
    } else {
      removeError('message');
    }
    console.log(fullName);
  });

  // SHOW ERROR
  const showError = (input, message) => {
    const small = form[input].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
  };
  //  REMOVE ERROR

  const removeError = (input) => {
    const small = form[input].parentNode.querySelector('small');
    small.remove(input);
  };

  // FORM SUBMISSION
  const sendBtn = document.querySelector('.send');
  const status = document.querySelector('.modal-body');
  const modalTitle = document.querySelector('.modal-title');
  const modalFooter = document.querySelector('.modal-footer');
  const modalContent = document.querySelector('.modal-content');

  //success
  const success = () => {
    // sendBtn.innerText = 'Message Sent';
    setTimeout(() => {
      // form.reset();
      status.innerHTML = ` <div class="form-outline mb-4">
      <input
        type="text"
        id="fullName"
        class="form-control"
        name="name"
      />
      <label for="fullName" class="form-label">Full name</label>
      <small class="my-1"></small>
    </div>

    <div class="form-outline mb-4">
      <input
        type="email"
        name="_replyto"
        id="email"
        class="form-control"
      />
      <label for="email" class="form-label">Email address</label>
      <small></small>
    </div>
    <div class="form-outline mb-4">
      <textarea
        name="message"
        id="message"
        rows="4"
        class="form-control"
      ></textarea>
      <label for="message" class="form-label">Message</label>
      <small></small>
    </div>
  </div>`;
      modalTitle.style.display = 'block';
      modalFooter.style.display = 'block';
    }, 2000);

    status.innerHTML = `
      <div class="text-center">
      <img src="img/checked.svg" alt="checked" class="svg1">
      <h2>Message Sent</h2>
      <p>Get back to you soon </p>
    </div>
      `;
    modalTitle.style.display = 'none';
    modalFooter.style.display = 'none';
  };
  //  show error
  const error = () => {
    status.innerHTML = 'Oops! There was a problem.';
  };

  // SEND REQUEST
  async function sendRequest() {
    const formData = new FormData(form);
    await fetch(
      'https://cors-anywhere.herokuapp.com/https://formspree.io/xdowvgvb ',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        mode: 'cors',
      }
    )
      .then((res) => {
        if (res.status === 200) {
          success();

          console.log('success');
        } else {
          error();
          console.log('oops! there was a problem');
        }
      })
      .then((res) => {
        res.json();
        console.log(res);
      });
    // .catch((err) => {
    //   console.log('request fail');
    // });
  }
  // make menu btn work
  const menuBtn = document.querySelector('.menuBtn');
  const mainMenu = document.querySelector('.mainMenu');
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('act');
    if (menuBtn.classList.contains('act')) {
      mainMenu.classList.add('act');
    } else {
      mainMenu.classList.remove('act');
    }
  });
});

// const nav = document.querySelector('#nav');
// const menu = document.querySelector('#menu');
// const menuToggle = document.querySelector('.navbar_toggle');
// let isMenuOpen = false;

// // * TOGGLE MENU ACTIVE STATE

// menuToggle.addEventListener('click', (e) => {
//   e.preventDefault();
//   isMenuOpen = !isMenuOpen;
//   // toggle all attributes and active class
//   menuToggle.setAttribute('aria-expanded', String(isMenuOpen));

//   menu.hidden = !isMenuOpen;
//   nav.classList.toggle('nav--open');
// });

// const nav = document.querySelector('#nav');
// const menu = document.querySelector('#menu');
// const menuToggle = document.querySelector('.nav__toggle');
// let isMenuOpen = false;

// // TOGGLE MENU ACTIVE STATE
// menuToggle.addEventListener('click', (e) => {
//   e.preventDefault();
//   isMenuOpen = !isMenuOpen;

//   // toggle a11y attributes and active class
//   menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
//   menu.hidden = !isMenuOpen;
//   nav.classList.toggle('nav--open');
// });

// // TRAP TAB INSIDE NAV WHEN OPEN
// nav.addEventListener('keydown', (e) => {
//   // abort if menu isn't open or modifier keys are pressed
//   if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
//     return;
//   }

//   // listen for tab press and move focus
//   // if we're on either end of the navigation
//   const menuLinks = menu.querySelectorAll('.nav__link');
//   if (e.keyCode === 9) {
//     if (e.shiftKey) {
//       if (document.activeElement === menuLinks[0]) {
//         menuToggle.focus();
//         e.preventDefault();
//       }
//     } else if (document.activeElement === menuToggle) {
//       menuLinks[0].focus();
//       e.preventDefault();
//     }
//   }
// });
