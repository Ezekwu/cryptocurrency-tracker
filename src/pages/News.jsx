import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const News = () => {
    return (
        <div>News
            <Sparklines data={[5, 10, 5, 20]} width={100} height={20}>
                <SparklinesLine color="blue" />
                </Sparklines>
        </div>
        


    )
}

export default News