import React, { useState } from 'react'

import styles from './styles.module.scss'

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const digitRegexp = /\d/

type NumberDisplayProps = {
  numberString: string //'123'
}

const NumberDisplay: React.FC<NumberDisplayProps> = (props) => {
  const { numberString } = props
  return (
    <div className={styles.numberDisplay}>
      {numberString.split('').map((digitStr) => (
        <div className={styles.digitWrapper}>
          {digitRegexp.test(digitStr) ? (
            //  {/* 展示数字 */}
            <span className={styles.digitList} style={{ transform: `translate(-50%,${-Number(digitStr) * 10}%)` }}>
              {digits.map((digit) => (
                <span className={styles.digit} key={digit}>
                  {digit}
                </span>
              ))}
            </span>
          ) : (
            // 展示字符
            <span>{digitStr}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default NumberDisplay
