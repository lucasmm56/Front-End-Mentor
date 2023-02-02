function validateFields() {
    const firstname = new_account.firstname;
    const lastname = new_account.lastname;
    const email = new_account.email;
    const password = new_account.password;

    checkRequiredFields(firstname, 'firstname__error', 'firstname_icon_error');
    checkRequiredFields(lastname, 'lastname__error', 'lastname_icon_error');
    checkRequiredFields(email, 'email__error', 'email_icon_error');
    checkRequiredFields(password, 'password__error', 'password_icon_error');
}

function checkRequiredFields(field, span_error, icon_error) {
    if (!field.value) {
        const name_error = document.getElementById(`${span_error}`);
        const icons_error = document.getElementById(`${icon_error}`);
        document.getElementsByName('email')[0].placeholder='email@example/com';
        name_error.classList.add('visible');
        icons_error.classList.add('visible');
        style(`${span_error}`, `${icon_error}`);
    }
}

function style(span_error, icon_error) {
    let css = `
        main{
            height:120vh;
        }
        #${span_error}.visible {
            display: block;
            color:var(--red);
            font-size: 10px;
            font-style: italic;
            text-align: right;
            margin-bottom: 1em;
            outline: none !important;

        }
          
        .${span_error}__border {
            border: 2px solid var(--red);
            margin-top: 1em;
        }
        input::placeholder{
            color:transparent;
        }

        #email_info::placeholder{
            color:var(--red);
        }

        #${icon_error}.visible{
            display:block;
            padding-top: 0.8em;
            padding-right: 1em;
        }
    `;

    let style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}
