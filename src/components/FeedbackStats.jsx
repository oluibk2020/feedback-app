import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)


    //calculate average
    let sum = 0
    let average = 0
    {feedback.map((feedback) => {
       return sum += feedback.rating
    })}
    average = (sum/feedback.length)
    average = average.toFixed(1)

    return ( 
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
     )

}

export default FeedbackStats;