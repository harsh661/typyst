import React from "react"

interface AvatarProps {
    src?: string
    name?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, name }) => {
  return (
    <img src={src ? src : ""} alt={name} className="avatar"/>
  )
}

export default Avatar