"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";



const FloatingNavbar = () => {
  return (
    <div className='text-white relative'>
        {
        navItems.map((navItem:any,idx:number) => (
            <Link
            key={`link=${idx}`}
            href={navItem.link}
            >
            <span>{navItem.icon}</span>
            <span>{navItem.name}</span>
            </Link>
        ))
    }</div>
  )
}

export default FloatingNavbar