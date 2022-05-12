import React, { useState } from 'react'
import styles from './SearchForm.module.css';
import searchIcon from '../../UI/img/searchIcon.png';


const SearchForm = (props) => {


    const [inputValue, setInputValue] = useState('')

    const [searchBarActive, setSearchBarActive] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            console.log(inputValue)
            props.searchQuerySetter(inputValue)
            setSearchBarActive(true)
            setInputValue('')
        };
    }

    return (
        <div className={`${styles.search_container} ${searchBarActive ? styles.search_container_active : ''}`}>
            <form onSubmit={formSubmit} className={styles.search_form}>
                <img className={styles.search_icon} src={searchIcon} alt="" />
                <input onChange={(e) => { setInputValue(e.target.value) }} value={inputValue} className={styles.search_input} type="text" placeholder="Введите поисковой запрос  ..." />
                <button className={styles.search_button} >
                    Поиск
                </button>
            </form>
        </div>
    )
}

export default SearchForm