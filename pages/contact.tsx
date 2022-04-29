import Contact from '@src/Contact'
import Layout from '@src/Layout/Layout'
import type { NextPage } from 'next'


const ContactPage: NextPage = () => {

    return (
        <Layout active='contact'>
            <Contact />
        </Layout>
    )
}

export default ContactPage