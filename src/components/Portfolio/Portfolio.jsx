import React from 'react'
import './portfolio.scss'
import homegroup from '../../assets/homegroup.uz.png'
import dilshadlounger from '../../assets/Screenshot_5.png'
import sportmix from '../../assets/Screenshot_6.png'

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <div className="double-column">
                <div className="keysContainer col1">
                    <div className="text-keys">
                        <div className="keys-type">
                            #веб-сайт
                        </div>
                        <div className="keys-title">
                            Home Group
                        </div>
                        <div className="keys-desc">
                            Мы предлагаем вам наши услуги по ремонту и дизайну квартир. Сочетание качества и современности
                        </div>
                    </div>
                    <div className="keysPhoto">
                        <img src={homegroup} alt="" />
                    </div>
                </div>
                <div className="keysContainer col2">
                    <div className="text-keys">
                        <div className="keys-type">
                            #веб-сайт
                        </div>
                        <div className="keys-title">
                            Home Group
                        </div>
                        <div className="keys-desc">
                            Мы предлагаем вам наши услуги по ремонту и дизайну квартир. Сочетание качества и современности
                        </div>
                    </div>
                    <div className="keysPhoto">
                        <img src={dilshadlounger} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="double-column">
                <div className="keysContainer col3">
                    <div className="text-keys">
                        <div className="keys-type">
                            #веб-сайт
                        </div>
                        <div className="keys-title">
                            Dilshad Lounge Bar
                        </div>
                        <div className="keys-desc">
                            Мы предлагаем вам наши услуги по ремонту и дизайну квартир. Сочетание качества и современности
                        </div>
                    </div>
                    <div className="keysPhoto">
                        <img src={dilshadlounger} alt="" />
                    </div>
                </div>
                <div className="keysContainer col4">
                    <div className="text-keys">
                        <div className="keys-type">
                            #веб-сайт
                        </div>
                        <div className="keys-title">
                            Sportmix
                        </div>
                        <div className="keys-desc">
                            Мы предлагаем вам наши услуги по ремонту и дизайну квартир. Сочетание качества и современности
                        </div>
                    </div>
                    <div className="keysPhoto">
                        <img src={sportmix} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
