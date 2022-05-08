import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
// import home from './pages/home.js';
import calcu from './pages/calcu.js';

export default function() {
  addPage('', calcu);
  addPaths('site', []);
}
