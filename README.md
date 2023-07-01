# firefox-private-window
This repo provides sample code to reproduce the below issue:

**Issue Statement**: Cypress is not execute tests in private window of Mozilla Firefox browser

**Issue Details**: In cypres.config.js file, below configuration is used: 
![image](https://github.com/anand-naik/firefox-private-window/assets/60295289/f5ba1af8-d920-407f-9744-6762ad451aa7) 

Using above configuration, cypress launches firefox browser in private window but when the script execution starts, it gives below error:
![image](https://github.com/anand-naik/firefox-private-window/assets/60295289/7ad739ad-868d-40cf-b2f4-e958e33179d2) 

Cypress Version used: 12.16.0
Mozilla Firefox version used: 114.0.2 (64 bit)

