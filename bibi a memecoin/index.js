const mobileIcon = document.querySelector(".nav__icon");
const navItems = document.querySelector(".nav__items");
const copyButton = document.querySelector(".tokenomic__copied");
const bibiContractCopiedAlert = document.querySelector(".tokenomic__info-alert");
const foundationContractCopiedAlert = document.querySelector(".bibi-foundation__contract-alert");
const navigationLinks = document.querySelectorAll('.nav__link');
const foundationContract = document.querySelector(".bibi-foundation__contract");

mobileIcon.onclick = function () {
  mobileIcon.classList.toggle("open");
  navItems.classList.toggle("open");

  document.addEventListener("click", function (event) {
    const target = event.target;

    if (!target.closest(".nav")) {
      mobileIcon.classList.remove("open");
      navItems.classList.remove("open");
    }
  });
};

copyButton.addEventListener("click", () => {
  copyToClipboard("0xfe8bf5b8f5e4eb5f9bc2be16303f7dab8cf56aa8" , bibiContractCopiedAlert);
});

foundationContract.addEventListener("click" , () => {
  copyToClipboard("0xb2b72adc8B5f377ECaa0b2bB400A5F011b1fc76a" , foundationContractCopiedAlert);
});

function copyToClipboard(text, element) {
  console.log("clicked")
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("ok");
      element.classList.add("visible");
      setTimeout(function () {
        element.classList.remove("visible");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error copying text to clipboard:", error);
    });
};

navigationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


