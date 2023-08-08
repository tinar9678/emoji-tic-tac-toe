'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Game from './game'

export default function Home() {
  const [result, setResult] = useState("hello");
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        	&#129321;&#128515; emoji toe (a game of tic-tac-toe with emojis) &#128518;&#128561;
      </div>
      <Game></Game>
      <div className={styles.result}>{result}</div>
    </main>
  )
}
