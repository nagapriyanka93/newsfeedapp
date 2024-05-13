import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import TabButton from './TabButton';
import NewsArticle from './NewsArticle';

function Main() {
    const news = useSelector((state) => state.news.news.news);
    const activeTab = useSelector((state) => state.news.activeTab);

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if(news.length) {
            const list = news.filter(item => item.title === activeTab);
            setArticles(list[0].articles);
        }
    }, [news, activeTab]);

    return (
        <div className='w-screen h-screen flex flex-col gap-8'>
            <div className='w-full h-[50px] flex gap-2 mx-8 my-2'>
                {news.map(item => {
                    return (
                        <TabButton 
                            key={item.id}
                            title={item.title}
                        />
                    )
                })}
            </div>

            {/* To Map News Articles */}
            {articles.length && <div className='max-h-[calc(100%-50px)] overflow-y-scroll flex flex-col gap-8 mx-8 pr-4'>
                {articles.map(article => {
                    return (
                        <NewsArticle 
                            key={article.id} 
                            article={article} 
                        />
                    )
                })}
            </div>}
        </div>
    )
}

export default Main;
