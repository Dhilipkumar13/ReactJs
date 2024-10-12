import React, { useState } from 'react'

const PostForm = () => {
    const [ post , setPost ] = useState( {
        title : "",
        body : ""
    });
   // console.log(post)

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);

    }

    const renderFeild = ( label ) => (
        <div>
            <label > {label} </label>
            <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value = {post[label.toLowerCase()]} />
            
        </div>
    )
  return (
    <form>
        {renderFeild('Title')}
        {renderFeild('Body')}
        <button className='btn btn-danger m-2' onClick={handleSubmit}> Submit </button>
    </form>
  )
}

export default PostForm