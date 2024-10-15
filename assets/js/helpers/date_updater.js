function updateDateYear() {
    const currentYear = new Date().getFullYear()

    const texts = {
        es: "CFD/CAE COLOMBIA ©, Todos los derechos reservados",
        fr: "CFD/CAE COLOMBIA ©, Tous les droits réservés",
        en: "CFD/CAE COLOMBIA ©, All the rights are reserved",
        de: "CFD/CAE COLOMBIA ©, Alle Rechte vorbehalten."
    };

    const copyrightElement = document.querySelector('.footer__copy')
    const language = document.documentElement.lang;

    copyrightElement.textContent =`${currentYear} - ${texts[language]}`;
}

export default updateDateYear