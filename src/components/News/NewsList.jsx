import React from 'react'
import Moment from 'react-moment'
import { StyledNewsList } from '../Styles/NewsList.Styled'
import crypto from '../../Assets/crypto.jpg'

const NewsList = ({  news  }) => {
    
    return (
        
            <StyledNewsList>
                
                    <a href={news.url} target='_blank' rel="noreferrer">
                        <div className='row-1'>
                            <img src={news?.image?.thumbnail?.contentUrl || crypto} alt="" /> 
                            <div>
                                <h3>{news?.name.length > 50 ? `${news?.name.substr(0, 50)}...` : news?.name}</h3>
                                <p>{news?.description.length > 100 ? `${news?.description.substr(0, 100)}...` : news?.description.length}</p>
                            </div>
                        </div>
                        <div className='row-2'>
                            <div>
                                <img src={news?.provider[0]?.image?.thumbnail?.contentUrl } alt="" />
                                <p>{news?.provider[0]?.name}</p>
                            </div>
                            <p>
                                <Moment toNow>{news?.provider[0]?.datePublished }</Moment>
                            </p>
                        </div>
                    </a>
                    
            </StyledNewsList>
        
    )
}

export default NewsList