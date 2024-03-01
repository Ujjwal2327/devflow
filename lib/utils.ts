import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const time = now.getTime() - createdAt.getTime();
  const sec = Math.floor(time / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);

  if (year > 0) {
    return `${year} year${year > 1 ? 's' : ''} ago`;
  } else if (month > 0) {
    return `${month} month${month > 1 ? 's' : ''} ago`;
  } else if (week > 0) {
    return `${week} week${week > 1 ? 's' : ''} ago`;
  } else if (day > 0) {
    return `${day} day${day > 1 ? 's' : ''} ago`;
  } else if (hour > 0) {
    return `${hour} hour${hour > 1 ? 's' : ''} ago`;
  } else if (min > 0) {
    return `${min} minute${min > 1 ? 's' : ''} ago`;
  } else {
    return `${sec} second${sec > 1 ? 's' : ''} ago`;
  }
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}