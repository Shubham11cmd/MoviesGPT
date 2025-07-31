export const Validateform = (email, password) => {
    const cemail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const cpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!cemail) {
        return "Email is not valid!";
    }

    if (!cpassword) {
        return "Password is not valid!";
    }

    return null;
};
