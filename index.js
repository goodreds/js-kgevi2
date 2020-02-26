// Import stylesheets
import './style.scss';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <figure class="article">
  <div class="article__hero">
    <img
      src="https://images.pexels.com/photos/48153/polar-bear-the-bear-water-48153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="Pizza"
      class="carousel__img article__img"
    />
    <!--
      <img src="https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="carousel__img article__img" />
      <img src="https://images.pexels.com/photos/162320/polar-bear-ice-arctic-white-162320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="carousel__img article__img" />
      <img src="https://images.pexels.com/photos/140097/pexels-photo-140097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="carousel__img article__img" />
    -->
  </div>
  <div class="article__content">
    <div class="article__title">
      <h1 class="article__heading">Polar bear</h1>
      <div class="article__tag article__tag--1">#Ursus</div>
      <div class="article__tag article__tag--2">#maritimus</div>
    </div>
    <p class="article__description">
      The polar bear is a <strong>hypercarnivorous</strong> bear whose native
      range lies largely within the Arctic Circle, encompassing the Arctic
      Ocean, its surrounding seas and surrounding land masses.
    </p>
    <div class="article__details">
      <p class="article__detail">
        <span class="emoji">⚖️</span>&le; 700<sub>&nbsp;kg</sub>
      </p>
      <p class="article__detail">
        <span class="emoji">📏</span>8<sub>&nbsp;ft</sub>&nbsp;- 10<sub
          >&nbsp;ft</sub
        >
      </p>
      <p class="article__detail">
        <span class="emoji">⭐️</span>4.7 <sub>&nbsp;/ 5</sub>
      </p>
    </div>
  </div>
  <div class="article__price">
    <sub>RATING</sub>&nbsp;-&nbsp;<strong>PSYCHOBEAR</strong>
  </div>
</figure>

`;