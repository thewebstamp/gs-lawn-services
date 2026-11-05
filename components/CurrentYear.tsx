"use client";

import { useEffect, useState } from "react";

// Shows the current year in the browser only, so server rendering never reads the clock.
export default function CurrentYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}
