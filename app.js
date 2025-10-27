
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

// ================== DATABASE SETUP ==================
mongoose.connect("mongodb://127.0.0.1:27017/authDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }
});
const User = mongoose.model("User", UserSchema);

// ================== MIDDLEWARE ==================
function auth(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not authorized" });

    try {
        const decoded = jwt.verify(token, "SECRET123"); // secret key
        req.user = decoded;
        next();
    } catch {
        res.status(400).json({ message: "Invalid token" });
    }
}

// ================== ROUTES ==================

// Register
app.post("/register", async (req, res) => {
    const { username, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    try {
        const user = new User({ username, password: hashed, role });
        await user.save();
        res.json({ message: "User registered successfully!" });
    } catch {
        res.status(400).json({ message: "User already exists" });
    }
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, "SECRET123", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful!" });
});

// Logout
app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully!" });
});

// Protected route (only logged in users)
app.get("/protected", auth, (req, res) => {
    res.json({ message: `Hello ${req.user.id}, you are authenticated!` });
});

// ================== START SERVER ==================

app.listen(5000, () => console.log("Server running on http://localhost:5000"));



function test(){
    console.log("hello");
}

test()
