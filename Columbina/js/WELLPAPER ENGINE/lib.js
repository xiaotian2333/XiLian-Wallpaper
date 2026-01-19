//实验动态调整
// (function () {
//     const originalOpen = XMLHttpRequest.prototype.open;
//     const originalSend = XMLHttpRequest.prototype.send;

//     XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
//         this._url = url;
//         return originalOpen.apply(this, arguments);
//     };

//     XMLHttpRequest.prototype.send = function (body) {
//         if (this._url && this._url.includes("dali.afb61ed1.json")) {
//             setTimeout(() => {
//                 fetch(this._url)
//                     .then(res => res.json())
//                     .then(jsonObj => {
//                         jsonObj.bones[0].x = -2200;
//                         jsonObj.bones[0].y = -450;

//                         const jsonStr = JSON.stringify(jsonObj);

//                         Object.defineProperty(this, 'responseText', { value: jsonStr });
//                         Object.defineProperty(this, 'response', { value: jsonStr });
//                         Object.defineProperty(this, 'status', { value: 200 });
//                         Object.defineProperty(this, 'readyState', { value: 4 });

//                         this.onreadystatechange && this.onreadystatechange();
//                         this.onload && this.onload();
//                     });

//             }, 0);

//             return;
//         }

//         return originalSend.apply(this, arguments);
//     };
// })();
