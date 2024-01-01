import React, { useState } from "react";

function BookingForm(props) {
  const [date, setdate] = useState("");
  const [Time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occ, setocc] = useState("");

  const handlechange = (e) => {
    setdate(e);
    props.dispatch(e); // Fix typo: props.dispatch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  return (
    <>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="book-date">choose date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handlechange(e.target.value)}
                  type="date"
                  required
                />
              </div>
              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map((availableTime) => { // Fix variable name
                    return (
                      <option key={availableTime}>{availableTime}</option> // Fix variable name
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="book-guests">Number of Guests</label>
                <input
                  id="book-guests"
                  min="1"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="book-occasion">Occasion:</label>
                <select
                  id="book-occasion"
                  value={occ}
                  onChange={(e) => setocc(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option> 
                </select>
              </div>
              <div>
                <input aria-label="on-click" type="submit" value={"make your reservation"} />
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </>
  );
}

export default BookingForm;
