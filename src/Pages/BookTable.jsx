import React from 'react'


import './BookTable.css';

const BookTable = () => {
  return (
    <div className='main-BookTable-section'>
      <div className="left-BookTable-Section">
        <h3>Book A Table</h3>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="tel" placeholder='Phone Number' />
          <input type="Email" placeholder='Your Email' />
          <input type="number" placeholder='How many persons ?' />
          <input type="date" placeholder='mm/dd/yyyy' />
          <button className='submit-button' type='submit'>Submit</button>
        </form>
      </div>
      <div className="Right-BookTable-Section">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57570.30096943738!2d85.1608884!3d25.600137099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723887768078!5m2!1sen!2sin" width="600" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </div>
  )
}

export default BookTable
