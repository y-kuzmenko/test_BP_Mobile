import './styles.css';

import DE from './i18n/de.json';
import EN from './i18n/en.json';
import ES from './i18n/es.json';
import FR from './i18n/fr.json';
import JA from './i18n/ja.json';
import PT from './i18n/pt.json';

const languages = {
    "de": DE,
    "en": EN,
    "es": ES,
    "fr": FR,
    "ja": JA,
    "pt": PT,
};

const perYear = '$39.99';
const yearlyPerWeek = '$0.48';
const weeklyPerWeek = '$6.99';

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

const browserLang = navigator.language.slice(0, 2);

const langCode = languages[langParam] ? langParam : (languages[browserLang] ? browserLang : 'en');
const langData = languages[langCode];

document.documentElement.lang = langCode;

document.querySelector('.title').innerHTML = langData['Get Unlimited <br>Access'];
document.querySelector('.item_1_text').innerHTML = langData['Unlimited Art <br>Creation'];
document.querySelector('.item_2_text').innerHTML = langData['Exclusive <br>Styles'];
document.querySelector('.item_3_text').innerHTML = langData['Magic Avatars <br>With 20% Off'];   
document.querySelector('.best_offer').innerHTML = langData['BEST OFFER']; 
document.querySelector('.yearly_access').innerHTML = langData['YEARLY ACCESS'];
document.querySelector('.per_year').innerHTML = langData['Just {{price}} per year'].replace('{{price}}', perYear);
document.querySelector('.yearly_per_week').innerHTML = langData['{{price}} <br>per week'].replace('{{price}}', yearlyPerWeek);
document.querySelector('.weekly_access').innerHTML = langData['WEEKLY ACCESS'];
document.querySelector('.weekly_per_week').innerHTML = langData['{{price}} <br>per week'].replace('{{price}}', weeklyPerWeek);
document.querySelector('.btn').innerHTML = langData['Continue'];
document.querySelector('.terms').innerHTML = langData['Terms of Use'];
document.querySelector('.policy').innerHTML = langData['Privacy Policy'];
document.querySelector('.restore').innerHTML = langData['Restore']; 

let yearlyAccess = true;
let weeklyAccess = false;
document.querySelector('.yearly_access_wrapper').className += ' selected';

document.querySelector('.yearly_access_wrapper').addEventListener('click', () => {
    yearlyAccess = true;
    weeklyAccess = false;
    document.querySelector('.yearly_access_wrapper').className += ' selected';
    document.querySelector('.weekly_access_wrapper').classList.remove('selected');
});
document.querySelector('.weekly_access_wrapper').addEventListener('click', () => {
    weeklyAccess = true;
    yearlyAccess = false;
    document.querySelector('.weekly_access_wrapper').className += ' selected';
    document.querySelector('.yearly_access_wrapper').classList.remove('selected');
});

document.querySelector('.btn').addEventListener('click', () => {
    if (yearlyAccess) {
      window.location.href = 'https://apple.com/';
    }
    if (weeklyAccess) {
        window.location.href = 'https://google.com/';
      }
  });