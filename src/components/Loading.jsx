import React from 'react';
import LoadingBrandMark from './LoadingBrandMark';

const Loading = ({
  title = 'Preparando tu espacio',
  description = 'Estamos organizando todo para que continúes con comodidad.'
}) => (
  <div className="evh-app-loading" role="status" aria-live="polite" aria-busy="true">
    <style>{`
      .evh-app-loading {
        box-sizing: border-box;
        width: 100%;
        min-height: clamp(300px, 48vh, 520px);
        flex: 1 0 auto;
        display: grid;
        place-items: center;
        padding: 36px 20px;
        text-align: center;
        background: transparent;
      }
      .evh-app-loading-card {
        width: min(100%, 360px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
      }
      .evh-app-loading-mark {
        width: 76px;
        height: 76px;
        display: grid;
        place-items: center;
        border-radius: 24px;
        color: #fff;
        background: linear-gradient(145deg, #174783, #102e59);
        box-shadow: 0 10px 28px rgba(18, 54, 108, .18);
        animation: evh-loading-float 2.2s ease-in-out infinite;
      }
      .evh-app-loading-mark .evh-loading-brand-icon {
        width: 43px;
        height: 43px;
      }
      .evh-app-loading-copy { display: flex; flex-direction: column; align-items: center; gap: 9px; }
      .evh-loading-kicker {
        color: #e8872d;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: .18em;
      }
      .evh-app-loading-copy h1 {
        margin: 0;
        color: #17365f;
        font-size: clamp(20px, 4vw, 24px);
        line-height: 1.25;
        font-weight: 700;
      }
      .evh-app-loading-copy p {
        max-width: 300px;
        margin: 0;
        color: #718096;
        font-size: 14px;
        line-height: 1.55;
      }
      .evh-loading-lines {
        width: 118px;
        height: 4px;
        display: flex;
        gap: 5px;
        overflow: hidden;
        margin-top: 9px;
        border-radius: 999px;
        background: #e7edf5;
      }
      .evh-loading-lines span {
        flex: 1;
        border-radius: inherit;
        background: #ed8d32;
        transform: scaleX(.35);
        transform-origin: left;
        animation: evh-loading-progress 1.15s ease-in-out infinite;
      }
      .evh-loading-lines span:nth-child(2) { animation-delay: .15s; }
      .evh-loading-lines span:nth-child(3) { animation-delay: .3s; }
      @keyframes evh-loading-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @keyframes evh-loading-progress {
        0%, 100% { opacity: .45; transform: scaleX(.3); }
        50% { opacity: 1; transform: scaleX(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        .evh-app-loading-mark, .evh-loading-lines span { animation: none; }
        .evh-loading-lines span { transform: scaleX(.7); opacity: .8; }
      }
    `}</style>
    <div className="evh-app-loading-card">
      <span className="evh-app-loading-mark" aria-hidden="true"><LoadingBrandMark /></span>
      <div className="evh-app-loading-copy">
        <span className="evh-loading-kicker">ELECTROVIBEHOME</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="evh-loading-lines" aria-hidden="true"><span /><span /><span /></div>
      </div>
    </div>
  </div>
);

export default Loading;
