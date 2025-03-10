"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Timer, Users, Share2 } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

const product = {
  name: "50kg Rice Bag",
  basePrice: 50,
  tiers: [
    { buyers: 5, price: 50 },
    { buyers: 20, price: 45 },
    { buyers: 50, price: 40 },
  ],
  images: ["/rice-bag.jpg", "/rice-bag2.jpg", "/rice-bag1.jpg"],
  deadline: "2025-03-12T23:59:59",
};

const TradeRice = () => {
  const [buyers, setBuyers] = useState(12);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const deadline = new Date(product.deadline);
      const diff = deadline.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(
          days > 0
            ? `${days}d ${hours}h ${minutes}m ${seconds}s`
            : `${hours}h ${minutes}m ${seconds}s`
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentTier = product.tiers.reduce((prev, tier) => (buyers >= tier.buyers ? tier : prev), product.tiers[0]);
  const progress = (buyers / product.tiers[product.tiers.length - 1].buyers) * 100;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center">
        <Slider {...settings} className="w-full max-w-md">
            {product.images.map((img, index) => (
              <div key={index} className="w-full h-64 relative">
                <Image src={img} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
              </div>
            ))}
          </Slider>
        </div>
        <Card className="shadow-xl w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <div className="flex items-center text-red-500 font-semibold">
                <Timer size={24} className="mr-2 animate-pulse" /> {timeLeft}
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-600">${currentTier.price}</p>
            <p className="text-gray-600 mt-2 flex items-center"><Users className="mr-2" size={20} /> {buyers} Buyers Joined</p>
            <Progress value={progress} className="my-4" />
            {buyers >= 50 ? (
              <p className="text-lg text-green-600 font-semibold">Lowest price unlocked! Grab yours now!</p>
            ) : (
              <p className="text-lg mt-4">Join now! <b>{product.tiers[2].buyers - buyers}</b> more buyers to unlock $40 per bag.</p>
            )}
            <div className="flex gap-4 mt-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3" onClick={() => setBuyers(buyers + 1)}>
                Join Group Purchase
              </Button>
              <Button className="w-1/4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3">
                <Share2 size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Rice Group Buying Program</h1>
        <p className="text-lg text-gray-700 mt-2">Experience the power of collective purchasing and get high-quality rice at unbeatable prices!</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-lg">
          {product.tiers.map((tier) => (
            <div key={tier.buyers} className="bg-gray-100 p-4 rounded-lg shadow">
              <span className="text-blue-600 font-bold">{tier.buyers} Buyers</span> → ${tier.price} per bag
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-6">
          Whether you&apos;re a <span className="font-bold">restaurant</span>, <span className="font-bold">grocery store</span>, or <span className="font-bold">household</span>, join the group and unlock the best price of <span className="text-blue-600 font-bold">$40 per 50kg bag</span>.
        </p>
      </div>
    </div>
  );
};

export default TradeRice;
