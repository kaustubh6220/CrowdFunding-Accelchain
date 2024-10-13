"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { createCampaign } from "@/services/fundVerse";
import { ethers } from "ethers";

declare global {
    interface Window {
        ethereum: any;
    }
}

const CampaignForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    if (!title || !story || !goal || !image || !date) {
      alert("All fields are required.");
      return false;
    }
    if (isNaN(Number(goal)) || Number(goal) <= 0) {
      alert("Please enter a valid goal in ETH.");
      return false;
    }
    if (!isValidUrl(image)) {
      alert("Please enter a valid image URL.");
      return false;
    }
    return true;
  };

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const deadline = Math.floor(new Date(date!).getTime() / 1000);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      await createCampaign(title, story, goal, deadline, image);

      alert("Campaign created successfully!");
      router.push("/"); 
    } catch (error: any) {
      console.error("Error creating campaign:", error);
      if (error.code === 4001) {
        alert("Transaction rejected by the user.");
      } else {
        alert("Failed to create campaign. Please check the console for details.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="p-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-white px-4 pt-6">
        Start a Campaign
      </h1>
      <div className="flex flex-col items-center  p-8">
        <form className="w-full grid grid-cols-2 p-4" onSubmit={handleCreateCampaign}>
          <div className="p-4 col-span-2">
            <Label className="text-lg text-white">Campaign Title</Label>
            <Input
              className="mt-2 bg-slate-700 border-slate-700 ring-slate-700 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="p-4 col-span-2">
            <Label className="text-lg text-white">Story</Label>
            <Textarea
              className="mt-2 bg-slate-700 border-slate-700 ring-slate-700 text-white"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
            />
          </div>

          <div className="p-4">
            <Label className="text-lg text-white">Goal (ETH)</Label>
            <Input
              type="text"
              className="mt-2 bg-slate-700 border-slate-700 ring-slate-700 text-white"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </div>

          <div className="p-4 flex flex-col w-full">
            <Label className="text-lg text-white">End Date</Label>
            <Popover>
              <PopoverTrigger className="w-full mt-2 rounded-md bg-slate-700 border-slate-700 text-white" asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="p-4 col-span-2">
            <Label className="text-lg text-white">Image URL</Label>
            <Input
              className="mt-2 w-full bg-slate-700 rounded-md border-slate-700 text-white"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="w-full col-span-2 mt-4 flex items-center justify-center">
            <Button
              type="submit"
              className="bg-transparent rounded-md mb-4 hover:border-violet-600 border-2"
              disabled={isLoading}
            >
              {isLoading ? "Creating Campaign..." : "Submit New Campaign"}
            </Button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CampaignForm;
