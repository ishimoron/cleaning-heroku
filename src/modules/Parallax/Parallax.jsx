import React from 'react'
import { useSpring, animated } from 'react-spring'
import './styles.css'
// import Button from '../../components/Button/Button'
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10 + 40}px,0)`
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 15 + 35}px,0)`

function Parallax() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="banner" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <div class="parallax">
        <animated.div class="layer layer1" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div class="mainBtn" style={{ transform: props.xy.interpolate(trans3) }} />
      </div>
      <div class="text-container animated fadeInLeft delay-2s">
        <h4>Мы уберём в вашей квартире</h4>
        <h1>Клининговая компания #1 в Мариуполе</h1>
      <div className="phone animated bounceInRight delay-2s">
        <a href="tel:+380963493572"><SmartphoneIcon/> &nbsp;+380-97-014-21-04</a>
      </div>
      </div>
    </div>
  )
}

export default Parallax
