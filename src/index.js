const express=require('express');
const cors = require("cors");
const ServerConfig=require('./config/servercofig');
const connectdb=require("./config/dbConfig");

const cookieParser = require("cookie-parser");



//routes
const UserRouter=require("./Routes/UserRoutes");
const AuthRouter=require("./Routes/AuthRoutes");
const router=require("./Routes/CarRoutes");

const app=express();
const allowedOrigins = [
    'https://react-carbuy-9sylun1vs-satyam-chauhans-projects.vercel.app'// Development frontend
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true, // ✅ Allow cookies and authentication headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Set-Cookie'] // ✅ Expose 'Set-Cookie' header if needed // ✅ Allow cookies
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); 

app.use('/user',UserRouter);
app.use('/login',AuthRouter);
app.use("/car",router); 


app.listen(ServerConfig.PORT,async ()=>{
     
      await connectdb();
      console.log(`server started at PORT ${ServerConfig.PORT}..`);
      
})
