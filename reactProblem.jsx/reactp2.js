<!DOCTYPE html>
<html lang="en">
  <head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Restaurant App</title>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      let customers = [];
      const capacity = 25;
      let seatsLeft = 25;

      const countRef = React.createRef();
      const nameRef = React.createRef();
      const phoneRef = React.createRef();

      const renderApp = () => root.render(<App />);

      const handleSubmit = (e) => {
        e.preventDefault();

        const count = Number(countRef.current.value);
        const name = nameRef.current.value.trim();
        const phone = phoneRef.current.value.trim();

        if (!count || !name || !phone) return;

        if (count > seatsLeft) {
          alert("Guest count exceeds capacity.");
          return;
        }

        if (customers.some(c => c.name === name)) {
          alert("Customer already exists");
          return;
        }

        customers.push({
          count,
          name,
          phone,
          checkin: new Date().toLocaleString()
        });

        seatsLeft -= count;

        countRef.current.value = "";
        nameRef.current.value = "";
        phoneRef.current.value = "";

        renderApp();
      };

      const deleteCustomer = (index) => {
        seatsLeft += customers[index].count;
        if (seatsLeft > capacity) seatsLeft = capacity;

        customers.splice(index, 1);
        renderApp();
      };

      const App = () => (
        <div className="App" style={{ textAlign: "center" }}>
          <h2>Total Capacity: {capacity}</h2>
          <h2>Seats Left: {seatsLeft}</h2>

          <form onSubmit={handleSubmit}>
            <input ref={countRef} type="number" placeholder="Guest Count" />
            <input ref={nameRef} placeholder="Name" />
            <input ref={phoneRef} placeholder="Phone" />
            <button type="submit">Add</button>
          </form>

          <table border="1">
            <thead>
              <tr>
                <th>Count</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Check In</th>
                <th>Remove Entry</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td>{c.count}</td>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.checkin}</td>
                  <td>
                    <button onClick={() => deleteCustomer(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    </script>
  </body>
</html>
