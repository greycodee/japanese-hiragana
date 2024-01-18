import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Suspense } from "react";
import Result from "@/components/result";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-4">
		<Button color="primary" className="max-w-xs">添加注音</Button>
      <Textarea
        label="Description"
        placeholder="Enter your description"
        className="max-w-xs"
      />
	  <Suspense fallback={<div>Loading...</div>}>
		<Result text="hello"/>
	  </Suspense>
	
      
    </main>
  );
}
