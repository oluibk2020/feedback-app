import {Navigate, useNavigate } from "react-router-dom";

function Post() {
    const status = 200
    const navigate = useNavigate()

    if (status === 404) {
      return  <Navigate to= '/notfound' />
    }


    function onClick() {
        console.log('object')
        navigate('/about')

    }

  return (
    <div>
      <h2>Post</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
export default Post;
