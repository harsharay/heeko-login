export const validateInput = input => {

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneNumberRegex = /^[0-9 ]{10}$/
    let isAnEmail;

    let output = emailRegex.test(input) || phoneNumberRegex.test(input)

    if(emailRegex.test(input)) {
        isAnEmail = true
    } else {
        isAnEmail = false
    }

    return {output, isAnEmail}
}