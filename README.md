#StealthV2
Stealth V2 is a new proxy based off Rhodium, meant for people who care more about privacy than unblocking sites.</br>

✅AES URL Encryption</br>
✅Multiple Encryption Methods</br>
✅LocalStorage Verification</br>
✅Most Site Support</br>
✅Custom Key and IV Support (for AES)</br>
✅AES Salting (to avoid rainbow table attacks)</br>
Stealth is a proxy site meant to be disguised as another site, like a math guide. The math guide site contains a proxy form, but you can only use that after clicking a button (that changes the LocalStorage value). Once done browsing, you can hit another button to disable the LocalStorage value, or just change the AES key. Third parties won't be able to see or decode what you are doing. However, since Stealth is meant to be a disguised site, you must have good CSS skills or a known fork to use it practically.</br>

Setting up Stealth is easy, just run these commands.</br>
npm i crypto-js</br>
npm i</br>
npm run start</br>

Once you have Stealth set up, you'll want to change the AES key. The AES key can be found in lib/main/index.js and lib/encode.js, make sure to change it in both files. To change the CSS of the site, you'll want to use a style element in index.html, and not an external stylesheet, which will not work due to the nature of Rhodium. You'll also want to use Base64 when implementing images for this reason.</br>

lib/rewrite/html.js contains the javascript executed when a users cookie is not valid, change the site in window.location.replace to your schools site, a math site, or just back to your disguised sites home page.</br>

Happy Bypassing!
