import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import activeMenu from './helpers/selected_menu.js';
import parallax from './components/parallax.js';
import updateDateYear from './helpers/date_updater.js';
import sendEmail from './helpers/send_form.js';

loader();

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

