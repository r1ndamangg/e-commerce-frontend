"use client"
import Lottie from "lottie-react"
import animationData from "@/public/animations/loading.json"

const Loading = () => {
  return <Lottie animationData={animationData} loop />
}

export default Loading
