import { useState, useEffect } from "react";
import Calendar from "react-calendar";

function Services() {
  const [barberSelected, setBarber] = useState("JOHN_DOE");
  const [dateSelected, setDate] = useState(new Date());
  const [timeSelected, setTime] = useState("12:00");
  const [dateModalOpened, setModalOpened] = useState(false);
  const [dateTimePanel, switchDateTimePanel] = useState("DATE"); // DATE | TIME
  const [serviceSelected, setService] = useState("");
  // const value = newDate()
  // function onChange(newValue) { value = newValue; changeThatPartOfTheHTML() }
  // useState returns an array of the value and the function to change the value in React state/memory and React html
  
  useEffect(() => {
    console.log("CHANGED DATE: " + dateSelected);
  }, [dateSelected]);

  useEffect(() => {
    console.log("CHANGED SERVICE: " + serviceSelected);
  }, [serviceSelected]);

  useEffect(() => {
    //console.log("TIME STAMP:" + timeSelected.timeStamp)
    console.log("TIME CHANGED: " + timeSelected);
  }, [timeSelected]);
  // form 1: runs everytime the page reloads or updates from state changes
  // form 2: runs only once when the page loads
  // form 3: runs when a variable changes (in that array)

  function submitAppointment() {
    const hrDate = dateSelected.toLocaleDateString();
    const hrTime = timeSelected;
    alert("Appointment scheduled for " + hrDate + " at " + hrTime + " for " + serviceSelected + " with " + barberSelected + ".");
    // TODO: GraphQL mutation to add an appointment to the database
    // - Sending to graphQL: hrDate, hrTime, serviceSelected
    // - Saves under that user.
    setModalOpened(false);
  }

  return (
    <>
      <div
        className={
          "fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75" +
          (dateModalOpened ? "" : " hidden")
        }
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            <strong>Service:</strong> {serviceSelected}
            <br></br>
            { 
            dateTimePanel === "DATE" ? 
            <div>
              <h2 className="text-2xl font-bold mb-4">Select Date</h2>
              <Calendar onChange={setDate} value={dateSelected} />
            </div>
             : 
            <div>
              <h2 className="text-2xl font-bold mb-4">Select Time</h2>
              <input
                type="time"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                onChange={(event)=>{ setTime(event.target.value) }} 
              />
            </div>
            
            }
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-6 bg-blue-200 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={() => {
                switchDateTimePanel("DATE");
                setModalOpened(false);
              }}
            >
              Cancel
            </button>
            {
              dateTimePanel === "DATE" ?
                <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={() => {
                  switchDateTimePanel("TIME");
                }}
              >
                Next
              </button> :
              <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={() => {
                submitAppointment();
              }}
            >
              Submit
            </button>
            }
          </div>
        </div>
      </div>

      <main>
        <h2 className="text-center text-4xl font-semibold">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-4 mb-14"
            onClick={() => {
              setService("Traditional");
              setModalOpened(true);
            }}
          >
            <div className="relative">
              <div className="relative">
                <img
                  src="images/traditional.jpg"
                  alt="Placeholder"
                  className="rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Traditional<br></br>Mens Cut
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$45</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-8 mb-14"
            onClick={() => {
              setService("Straight Razor");
              setModalOpened(true);
            }}
          >
            <div className="relative">
              <div className="relative">
                <img
                  src="images/straight_razor1.jpg"
                  alt="Placeholder"
                  className="rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Straight Razor
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$45</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-4 mb-14"  onClick={() => {
              setService("Kidz Kutz");
              setModalOpened(true);
            }}>
            <div className="relative">
              <div className="relative">
                <img
                  src="images/Kidz_Kutz2.jpg"
                  alt="Picture of a child with a fade and design in the left hand side of his head"
                  className=" object-contain rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Kidz Kutz
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-4 mb-14"  onClick={() => {
              setService("Braid-UP");
              setModalOpened(true);
            }}>
            <div className="relative">
              <div className="relative">
                <img
                  src="images/braid_up1.jpg"
                  alt="this is a X style braid up"
                  className="rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Braid-UP
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$50</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-4 mb-14"  onClick={() => {
              setService("Fitzys Fade");
              setModalOpened(true);
            }}>
            <div className="relative">
              <div className="relative">
                <img
                  src="images/fitzy_fades1.jpg"
                  alt="someone getting a straight razor shave"
                  className="rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Fitzys Fade
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$60</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-cyan-600 rounded-lg shadow-md p-2 mr-4 mb-14"  onClick={() => {
              setService("Custom Designs");
              setModalOpened(true);
            }}>
            <div className="relative">
              <div className="relative">
                <img
                  src="images/custom_design1.jpg"
                  alt="Placeholder"
                  className="rounded-md z-1"
                ></img>
                <div className="absolute top-0 right-0 p-2 z-2">
                  <h2 className="text-xl text-amber-400 font-semibold mb-2">
                    Custom Designs
                  </h2>
                  <p className="text-teal-200 mb-2 text-right">$65</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <br />
      <br />
      <br />
    </>
  );
}

export default Services;
