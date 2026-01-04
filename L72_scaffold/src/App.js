import "./styles.css";
// Create a object name "styles" to store all the styles.
const styles ={
  form:{
        width: "60%",
        margin: "50px auto",
        display: "flex",
       flexDirection: "column",
       gap: 20
  },
  heading:{
       fontSize: "2rem",
       letterSpacing: 2
  },

  inputs:{
    padding: 10
  },

  actions:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },

  buttons: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}

export default function App() {
  return (
    <div>
      {/* Use an internal style object instead of inline styles for the form element. */}
      <form style={styles.form}>
        {/* Use an internal style object instead of inline styles for the heading. */}
        <h3 style={styles.heading}>Sign Up</h3>
        {/* Use an internal style object instead of inline styles for the username input. */}
        <input style={styles.inputs} placeholder="Username" />
        {/* Use an internal style object instead of inline styles for the email input. */}
        <input style={styles.inputs} placeholder="Email" />
        {/* Use an internal style object instead of inline styles for the password input. */}
        <input style={styles.inputs}   placeholder="Password" />
        {/* Use an internal style object instead of inline styles for the action container. */}
        <div>
          {/* Use an internal style object instead of inline styles for the Cancel button. */}
          <button style={styles.buttons} >Cancel</button>
          {/* Use an internal style object instead of inline styles for the Login button. */}
          <button style={styles.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
}
