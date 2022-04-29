import Feedback from '@src/Feedback'
import Layout from '@src/Layout/Layout'
import type { NextPage } from 'next'


const FeedbackPage: NextPage = () => {

    return (
        <Layout active="feedback">
            <Feedback />
        </Layout>
    )
}

export default FeedbackPage