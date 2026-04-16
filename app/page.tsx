'use client';

import { useEffect, useState } from 'react';
import './birthday.css';

export default function BirthdayPage() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const closedLetter = document.getElementById('closedLetter');
    const openLetter = document.getElementById('openLetter');
    const closeBtn = document.getElementById('closeBtn');

    const handleOpen = () => {
      setIsOpened(true);
      createConfetti();
    };

    const handleClose = () => {
      setIsOpened(false);
    };

    closedLetter?.addEventListener('click', handleOpen);
    closeBtn?.addEventListener('click', handleClose);

    return () => {
      closedLetter?.removeEventListener('click', handleOpen);
      closeBtn?.removeEventListener('click', handleClose);
    };
  }, [isOpened]);

  const createConfetti = () => {
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }, i * 30);
    }
  };

  return (
    <>
      {/* Animated Background */}
      <div className="background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <span className="decoration">🎂</span>
        <span className="decoration">🎉</span>
      </div>

      {/* Main Container */}
      <div className="container">
        <div className="letter-wrapper">
          {/* Closed Letter */}
          <div className={`letter-closed ${isOpened ? 'hidden' : ''}`} id="closedLetter">
            <span className="envelope-icon">✉️</span>
            <h2>You Have a Special Message!</h2>
            <p>A heartfelt birthday wish is waiting for you...</p>
            <div className="click-instruction">Click to Open</div>
          </div>

          {/* Open Letter */}
          <div className={`letter-open ${!isOpened ? 'hidden' : ''}`} id="openLetter">
            <h1>🎉 Happy Birthday! 🎉</h1>
            <p className="subtitle">Sheetal Ma'am</p>

            <div className="letter-content">
              <p>
                I hope you have a wonderful day and a year full of happiness and good health. You truly deserve it.
              </p>

              <p>
                I just wanted to say thank you for everything you do for us. You are not only a great teacher but also someone who always supports and motivates us. The way you explain things makes learning easier, even when the subject feels difficult at first.
              </p>

              <p>
                Your encouragement means a lot to me. Even when we are not very confident, you believe in us and help us keep going. That really makes a big difference.
              </p>

              <p>
                Also, thank you for being so patient with us—especially when we are late with assignments or ask the same questions again and again. We may not always show it, but we really appreciate your efforts.
              </p>

              <p>
                You have taught us many important things, not just from books but also about how to handle challenges and keep improving. I feel lucky to have you as my professor.
              </p>

              <p>
                Once again, wishing you a very Happy Birthday. May you always stay happy and continue to inspire students like me.
              </p>

              <div className="closing">
                <p>With warmest wishes,</p>
                <p>Aniket Tayade.</p>
              </div>
            </div>

            <button className="close-btn" id="closeBtn">Close Letter</button>
          </div>
        </div>
      </div>
    </>
  );
}
