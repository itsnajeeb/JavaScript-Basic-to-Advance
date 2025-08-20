//Sesstion Storage ->
//Cleared when tab or browser is closed
//Unique to the specific tab (not shared with other tabs)
//Strings only (use JSON.stringify / JSON.parse for objects)

// Clear everything first
localStorage.clear();
sessionStorage.clear();

console.log("LocalStorage after clear:", localStorage.length);
console.log("SessionStorage after clear:", sessionStorage.length);

// Set test values
sessionStorage.setItem("sessionTest", "HelloSession");
localStorage.setItem("localTest", "HelloLocal");

// Show what's stored
console.log("SessionStorage now:", sessionStorage.getItem("sessionTest"));
console.log("LocalStorage now:", localStorage.getItem("localTest"));
