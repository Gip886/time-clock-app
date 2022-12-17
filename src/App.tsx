import dayjs from 'dayjs'
import { useEffect, useState, useMemo } from 'react'
import NumberDisplay from './components/NumberDisplay'
import styles from './styles.module.scss'

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) * min)
}

function App() {
  const [time, setTime] = useState<number>(Date.now().valueOf())
  const [numbeerString, setNumbeerString] = useState<string>('0.123')

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf())
    }, 1000)
  }, [])

  const timeStr = useMemo(() => {
    return dayjs(time).format('HH:mm:ss')
  }, [time])

  console.log(timeStr)

  // useEffect(() => {
  //   setInterval(()=>{
  //     setNumbeerString(getRandomNumber(100,999).toString())
  //   },1000)
  // }, [])

  return (
    <div className={styles.app}>
      <NumberDisplay numberString={timeStr} />
    </div>
  )
}

export default App
