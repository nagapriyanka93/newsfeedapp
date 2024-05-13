import React, { useState } from 'react'

function NewsArticle({ article }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className='p-6 flex gap-4 border-b border-[#676767] items-center'>
            <div className='w-1/5'>
                {
                    !imageError ? 
                    <a href = {article.url}>
                    <img 
                        className='w-full h-60 rounded-lg cursor-pointer'
                        src={article.urlToImage} 
                        alt={article.title}
                        onError={() => setImageError(true)}  
                    />
                    </a> : 
                    <img 
                        className='w-full h-auto' 
                        src="https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_576/s3/2/50552/image%20not%20available(34).jpg" 
                        alt=""
                    />
                }
            </div>
            <div className='w-4/5 h-full p-2 flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                    <a href={article.url} className='hover:underline text-[22px] font-semibold leading-8 text-[#121212]'>{article.title}</a>

                    <p className='text-base text-[#454545]'>{article.description}</p>
                </div>
{/*                 
                {article.author ? 
                    <h2 className='font-semibold text-[14px]'>Author: <span className='font-normal text-red-500'>{article.author}</span></h2> : 
                    <h2 className='font-semibold text-[14px]'>No Author</h2>
                } */}
            </div>
        </div>
    )
}

export default NewsArticle;
