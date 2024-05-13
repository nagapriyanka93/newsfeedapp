import React, { act, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../Features/newsSlice';

function TabButton({ title }) {
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.news.activeTab);

    const handleTabClick = () => {
        dispatch(changeTab(title));
    }

    return (
        <button onClick={handleTabClick} className={`select-none px-4 py-2 ${activeTab === title ? 'border-b-4 border-[#3a7ada]' : ''}`}>
            {title}
        </button>
    )
}

export default TabButton;
