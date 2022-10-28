import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'


import './CreateReview.css'



function CreateReview({setShowModal}) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const history = useHistory()


    const [stars, setStars] = useState()
    const [reviews, setReviews] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [reviewImg, setReviewImg] = useState('')
    const [validations, setValidations] = useState([])


    useEffect(() => {   
        const errors = []
        if (stars <= 0 || stars > 5) errors.push('Select a star between 1 to 5')
        if (reviews.length < 20 || reviews.length > 255) errors.push('Please add a review between 21 to 255 characters')
        if (
          (!reviewImg.includes("jpg") &&
            !reviewImg.includes("png") &&
            !reviewImg.includes("jpeg") &&
            !reviewImg.includes("svg")) ||
          (!reviewImg.includes("https") && !reviewImg.includes("http"))
        )
          errors.push("Please enter a valid url image");
    }, [stars, reviews, reviewImg])

    return (
        <div>
            <form>

            </form>
        </div>
    )
}



export default CreateReview