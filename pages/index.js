import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex">
      <h2>
      Hello, {session?.user?.name}
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black">
      <img src={session?.user.image} alt="" className="w-6 h-6"></img>
      {session.user.name}
      </div>
      
      
    </div>
  </Layout>
}
 