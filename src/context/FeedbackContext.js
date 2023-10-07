import {createContext, useState} from 'react'
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: "This item is from context one",
        rating: 7,
      },
      {
        id: 2,
        text: "This item is from context two",
        rating: 9,
      },
      {
        id: 3,
        text: "This item is from context three",
        rating: 8,
      },
      {
        id: 4,
        text: "This item is from context four",
        rating: 10,
      },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //delete feedback
    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete")) {
        setFeedback(feedback.filter((ren) => ren.id !== id));
      }
    }

    //update feedback item

    const updateFeedback= (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item))
    }

    //set item to be updated
    const editFeedback = (item) => {
       setFeedbackEdit({
        item,
        edit: true,
       }) 
    }

    //add feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

    return <FeedbackContext.Provider value = {{
        feedback: feedback,
        feedbackEdit,
        handleDelete: deleteFeedback,
        handleAdd: addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext