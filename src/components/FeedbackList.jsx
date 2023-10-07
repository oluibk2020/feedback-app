import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion } from "framer-motion";

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  const {handleDelete} = useContext(FeedbackContext)


  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  } else {
    return (
      <div className="feedback-list">

        {feedback.map((item) => {
          //rendering the list and passing the data to it
          return (
            <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.8}}
          >
            <FeedbackItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
          );
        })}
      </div>
    );
  }
}

export default FeedbackList;
