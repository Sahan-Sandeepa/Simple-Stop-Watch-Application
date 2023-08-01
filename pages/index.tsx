import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Stopwatch from './component/stopWatch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return <div className={styles.container}>
      <Stopwatch />
    </div>

}
