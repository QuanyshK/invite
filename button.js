const wrapper = document.querySelector('.wrapper');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
yesBtn.addEventListener('click', function() {
    window.location.href = 'happy.html';
});
noBtn.addEventListener('mouseover', () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
});
