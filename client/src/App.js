import { useEffect } from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import AppRoute from "./routes/AppRoute";
import toast from "react-hot-toast";

export default function App() {
  useEffect(()=>{
    toast.success("Hello")
  },[])
  return (
    <>
      <Header/>
      <AppRoute/>
      <Footer/>
    </>
  )
}