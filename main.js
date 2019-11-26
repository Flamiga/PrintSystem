// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCs7dbh84XzGMud3OdFmW_CrjyTrpkc_Zo",
  authDomain: "print-system-30bb9.firebaseapp.com",
  databaseURL: "https://print-system-30bb9.firebaseio.com",
  projectId: "print-system-30bb9",
  storageBucket: "print-system-30bb9.appspot.com",
  messagingSenderId: "42923751776",
  appId: "1:42923751776:web:08a8ef0c6b637f0e99c605"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

"use strict";

// ---------- default SPA Web App setup ---------- //

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
}

// set default page
function setDefaultPage() {
  let page = "start";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

const selectedFile = document.getElementById('fileElem').files[0];

window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function(e) {
  if (fileElem) {
    fileElem.click();

  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>Du har endnu ikke valgt en fil</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 500;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = files[i].name;
      li.appendChild(info);
    }
  }
}

//genere en unik kode med math random

function randomstring(L) {
  var s = '';
  var randomchar = function() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  }
  while (s.length < L) s += randomchar();
  document.getElementById('value').innerHTML = s;
  return s;
}
console.log(randomstring(8));
