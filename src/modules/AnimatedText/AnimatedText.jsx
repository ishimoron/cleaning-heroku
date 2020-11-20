import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'

function AnimatedText() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#fff' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#4b4b4b' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#4b4b4b' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#4b4b4b' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Cleaning', 'It`s', 'Easy']), 1000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="MainAnimateText">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default AnimatedText
