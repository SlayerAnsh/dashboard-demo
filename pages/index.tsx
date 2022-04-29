import Home from '@src/Home'
import Layout from '@src/Layout/Layout'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout active="home">
      <Home />
    </Layout>
  )
}

export default HomePage
