/**
 * ---------------------
 * CREATE EXPRESS SERVER
 * ---------------------
 * npm init
 * server এ node init করার পরে package.json এর ভিতরে Scripts এর মধ্যে “node index.js” Define করে দিতে হবে।
 * code: "start": "node index.js"
 * Create Entry Point: index.js
 *
 *----------------------
 * Install Express & Cors
 * ------------------------
 * npm install express cors
 *
 * create (.gitignore) file
 *
 * set express app, cors, port
 * send users data
 *--------------------------------
 * 1. Create a post API on Server side
 * 2. Client side sent data via post
 * 3. set fetch method inside the fetch option (second parameter)
 * 4. options will have three things: method
 * 5. options will have headers: 'content-type': 'application/json'
 * 6. body: dont forget to send data by JSON.Stringify in the body
 *
 * -------------------------------
 * on the server side: don't forget to use express.json() middleware
 * এখন client থেকে যে data পাঠানো হয়েছে সেগুলো server এ সরাসরি পাবে না। এর মধ্যে একটা middleware লাগবে। যেটা হল express.json()
 * middleware use করার পদ্ধতি হলে app.use(express.json())
 *
 *
 * -----------------------------
 * server post method catch করে app.post("/users", (req,res) => {
 * const user = req.body;
 * res.send(user) //frontend e response pathano
 * })
 */
