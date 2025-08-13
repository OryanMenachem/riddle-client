document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginBtn").addEventListener("click", function () {
    console.log("Login button clicked");
    sendHttpRequest("login");
  });

  document.getElementById("signupBtn").addEventListener("click", function () {
    console.log("Sign Up button clicked");
    sendHttpRequest("signup");
  });

  document.getElementById("playBtn").addEventListener("click", function () {
    console.log("Play button clicked");
    sendHttpRequest("play");
  });
});

async function sendHttpRequest(action) {
  try {
    const response = await fetch(`http://localhost:3000/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: action }),
    });

    if (response.ok) {
      const html = await response.text(); // מקבלים HTML מהשרת
      document.open(); // פותחים מחדש את הדף
      document.write(html); // כותבים את ה-HTML החדש
      document.close(); // סוגרים כדי שהדפדפן יעבד את הדף
    } else {
      console.error(`${action} failed:`, response.statusText); // טיפול בשגיאה אם לא OK
    }
  } catch (error) {
    console.error(`Error with ${action}:`, error); // טיפול בשגיאות רשת או אחרות
  }
}
