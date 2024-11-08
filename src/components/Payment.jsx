import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Payment = () => {
  const cardNumberInput = useRef(null);
  const cardHolderInput = useRef(null);
  const monthInput = useRef(null);
  const yearInput = useRef(null);
  const cvvInput = useRef(null);
  const cardsNumberBox = useRef(null);
  const cardsHolderName = useRef(null);
  const expMonth = useRef(null);
  const expYear = useRef(null);
  const cvvBox = useRef(null);
  const frontCard = useRef(null);
  const backCard = useRef(null);

  useEffect(() => {
    const handleCardNumberInput = () => {
      cardsNumberBox.current.innerText = cardNumberInput.current.value;
    };

    const handleCardHolderInput = () => {
      cardsHolderName.current.innerText = cardHolderInput.current.value;
    };

    const handleMonthInput = () => {
      expMonth.current.innerText = monthInput.current.value;
    };

    const handleYearInput = () => {
      expYear.current.innerText = yearInput.current.value;
    };

    const handleCvvMouseEnter = () => {
      frontCard.current.style.transform = 'perspective(1000px) rotateY(-180deg)';
      backCard.current.style.transform = 'perspective(1000px) rotateY(0deg)';
    };

    const handleCvvMouseLeave = () => {
      frontCard.current.style.transform = 'perspective(1000px) rotateY(0deg)';
      backCard.current.style.transform = 'perspective(1000px) rotateY(180deg)';
    };

    const handleCvvInput = () => {
      cvvBox.current.innerText = cvvInput.current.value;
    };

    // Attach event listeners
    cardNumberInput.current.addEventListener('input', handleCardNumberInput);
    cardHolderInput.current.addEventListener('input', handleCardHolderInput);
    monthInput.current.addEventListener('input', handleMonthInput);
    yearInput.current.addEventListener('input', handleYearInput);
    cvvInput.current.addEventListener('mouseenter', handleCvvMouseEnter);
    cvvInput.current.addEventListener('mouseleave', handleCvvMouseLeave);
    cvvInput.current.addEventListener('input', handleCvvInput);

    // Clean up event listeners on unmount
    return () => {
      cardNumberInput.current.removeEventListener('input', handleCardNumberInput);
      cardHolderInput.current.removeEventListener('input', handleCardHolderInput);
      monthInput.current.removeEventListener('input', handleMonthInput);
      yearInput.current.removeEventListener('input', handleYearInput);
      cvvInput.current.removeEventListener('mouseenter', handleCvvMouseEnter);
      cvvInput.current.removeEventListener('mouseleave', handleCvvMouseLeave);
      cvvInput.current.removeEventListener('input', handleCvvInput);
    };
  }, []);

  return (
    <div>
      <div className="containers">
        <div className="cards-containers">
          <div className="front" ref={frontCard}>
            <div className="image">
              <img src="asset/chip.png" alt="" />
              <img src="asset/visa.png" alt="" />
            </div>
            <div className="cards-number-box" ref={cardsNumberBox}>################</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="cards-holder-name" ref={cardsHolderName}>full name</div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month" ref={expMonth}>mm</span>
                  <span className="exp-year" ref={expYear}>yy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back" ref={backCard}>
            <div className="stripe" />
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box" ref={cvvBox} />
              <img src="asset/visa.png" alt="" />
            </div>
          </div>
        </div>
        <form>
          <div className="inputBox">
            <span>card number</span>
            <input type="text" maxLength={16} className="cards-number-input" ref={cardNumberInput} />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input type="text" className="cards-holder-input" ref={cardHolderInput} />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select ref={monthInput} className="month-input">
                <option value="month" selected disabled>month</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
                ))}
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select ref={yearInput} className="year-input">
                <option value="year" selected disabled>year</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={2023 + i}>{2023 + i}</option>
                ))}
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input type="text" maxLength={4} className="cvv-input" ref={cvvInput} />
            </div>
          </div>
          <input type="submit" defaultValue="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Payment;
