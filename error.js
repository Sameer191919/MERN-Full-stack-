try {
    let result = JSON.parse("invalid JSON");
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  