document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "遇见你是我最美好的事情",
        "每一天都因为有你而变得特别",
        "你是我生命中最重要的人",
        "520，我爱你！",
        "愿我们的爱情永远甜蜜"
    ];

    let currentMessageIndex = 0;
    const typingText = document.querySelector('.typing-text');

    function typeMessage(message, index = 0) {
        if (index < message.length) {
            typingText.textContent += message[index];
            setTimeout(() => typeMessage(message, index + 1), 100);
        } else {
            setTimeout(() => {
                typingText.textContent = '';
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                typeMessage(messages[currentMessageIndex]);
            }, 2000);
        }
    }

    // 开始打字效果
    typeMessage(messages[currentMessageIndex]);

    // 创建漂浮的爱心
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
        heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
        heart.style.opacity = '0.8';

        document.querySelector('.floating-hearts').appendChild(heart);

        // 动画结束后移除爱心
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // 定期创建漂浮的爱心
    setInterval(createFloatingHeart, 300);
}); 