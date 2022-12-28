import React from 'react'
import logo from './logo.svg'
import separator from './separator.svg'
import style from './Landing.module.css'

export const Landing = () => (
  <section>
    <header id={style.header}>
      <img
        src={logo}
        alt="Beer City Landscapes"
      />
    </header>
    <main id={style.main}>
      <h1 className={style.line}>Mat Holcomb</h1>
      <h2 className={style.line}>Proprietor</h2>

      <h2 id={style.tel} className={style.line}>
        <a href="tel:828-989-9904">(828)989-9904</a>
      </h2>

      <img className={style.separator} src={separator}/>
      <h2 id={style.site} className={style.line}>
        <a href="mailto:Beer%20City%20Landscapes%20%3CBeerCityLandscapes@GMail.com%3E">
          beercitylandscapes&shy;@gmail.com
        </a>
      </h2>

      <img className={style.separator} src={separator}/>
      <section id={style.download}>
        <a href="/beer_city_scapes.vcf">Mat’s Contact Card</a>
      </section>
    </main>
  </section>
)

export default Landing
