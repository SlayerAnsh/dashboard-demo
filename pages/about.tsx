import About from '@src/About'
import Layout from '@src/Layout/Layout'
import type { NextPage } from 'next'


const AboutPage: NextPage = () => {

    return (
        <Layout active='about'>
            <About />
        </Layout>
    )
}

export default AboutPage