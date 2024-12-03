"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function useNavigationEvent(sendFunction) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    sendFunction(url);
  }, [pathname, searchParams, sendFunction]);
}

export default useNavigationEvent;
