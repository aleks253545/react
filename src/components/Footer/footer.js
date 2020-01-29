import React from 'react'
import ReactDom from 'react-dom'
import s from './footer.module.css';


const Footer =(props)=>{

    return(
        <footer className={s.footer}>
            <span className={s.footer__text}>copyright @lodossteam 2018</span>
        </footer>
    )
}
export default Footer