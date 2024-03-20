import React from 'react'
import CommentsData from './CommentsData';

const CommentContainer = () => {
  return (
    <div className='m-2 p-2'>
      <div className='text-2xl font-semibold'>Comments:</div>
      <CommentsData />

    </div>
  )
}

export default CommentContainer;