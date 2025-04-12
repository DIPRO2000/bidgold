import Agent from "../models/Agent.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();
const Agent_JWT_Secret=process.env.AGENT_JWT_SECRET;
if(!Agent_JWT_Secret)
{
    throw new Error("AGENT_JWT_SECRET is not defined in environment variables!");
}
//Agent Registration
export const AgentRegister = async(req,res)=>
{
    try 
    {
        const {firstName, lastName, username, password} = req.body;

        // Validate password
        if (!password || password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        // Check if Agent already exists
        const existingUser = await Agent.findOne({ $or:[{username}]});
        if (existingUser) {
            return res.status(400).json({ message: "Agent with this username already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAgent=new Agent({
            firstName,
            lastName,
            username,
            password:hashedPassword
        });

        await newAgent.save();

        res.status(201).json({ message: "Agent registered successfully!" });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//Agent Login
export const AgentLogin=async(req,res)=>
{
    try 
    {
        const { username, password }=req.body;

        //Username Found
        const AgentUser=await Agent.findOne({username});
        if(!AgentUser) res.status(400).json({message:"Username Not Found"});

        //Password Check
        const isMatch=await bcrypt.compare(password,AgentUser.password);
        if(!isMatch) res.status(400).json({message:"PASSWORD IS INCORRECT"});

        // Generate JWT token
        const token = jwt.sign({ AgentId: AgentUser._id }, Agent_JWT_Secret, { expiresIn: "1d" });

        // Return user info with token
        res.json({
            token: `Bearer ${token}`, // Adding Bearer prefix
            agent: {
            id: AgentUser._id,
            firstName: AgentUser.firstName,
            lastName: AgentUser.lastName,
            },
        });
    } 
    catch (error) 
    {
        console.log({error: error.message})
        res.status(500).json({ error: error.message });
    }
}
