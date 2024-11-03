import './App.scss';

const App: React.FC = () => {
  return (
    <div className="donation">
      <div className="donation__content-wrapper">

        <div className="donation__text-section">
          <img className="donation__logo" src="/logo.png" alt="Logo" />
          <h1 className="donation__title">Ajude quem realmente
            precisa da sua ajuda.</h1>
          <p className="donation__description">Com apenas 1 real você pode me ajudar
            a alimentar cães de rua.</p>
          <button className="donation__button">Ajudar agora</button>
        </div>
        <img className="donation__image--primary" src="/dog.png" alt="Dog" />
      </div>

      {/* <div className="donation__background-symbol"></div> */}

      <div className="donation__additional-info">
        <div className="donation__additional-section">
          <img className="donation__image--secondary" src="/dog2.png" alt="Dog" />
          <div className="donation__text-additional">
            <h2 className="donation__title--secondary">
              Os cães falam, mas apenas
              para quem sabe ouvir.
            </h2>
            <p className="donation__description--secondary">
              Descubra histórias encantadoras, segredos reveladores e a profunda conexão entre humanos e seus leais companheiros. Prepare-se para uma jornada única, onde a linguagem dos cães ganha vida para aqueles que estão sintonizados com o inexplorado mundo canino.
            </p>
            <button className="donation__button--secondary">Saiba mais</button>
          </div>
        </div>
      </div>

      <div className="donation__foods">
        <div className="donation__food-card">
          <img src="/food1.png" alt="Comida para cães 1" />
          <h2 className="donation__food-title">Special Dogs</h2>
          <p className="donation__food-description">Oferece uma refeição completa rica em proteínas e vitaminas.</p>
          <button className="donation__food-button">Comprar agora</button>
        </div>
        <div className="donation__food-card">
          <img src="/food2.png" alt="Comida para cães 2" />
          <h2 className="donation__food-title">Biscrok</h2>
          <p className="donation__food-description">Biscoitos crocantes em formato de ossos com cálcio e ômega 6.</p>
          <button className="donation__food-button">Comprar agora</button>
        </div>
        <div className="donation__food-card">
          <img src="/food3.png" alt="Comida para cães 3" />
          <h2 className="donation__food-title">Drools</h2>
          <p className="donation__food-description">Pedaços reais de fígado de frango e frango em molho.</p>
          <button className="donation__food-button">Comprar agora</button>
        </div>
      </div>
    </div>
  );
};

export default App;
