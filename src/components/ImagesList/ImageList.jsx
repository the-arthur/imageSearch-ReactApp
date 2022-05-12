import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './ImageList.module.css';

const ImageList = (props) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        if (props.searchQuery) {
            axios.get(`https://pixabay.com/api/?key=25851454-30b4df0e04510a4ddc67a506f&per_page=20&q=${props.searchQuery}`)
                .then((response) => {
                    // console.log(response.data.hits);
                    setImages(response.data.hits)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [props.searchQuery])

    return (
        <ul className={styles.images_list}>
            {
                images.map((image) => <li key={image.id} className={styles.images_item} ><img src={image.webformatURL} alt="" className={styles.images} /></li>)
            }
        </ul>
    )
}

export default ImageList