// SPDX-License-Identifier: GPL-3.0-or-later
import('./app.mjs').catch(error=>{
  document.getElementById('output').textContent='Browser startup failed: '+error.message;
  document.getElementById('jobStatus').textContent='Startup error';
});
