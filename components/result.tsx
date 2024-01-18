import { Textarea } from "@nextui-org/input";

import geminiAPI from "@/app/api/gemini";

export default async function Result({text}:{text:string}){
    const resp = await geminiAPI("hello");
    return(
        <Textarea
        value={resp==null?"":resp}
        />
    )
}

